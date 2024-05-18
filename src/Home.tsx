import React, { useState, useEffect, useRef } from 'react';
import CarClickerButton from "./MainCar";
import Stats from "./Stats";
import { formatNumber } from './utils';

const CarClicker: React.FC = () => {
    const [miles, setMiles] = useState(0);
    const [engineHp, setEngineHp] = useState(1);

    const [autoClickerCost, setAutoClickerCost] = useState(10);
    const [autoClickerCount, setAutoClickerCount] = useState(0);

    const [engineUpgradeCost, setEngineUpgradeCost] = useState(10);
    const [currentEngineUpgrades, setCurrentEngineUpgrades] = useState(0);

    const autoClickerCountRef = useRef(autoClickerCount);

    const [cheatAdder, setCheatAdder] = useState(0);

    const handleCarClick = () => {
        setMiles(prevMiles => prevMiles + engineHp);
    };

    const handleAutoClickerUpgrade = () => {
        if (miles >= autoClickerCost) {
            setMiles(prevMiles => prevMiles - autoClickerCost);
            setAutoClickerCost(prevAutoClickerCost => prevAutoClickerCost * 2);
            setAutoClickerCount(prevCount => {
                const newCount = prevCount + 1;
                autoClickerCountRef.current = newCount;
                return newCount;
            });
        }
    }

    const handleUpgradePurchase = () => {
        if (miles >= engineUpgradeCost) {
            setCurrentEngineUpgrades(prevUpgrades => prevUpgrades + 1)
            setMiles(prevMiles => prevMiles - engineUpgradeCost);
            setEngineUpgradeCost(prevEngineUpgradeCost => prevEngineUpgradeCost * 2);
            setEngineHp(prevMultiplier => prevMultiplier + currentEngineUpgrades);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setMiles(prevMiles => prevMiles + (engineHp * autoClickerCountRef.current));
        }, 1000);

        return () => clearInterval(interval);
    }, [engineHp]);

    return (
        <>
            <h1 className="d-flex justify-content-center">Car Clicker</h1>
            <hr/>
            <div className="row align-middle">
                <div className="col-4">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <button
                                className="btn btn-primary"
                                onClick={handleAutoClickerUpgrade}
                            >
                                Buy AutoClicker ({formatNumber(autoClickerCost)} miles)
                            </button>
                            <br/>
                            <div className="d-flex flex-wrap">
                                {[...Array(autoClickerCount)].map((_, index) => (
                                    <p key={index} className="m-2">🚗</p>
                                ))}
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="d-flex justify-content-between">
                                <button
                                    className="btn btn-primary"
                                    onClick={handleUpgradePurchase}
                                >
                                    Upgrade ({formatNumber(engineUpgradeCost)} miles)
                                </button>
                                <span className={``}>{engineHp + 1}hp</span>
                            </div>
                        </li>
                        <li className="list-group-item disabled">Upgrade 3</li>
                        <li className="list-group-item disabled">Upgrade 4</li>
                    </ul>
                </div>
                <div className="col-4 text-center">
                    <CarClickerButton handleCarClick={handleCarClick}/>
                </div>
                <div className="col-4">
                    <Stats
                        miles={miles}
                        engineHp={engineHp}
                        cheatAdder={cheatAdder}
                        setCheatAdder={setCheatAdder}
                        setMiles={setMiles}
                    />
                </div>
            </div>
        </>
    );
};

export default CarClicker;

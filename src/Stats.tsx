import React from "react";
import { formatNumber } from './utils';

interface StatsProps {
    miles: number;
    engineHp: number;
    cheatAdder: number;
    setCheatAdder: React.Dispatch<React.SetStateAction<number>>;
    setMiles: React.Dispatch<React.SetStateAction<number>>;
}

const Stats :React.FC<StatsProps> = ({miles, engineHp, cheatAdder, setMiles,setCheatAdder}) => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">Current Stats</li>
                <li className="list-group-item">Miles: {formatNumber(miles)}</li>
                <li className="list-group-item">Engine HP: {engineHp}hp</li>
            </ul>
            <input
                type="number"
                value={cheatAdder}
                onChange={(e) => setCheatAdder(Number(e.target.value))}
            />
            <button
                onClick={() => setMiles(prevMiles => prevMiles + cheatAdder)}
            >
                Add Miles
            </button>
        </>
    )
}

export default Stats;
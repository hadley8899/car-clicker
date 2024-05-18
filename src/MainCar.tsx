import React from "react";
import './CarClickerButton.css';

interface CarClickerButtonProps {
    handleCarClick: () => void;
}

const CarClickerButton: React.FC<CarClickerButtonProps> = ({ handleCarClick }) => {
    return (
        <div className="road">
            <div className="car" onClick={handleCarClick}>
                🚗
            </div>
        </div>
    );
}

export default CarClickerButton;

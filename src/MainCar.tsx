import React from "react";
import './CarClickerButton.css';

interface CarClickerButtonProps {
    handleCarClick: () => void;
    isAnimating: boolean;
}

const CarClickerButton: React.FC<CarClickerButtonProps> = ({ handleCarClick, isAnimating }) => {
    return (
        <div className={`road ${isAnimating ? 'animate' : ''}`}>
            <div className={`car ${isAnimating ? 'drive' : ''}`} onClick={handleCarClick}>
                🚗
            </div>
        </div>
    );
}

export default CarClickerButton;

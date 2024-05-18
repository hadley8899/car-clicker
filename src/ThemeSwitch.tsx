import React, { useState, useEffect } from 'react';

const ThemeSwitch: React.FC = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.setAttribute('data-bs-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input"
                type="checkbox"
                id="themeSwitch"
                onChange={toggleTheme}
                checked={theme === 'dark'}
            />
            <label className="form-check-label" htmlFor="themeSwitch">
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </label>
        </div>
    );
};

export default ThemeSwitch;

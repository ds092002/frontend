import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="relative inline-block w-[3.5em] h-[2em]">
      <input
        type="checkbox"
        className="hidden peer"
        onChange={toggleTheme} 
        checked={theme === 'dark'}
      />
      <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-blue-500 transition-all duration-400 rounded-[30px] peer-checked:bg-black"></span>
      <span className="slider-dot absolute content-[''] h-[1.4em] w-[1.4em] rounded-[20px] bg-yellow-400 bottom-[0.3em] left-[0.3em] transition-all duration-400 peer-checked:bg-black peer-checked:transform peer-checked:translate-x-[1.5em] peer-checked:rounded-[50px] peer-checked:shadow-[inset_9px_0px_1px_0px_white]"></span>
    </label>
  );
};

export default ThemeSwitcher;

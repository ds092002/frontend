import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const Main = () => {
  const { theme } = useTheme();

  const themeClasses = theme === 'light' 
    ? 'bg-white text-black' 
    : 'bg-gray-800 text-white';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${themeClasses}`}>
      <h1 className="text-2xl mb-4">Dynamic Theme Context Example</h1>
      <ThemeSwitcher />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <Main />
  </ThemeProvider>
);

export default App;

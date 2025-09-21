import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'default' | 'white-piano-premium';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('default');

  const toggleTheme = () => {
    setTheme(prev => prev === 'default' ? 'white-piano-premium' : 'default');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className={theme === 'white-piano-premium' ? 'theme-white-piano' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
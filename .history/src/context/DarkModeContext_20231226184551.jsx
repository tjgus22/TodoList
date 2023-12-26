import { createContext } from 'react';
const DarkModeContext = createContext();
export const DarkModeContext = createContext();

export function DarkModeContext({ children }) {
  const [darkMode, setDarkmode] = useState(false);
  const toggleDarkMode = () => {
    setDarkmode((prev) => !prev);
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);

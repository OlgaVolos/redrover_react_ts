import {createContext, useState} from "react";
import {Form} from "./components/Form";
import {Button} from "./components/Button";


export const ThemeContext = createContext('light')
function App() {

  const [theme, setTheme] = useState('light')
  return (
      <>
        <ThemeContext.Provider value={theme}>
        <Form/>
      </ThemeContext.Provider>
        <Button onClick={() => {
        setTheme(theme === "dark" ? 'light' : 'dark')}
        }>Toggle theme</Button>

      </>
  );
}

export default App;
// ми можемо все обгорнути в ThemeContext.Provider, тоді можна написати початкову
//тему null, і тоді буде мінятися і тема кнопки toggle
// якщо залишити в даному варіанті, то тему треба задати, але тема кнопки не буде змінюватися

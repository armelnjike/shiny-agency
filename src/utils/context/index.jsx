import React, {useState} from "react";

export const Context = React.createContext()

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
      <Context.Provider value={{ theme, toggleTheme }}>
          {children}
      </Context.Provider>
  )
}
export const SurveyContext = React.createContext()

export const SurveyProvider = ({children}) => {
  const [resultats, setResultats] = useState({})
  const saveResults = async (c) =>{
    console.log(`avant le set c =${c} et resultat est = ${resultats}`)
    await setResultats({...resultats,...c})
    console.log({resultats})
  }
  return(
    <SurveyContext.Provider value = {{resultats,saveResults}}>
      {children}
      </SurveyContext.Provider>
  )
}

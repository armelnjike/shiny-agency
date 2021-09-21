import React from 'react'
import {createGlobalStyle} from 'styled-components'
import {useContext} from 'react'
import { Context } from '../../utils/context'


const StyleGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
       
        background-color : ${({isDarkMode}) => (isDarkMode ? "black":"white")} 
      margin: 5px 25px;
    }
    
`
function GlobalStyle(){
    const {theme} = useContext(Context)
    console.log(theme)
    return(
        <StyleGlobalStyle isDarkMode = {theme === "dark"} />
        )
}
export default GlobalStyle;
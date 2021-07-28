import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Montserrat', sans-serif;
  }
  html{
    @media screen and (max-width: 1120px){
      font-size: 93.75%;
    }
    @media screen and (max-width: 740px){
      font-size: 87.5%;
    }
  }
    /*body{
        background-color: ${({ theme }) => theme.mode.background.main};
        color: ${({ theme }) => theme.mode.text.primary};
        transition: all 0.4s ${({ theme }) => theme.transitions.easeInOut};
    }
    body::-webkit-scrollbar{
        width: ${({ theme }) => theme.size.xs};
        background-color: ${({ theme }) => theme.colors.scrollbar.background};
    }
    body::-webkit-scrollbar-thumb{
       border-radius: ${({ theme }) => theme.size.xs};
       background-color: ${({ theme }) => theme.colors.scrollbar.thump};
    }
    body::-webkit-scrollbar-track{
        border-radius: ${({ theme }) => theme.size.xs};
        background-color: ${({ theme }) => theme.colors.scrollbar.track};
    }*/
  a{
    text-decoration: none;
    cursor: pointer;
  }  
  button{
    cursor: pointer;
    border: none;
  }
`

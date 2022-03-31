import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');

 *{
   box-sizing: border-box;
 }

 body{
   font-family: 'Raleway', sans-serif;
   background: ${({ theme }) => theme.colors.body};
   margin: 0;
 }

`
export default GlobalStyles

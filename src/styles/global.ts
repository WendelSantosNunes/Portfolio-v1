import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-text-corpo: #EEEEEE;
        --background-button: #00ADB5;
        --background-card: #393E46;
        --text-body: #222831;
    }

    *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1008px){
            font-size: 93.75%;// 15px
        }

        @media(max-width: 720px){
            font-size:87.5%;// 14px
        }
    }

    body, input, textarea, button{
        font-family: 'Inter', sans-serif;
        font-weight: 400;// Font regular
    }

    // Fonte semi-bold
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 700;
    }


    button {
        cursor: pointer;
    }
    
`
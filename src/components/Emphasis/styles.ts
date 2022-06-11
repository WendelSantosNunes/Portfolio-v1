import styled from "styled-components";

export const Container = styled.section `
    max-width: 69.75rem;
    margin: 0 auto;
    
    padding: 0 1rem 4.6875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{ 
        p{
            font-size: 2.25rem;
        }
        strong {
            font-size: 4.25rem;
        }
    }

    img{
        width: 22rem;;
    }

    animation: anima2 1.7s 1.7s both;

    @keyframes anima2{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    @media (max-width: 50.625rem) {
        flex-wrap:wrap;
        justify-content: center;

        div{
            margin-top: 1.4375rem;
            padding-bottom: 1.875rem;
        }
    }

    @media (max-width: 21.5625rem){
        margin-top: 3.75rem;
    }
` 
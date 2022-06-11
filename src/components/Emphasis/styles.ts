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

    @media (max-width: 50.625rem) {
        flex-wrap:wrap;
        justify-content: center;

        div{
            padding-bottom: 30px;
        }
    }
` 
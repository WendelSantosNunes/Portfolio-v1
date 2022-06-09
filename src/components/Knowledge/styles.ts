import styled from 'styled-components'

export const Container = styled.section`
    max-width: 69.75rem;
    margin: 0 auto 6.9375rem auto;

    h2{
        text-align: center;
        padding-top: 3.75rem;
        font-size: 2.25rem;

        position:relative;
    }

    h2::after{
        content: '';
        width: 18rem;
        height: 2px;
        background-color: var(--text-body);

        
        display: block;
        margin: 0.625rem auto 3.125rem auto;
    }

    section{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1.5rem;


        > div {
            border: 2px solid var(--text-body);
            border-radius: 1.5rem;
            padding: 0 1.875rem;
            height: 370px;

            div {
                display: flex;
                align-items: center;
                justify-content: space-around;

                margin: 1rem 0;
            }

            p{
                text-align: justify;
                margin-bottom: 1rem;
            }
            
            ul li{
                margin-left: 1rem;
            }

        }
    }
`
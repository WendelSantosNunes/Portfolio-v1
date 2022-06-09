import styled from 'styled-components'

export const Container = styled.section`
    background-color: var(--background-button);
`

export const Content = styled.div`
    max-width: 69.75rem;
    margin: 0 auto;

    h2 {
        text-align: center;
        color: var(--background-text-corpo);

        padding-top: 3.75rem;
        font-size: 2.25rem;
        position:relative;
    }

    h2::after{
        content: '';
        width: 10rem;
        height: 2px;
        background-color: var(--background-text-corpo);

        
        display: block;
        margin: 0.625rem auto 3.125rem auto;
    }

    > div {
        display: grid;
        grid-template-columns: 1fr 1fr;

        div {
            width: 24.75rem;
            background-color: var(--background-card);
            border-radius: 0.625rem 0.625rem 0 0;

            div{
                margin: 1.25rem 0;
                text-align: center;
            }

            p:first-child{
                color: red;
            }
        }
    }
`
import styled from 'styled-components'

export const Container = styled.section`
    max-width: 69.75rem;
    margin: 0 auto 6.25rem auto;

    h2 {
        text-align: center;
        color: var(--text-body);

        padding-top: 3.75rem;
        font-size: 2.25rem;
        position:relative;
    }

    h2::after{
        content: '';
        width: 10rem;
        height: 2px;
        background-color: var(--text-body);

        
        display: block;
        margin: 0.625rem auto 3.125rem auto;
    }

    > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;

        form div {
            display: flex;
            align-items: center;
            justify-content: center;

            border: none;

            button {
                color: var(--background-text-corpo);
                background-color: var(--background-button);

                width: 12.625rem;
                padding: 0.8125rem;
                font-size: 1.125rem;

                border:none;
                border-radius: 0.625rem;
                font-weight: 700;

                transition: background-color 0.7s;

                &:hover{
                    background-color: var(--background-card);
                }
            }
        }

        form p{
            display: flex;
            flex-direction: column;

            label {
                margin-bottom: 0.75rem;
            }

            input,textarea {
                border: 1px solid var(--background-card);
                border-radius: 0.3125rem;
                padding: 0.875rem 0 0.857rem 0.9375rem;
                margin: 0 0 0.9375rem 1.125rem;
            }
        }
    }
    @media (min-width: 50.626rem){
         form p{
            input,textarea {
                width: 20.9375rem;
            }
        }
    }

    @media (max-width: 50.625rem) {
        > div{
            grid-template-columns: 1fr;

            form p{
                input,textarea {
                    max-width: 20.9375rem;
                }
            }
        }

        #active{
            display: none;
        }
    }
`
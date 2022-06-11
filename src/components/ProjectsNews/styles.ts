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


        > div {
            max-width: 24.75rem;
            height: 36.0625rem;

            background-color: var(--background-card);
            border-radius: 0.625rem 0.625rem 0 0;
            margin: 0 auto 2.5rem auto;
            
            color: var(--background-text-corpo);

            div{
                margin: 1.25rem 0;
                text-align: center;
            }

            .title {
                text-align: center;
                font-size: 1.5rem;
                padding-bottom: 1rem;
                margin-bottom: 1rem;
                border-bottom: 1px solid var(--background-button);
            }

            .title + p{
                margin-left: 0.5rem;
            }

            ul {
                margin-top: 1rem;
                height: 5.875rem;
                display: grid;
                grid-template-columns: 1fr 1fr;

                li{
                    margin-left: 28px;
                }
            }

            a {
                text-decoration: none;

                display: flex;
                align-items: center;
                justify-content: center;

                margin: 0 auto;
                padding: 0.3125rem 0;
                width: 253px;

                color: var(--background-text-corpo);
                background-color: var(--background-card);
                border: 1px solid var(--background-button);
                border-radius: 0.625rem;

                font-size: 1.25rem;

                img {
                    width: 1.875rem;
                    height: 1.875rem;
                    margin-right: 1rem;
                }

                transition: background-color 0.7s;

                &:hover{
                   background-color: var(--background-button);
                }
            }
        }
    }

    animation: anima5 1s 1.3s both;

    @keyframes anima5{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    @media (max-width: 50.625rem) {
        > div {
            grid-template-columns: 1fr;

            > div{
                div{
                    img{
                        max-width: 22.5rem;
                    }
                }
            }
        }
    }

    @media (max-width: 17.5rem) {
        > div {
            grid-template-columns: 1fr;

            > div{
                div{
                    img{
                        max-width: 20rem;
                    }
                }
            }
        }
    }
`
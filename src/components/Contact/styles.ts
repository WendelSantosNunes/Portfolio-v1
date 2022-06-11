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

    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    animation: anima6 1s 1s both;

    @keyframes anima6{
        from{
            transform: translateX(-200%);
        }
        to{
            transform: translateX(0%);
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
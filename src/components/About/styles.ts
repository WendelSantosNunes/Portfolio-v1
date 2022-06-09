import styled from 'styled-components';

export const Container = styled.section`
    background-color: var(--background-button);
`

export const Content = styled.div`
    max-width: 69.75rem;
    margin: 0 auto;
    padding-bottom: 7.3125rem;


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
        display: flex;
        justify-content: space-around;


        div{
            width: 27.875rem;
            
           
            p{
                margin: 0.625rem 0 0.4375rem 0;
                
                font-size: 1.25rem;
                text-align: justify;
                color: var(--background-text-corpo);
            }

            button{
                background-color: var(--background-button);
              
                width: 17.25rem;
                margin: 0.8125rem auto 0 auto;

                display: flex;
                align-items: center;
                justify-content: center;

                border: 1px solid var(--background-text-corpo);
                border-radius: 0.625rem;
                padding: 0.9375rem 0 0.9375rem 0;

                color: var(--background-text-corpo);
                font-size: 1.25rem;

                img{
                    margin-right: 2.5rem;
                }
            }
        }
    }
`
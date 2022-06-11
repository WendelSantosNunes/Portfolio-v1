import styled from 'styled-components'

export const Container = styled.footer`
    background-color: var(--background-button);
`

export const Content = styled.div`
    max-width: 69.75rem;
    margin: 0 auto;

    color: var(--background-text-corpo);
   
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        padding: 2.6875rem 0;
        font-size: 1.25rem;
        font-weight: 700;
    }

    animation: anima7 1s 1s both;

    @keyframes anima7{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        } 
    }
`
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
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        justify-items: center;
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

    @media (max-width: 37.5rem) {
        div{
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
        }
    }

    @media (max-width: 21.875rem) {
        div{
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 20px;
        }
    }
`
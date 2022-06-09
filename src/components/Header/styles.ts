import styled from "styled-components";

export const Container = styled.header `
    max-width: 69.75rem;
    margin: 0 auto;
    
    padding: 2.375rem 1rem 5.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav ul{
        list-style: none;

        display: flex;
        align-items: center;
        gap: 16px; 
        
        a {
            text-decoration: none;
            color: var(--text-body);
            
            font-size: 1.25rem;
            transition: font-size 0.2s;

            &:hover {
                font-size: 1.4rem;
                color: var(--background-button)
            }
        }
    }

   
` 
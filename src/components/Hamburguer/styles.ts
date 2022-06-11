import styled from "styled-components";

export const Container = styled.div`


    .app{
        position: relative;
    }

    .icon {
        position: absolute;
        z-index: 10;
        right: 10%;
        width: fit-content;
        height: 44px;
        cursor: pointer;
    }

    .hamburguer {
        position: absolute;
        top: 50%;
        left: 10%;
        width: 30px;
        height: 6px;
        
        background-color: #ff3300;
        box-shadow: 0 2px 4px rgba(0,0,0, 0.2);
        transition: 0.5s;
    }

    .hamburguer::before{
        position: absolute;
        content: '';
        top: -12px;
        width: 37px;
        height: 6px;

        background-color: #ff3300;
        box-shadow: 0 2px 4px rgba(0,0,0, 0.2);
        transition: 0.5s;
    }

    .hamburguer::after{
        top: 12px;
        content: '';
        position: absolute;
        width: 37px;
        height: 6px;
        background-color: #ff3300;
        box-shadow: 0 2px 4px rgba(0,0,0, 0.2);
        transition: 0.5s;
    }
 
    .list { 
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

        padding: 45px 0 0;
        font-size: 1.2rem;
    }
  

    .list .listItems{
       padding: 0;
       list-style: none;

       li {
            margin: 2px 8px;
            padding-top: 10px;

            & {
                font-weight: 800;
            }

            a{
                text-decoration: none;
                color: var(--background-text-corpo);
            }
       }
    }
 
    .icon.iconActive .hamburguer{
        background-color: transparent;
        box-shadow: 0 2px 5px transparent;

        &::after, &::before {
            top: 0;
            background-color: #fff;
            transform: rotate(225deg);
            box-shadow: 0 -2px 5px rgba(0,0,0,0.2);
        }

        &::before {
            transform: rotate(135deg);
        }
    }

    .menu.menuOpen {
        position: absolute;
        z-index: 4;
        right: 0;
        width: 150px;
        height: 190px;
        background-color: var(--background-button);
        box-shadow: 10px 0 69px 0 rgba(0,0,0,0.59);
    }

    .menu.menuClose {
        display: none;
        width: 0;
    }  

    img{
        margin-top: 7px;
    }

    animation: anima 1s 1s both;

    @keyframes anima{
        from{
            transform: translateX(-200%);
        }
        to{
            transform: translateX(0%);
        }
    }

    @media (max-width: 25rem){
        .icon {
            right: 15%;
        }
    }
` 
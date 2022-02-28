import styled from "styled-components";

export const Outdoor = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 90vh;
    background-image:
        linear-gradient(var(--black-overlay), var(--black-overlay)), 
        url(${(props)=> props.Banner})
    ;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Header = styled.header`
    display: flex;
    padding: 1.5rem 5rem;
    justify-content: space-between;
    align-items: center;
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 700;

    span {
        color: var(--primary);
    }

    .menu {
        display: flex;
        gap: 1rem;
        font-size: 1rem;
        font-weight: 400;

        .active {
            color: var(--primary);
        }
    }

`;

export const Table = styled.div`
    flex: 1;
    display: flex;
    padding: 0 5rem;
    align-items: center;
    justify-content: space-between;
`;

export const Presentation = styled.div`
    flex: 1;
    color: var(--text-color);

    h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    p{
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 5rem;
    }
`;

export const Button = styled.button`
    color: var(--text-color);
    background-color: var(--primary);
    padding: 1rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    border: none;
    transition: 400ms;
    cursor: pointer;

    :hover {
        border: 1px var(--primary) solid;
        opacity: 0.9;
    }
`;

export const ModelCar = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30vw;
    align-items: flex-end;

    span {
        min-width: 16rem;
        height: 2px;
        background-color: var(--primary);
        margin-bottom: 4px;
    }

    h2 {
        color: var(--text-color);
    }
`;

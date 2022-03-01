import styled from "styled-components";

export const CallUserAction = styled.section`
    
    
`;

export const HeaderCall = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--black);
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    text-transform: uppercase;
    color: var(--text-color);

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    p {
        max-width: 45rem;
        font-weight: 500;
    }
`;

export const CarrouselCall = styled.div`

`;

export const Slider = styled.div`
    background-image: url(${(props)=>props.Image});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    width: 100vw;
    height: 50rem;
`;

export const MiddleTexts = styled.div`
    display: flex;
    gap: 6rem;
    padding: 6rem;
    text-transform: uppercase;

    
    h2 {
        flex: 1;
        color: var(--primary);
        font-size: 1.5rem;
        font-weight: 600;
    }
    
    p {
        flex: 1;
        color: var(--text-color);
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1.5rem;
    }
`;

export const IndicatedLandscapes = styled.div`
    display: flex;
    padding: 0 6rem;
    gap: 1rem;
`;

export const Land = styled.div`
    flex: 1;
    background-image: url(${(props)=>props.Image});
    background-repeat: no-repeat;
    background-size: cover;
    height: 30rem;
`;

export const ButtonCallUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0 3rem;
    
    button {
        border: 2px solid var(--primary);
        background-color: var(--black);
        color: var(--primary);
        padding: 1rem 3rem;
        border-radius: 4px;
    }
`;

export const Footer = styled.div`
    display: flex;
    color: var(--text-color);
    background-color: var(--black);
    justify-content: space-between;
    padding: 3rem 6rem;
    font-weight: 500;
    text-transform: uppercase;

    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: 0.75rem;
        font-weight: 500;
    }
`;

export const ContainerSocialMedia = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 0.75rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
    }

    div {
        display: flex;
        gap: 0.5rem;
        font-size: 1.5rem;
    }
`;

export const LogoInc = styled.div`
    font-size: 1.25rem;
    font-weight: 700;
    padding-bottom: 3rem;

    span {
        color: var(--primary);
    }
`;

export const RequiredInformation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 6rem;
    color: var(--text-color);
    font-weight: 400;
    text-transform: uppercase;
    font-size: 0.75rem;
    border-top: solid 1px var(--text-color);

    div {
        display: flex;
        gap: 3rem;
    }
`;

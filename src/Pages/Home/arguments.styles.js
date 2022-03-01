import styled from "styled-components";

export const Arguments = styled.section`
    background-color: red;
    padding: 6rem 0 3rem;
    background-color: var(--background);
`;

export const HeaderArgs = styled.div`
    display: flex;
    padding: 0 5rem;
    align-items: center;
    gap: 8rem;
    
    div {
        flex: 1;
        text-transform: uppercase;

        h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
            
        }

        p {
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--text-color);
            line-height: 1.5rem;
        }
    }
`;

export const TableArgs = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;
`;

export const GroupImage = styled.div`
    margin-top: 6rem;
    flex: 1.5;
    height: 30rem;
    padding-top: 3rem;
    background-image:
        url(${(props)=> props.Image})
    ;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const GroupText = styled.div`
    flex: 1;
    color: var(--text-color);
    margin-top: 6rem;
    margin: 6rem 6rem 0;
    text-transform: uppercase;

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary);
        margin-bottom: 1rem;
    }

    p {
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--text-color);
        line-height: 1.5rem;
        margin-bottom: 2rem;
    }
`;

export const ButtonContact = styled.button`
    color: var(--primary);
    background-color: var(--background);
    border: none;
    border-bottom: 2px solid var(--primary);
    font-size: 1rem;
`;

export const Landscapes = styled.div`
    flex: 1;
    display: flex;
    margin-top: 6rem ;
    overflow: scroll;
`;

export const LandscapeImage = styled.div`
    background-image: url(${(props) => props.Image});
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 400px;
    height: 250px;

    :first-child {
        margin-left: 6rem;
    }

    :last-child {
        margin-right: 6rem;
    }
`;
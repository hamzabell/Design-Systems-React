import styled from "styled-components";
import { defaultTheme, typeScale } from '../utils';



const Button = styled.button`
    padding: 12px 24px;
    font-size: ${typeScale.paragraph};
    border-radius: 2px;
    min-width: 100px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
    transition: background-color 0.2s linear, color 0.2s linear; 

    &:hover {
        background-color: ${defaultTheme.primaryHoverColor};
        color: ${defaultTheme.textColorOnPrimary}
    }

    &:focus {
        outline: 3px solid ${defaultTheme.primaryHoverColor};
        outline-offset: 2px;
    }

    &:active {
        background-color: ${defaultTheme.primaryColorActive};
        border-color: ${defaultTheme.textColorOnPrimary};
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${defaultTheme.primaryColor};
    border: none;
    color: white;

    &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textOnDisabled};
        cursor: not-allowed;
    }
`;

export const SecondaryButton = styled(Button)`
    background: none;
    border: 2px solid ${defaultTheme.primaryColor};
    color: ${defaultTheme.primaryColor};

    &:disabled {
        background-color: none;
        color: ${defaultTheme.textOnDisabled};
        border-color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }
`;


export const TertiaryButton = styled(Button)`
    background: none;
    border: none;
    color: ${defaultTheme.primaryColor};


    &:disabled {
        background-color: none;
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
    }
`;



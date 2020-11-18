import styled from 'styled-components';


export const Container = styled.div`
    position: relative;

    span {
        width: 160px;
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transition: opacity 0.4s;
        visibility: hidden; // Para não mostrar o erro sem passar o mouse no ícone

        // Dica para centralizar o tooltip
        position: absolute;
        bottom: calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%);

        // Dica para criar uma flecha com css
        &::before {
            content: ''; // Para exibir em tela
            border-style: solid;
            border-width: 6px 6px 0 6px;
            top: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    &:hover span {
        opacity: 1;
        visibility: visible;
    }
`;

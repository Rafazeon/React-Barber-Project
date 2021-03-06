import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>; // Se a interface for vazia se utiliza o type

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <Container>
        <button type="button" {...rest}>{children}</button>
    </Container>
);

export default Button;

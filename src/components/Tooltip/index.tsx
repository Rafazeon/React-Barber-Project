import React from 'react';
import { Container } from './styles';

interface TooltipProps {
    title: string;
    className?: string; // Para ser opcional a passagem da classe
}

// ClassName se utiliza para poder passar um estilo de classe superior a um componente filho

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
    return (
        <Container className={className}>
            {children}
            <span>{title}</span>
        </Container>
    )
}

export default Tooltip

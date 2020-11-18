import { ValidationError } from 'yup';

interface Errors {
    [key: string]: string
}

// Valida os tipos de erros possíveis na variável e tipa o formato dinâmico que pode receber
export default function getValidateErrors(err: ValidationError): Errors {
    const validationErrors: Errors = {}; // Inicia o objeto com a tipagem de string

    err.inner.forEach(error => {
        validationErrors[error.path] = error.message
    })

    return validationErrors;
}

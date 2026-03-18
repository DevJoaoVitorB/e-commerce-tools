import { permittedCharacters } from './utils/permittedCharacters.js';

export const generatePassword = () => {
    const characters = permittedCharacters();
    const passwordLength = process.env.PASSWORD_LENGTH;

    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
};

import { getPermittedCharacters } from '../../utils/permitted-characters.js';
import { characters } from '../../utils/env-configs.js';

export function generatePassword() {
    const passwordLength = Number(process.env.PASSWORD_LENGTH ?? 12);

    if (Number.isNaN(passwordLength) || passwordLength <= 0) {
        throw new Error('PASSWORD_LENGTH must be a positive number.');
    }

    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    return password;
}

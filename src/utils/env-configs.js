import { getPermittedCharacters } from './permitted-characters.js';

export const characters = getPermittedCharacters({
    uppercase: process.env.UPPERCASE_LETTERS === 'true',
    lowercase: process.env.LOWERCASE_LETTERS === 'true',
    numbers: process.env.NUMBERS === 'true',
    special: process.env.SPECIAL_CHARACTERS === 'true',
});

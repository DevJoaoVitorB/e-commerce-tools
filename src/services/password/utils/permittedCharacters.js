export const permittedCharacters = () => {
    let permittedCharacters = [];

    if (process.env.UPPERCASE_LETTERS)
        permittedCharacters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    if (process.env.LOWERCASE_LETTERS)
        permittedCharacters.push(...'abcdefghijklmnopqrstuvwxyz');

    if (process.env.NUMBERS) permittedCharacters.push(...'0123456789');

    if (process.env.SPECIAL_CHARACTERS)
        permittedCharacters.push(...'!@#$%^&*()_+-=[]{}|;:,.<>?');

    return permittedCharacters;
};

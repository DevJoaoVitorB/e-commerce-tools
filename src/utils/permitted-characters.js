const CHARACTER_SETS = {
    UPPERCASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
    NUMBERS: '0123456789',
    SPECIAL: '!@#$%^&*()_+-=[]{}|;:,.<>?',
};

export function getPermittedCharacters(config) {
    const characters = [];

    if (config.uppercase) {
        characters.push(...CHARACTER_SETS.UPPERCASE);
    }

    if (config.lowercase) {
        characters.push(...CHARACTER_SETS.LOWERCASE);
    }

    if (config.numbers) {
        characters.push(...CHARACTER_SETS.NUMBERS);
    }

    if (config.special) {
        characters.push(...CHARACTER_SETS.SPECIAL);
    }

    return characters;
}
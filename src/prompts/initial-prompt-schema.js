import chalk from 'chalk';

const OPERATION_PROMPT = {
    name: 'operation',
    description: chalk.yellow.bold(
        'Please choose an option:\n1) QR Code\n2) Password\n',
    ),
    pattern: /^[12]$/,
    message: chalk.red.italic(
        'Invalid option! Please choose 1 or 2.',
    ),
    required: true,
};

export const initialPromptSchema = [OPERATION_PROMPT];

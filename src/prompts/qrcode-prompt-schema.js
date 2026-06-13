import chalk from 'chalk';

const LINK_PROMPT = {
    name: 'link',
    description: chalk.yellow.bold('Enter the link to generate a QR Code: '),
    required: true,
};

const TYPE_PROMPT = {
    name: 'type',
    description: chalk.yellow.bold(
        'Choose the QR Code output:\n1) Normal\n2) Terminal\n',
    ),
    pattern: /^[12]$/,
    message: chalk.red.italic('Invalid option! Please choose 1 or 2.'),
    required: true,
};

export const qrCodePromptSchema = [LINK_PROMPT, TYPE_PROMPT];

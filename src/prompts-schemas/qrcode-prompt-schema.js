import chalk from 'chalk';

export const qrcodePromptSchema = [
    {
        name: 'link',
        description: chalk.yellow.bold(
            'Enter the link to generate a QR code: ',
        ),
        required: true,
    },
    {
        name: 'type',
        description: chalk.yellow.bold(
            'Please choose one of the options - 1) Normal or 2) Terminal \n',
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Invalid option! Please choose 1 or 2.'),
        required: true,
    },
];

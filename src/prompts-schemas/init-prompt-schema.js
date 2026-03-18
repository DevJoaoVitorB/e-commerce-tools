import chalk from 'chalk';

export const initPromptSchema = [
    {
        name: 'operation',
        description: chalk.yellow.bold(
            'Please choose one of the options - 1) QR Code or 2) Password \n',
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Invalid option! Please choose 1 or 2.'),
        required: true,
    },
];

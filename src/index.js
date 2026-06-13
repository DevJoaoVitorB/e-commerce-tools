import prompt from 'prompt';
import chalk from 'chalk';

import { initialPromptSchema } from './prompts/initial-prompt-schema.js';
import { createQRCode } from './services/qrcode/create.js';
import { createPassword } from './services/password/create.js';

const OPERATIONS = {
    QR_CODE: '1',
    PASSWORD: '2',
};

async function main() {
    try {
        prompt.start();

        const { operation } = await prompt.get(initialPromptSchema);

        const operations = {
            [OPERATIONS.QR_CODE]: createQRCode,
            [OPERATIONS.PASSWORD]: createPassword,
        };

        const selectedOperation = operations[operation];

        if (!selectedOperation) {
            throw new Error('Invalid operation.');
        }

        await selectedOperation();
    } catch (error) {
        console.error(chalk.red(`❌ System error: ${error.message}`));
    }
}

main();

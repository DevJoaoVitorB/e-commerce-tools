import prompt from 'prompt';
import chalk from 'chalk';
import { initPromptSchema } from './prompts-schemas/init-prompt-schema.js';
import { createQRCode } from './services/qrcode/create.js';
import { createPassword } from './services/password/create.js';

(async () => {
    try {
        prompt.start();

        await prompt.get(initPromptSchema, (err, response) => {
            if (err) throw new Error(err);

            const resultMap = {
                1: createQRCode,
                2: createPassword,
            };

            resultMap[response.operation]?.();
        });
    } catch (err) {
        console.log(chalk.red.italic(`System error: ${err}`));
    }
})();

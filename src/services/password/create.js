import chalk from 'chalk';
import { generatePassword } from './generate.js';

export function createPassword() {
    const password = generatePassword();

    console.log(chalk.green(`✔ Password generated successfully: ${password}`));
}

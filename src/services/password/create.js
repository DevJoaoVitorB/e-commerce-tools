import chalk from 'chalk';
import { generatePassword } from './generate.js';

export const createPassword = () => {
    const password = generatePassword();
    console.log(chalk.green(`Password generated successfully: ${password}`));
};

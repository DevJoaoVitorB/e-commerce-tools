import prompt from 'prompt';
import { qrcodePromptSchema } from '../../prompts-schemas/qrcode-prompt-schema.js';
import { generateQRCode } from './generate.js';

export const createQRCode = async () => {
    prompt.start();

    await prompt.get(qrcodePromptSchema, generateQRCode);
};

import prompt from 'prompt';

import { qrCodePromptSchema } from '../../prompts/qrcode-prompt-schema.js';
import { generateQRCode } from './generate.js';

export async function createQRCode() {
    try {
        prompt.start();

        const response = await prompt.get(qrCodePromptSchema);

        await generateQRCode(response);
    } catch (error) {
        console.error(`❌ Failed to generate QR Code: ${error.message}`);
    }
}

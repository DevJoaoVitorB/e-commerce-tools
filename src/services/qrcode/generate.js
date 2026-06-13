import chalk from 'chalk';
import qr from 'qrcode-terminal';

import { QR_CODE_TYPES } from '../../utils/constants.js';

export async function generateQRCode({ link, type }) {
    if (!link?.trim()) {
        throw new Error('A valid link is required.');
    }

    const isCompactQRCode = type === QR_CODE_TYPES.TERMINAL;

    console.log(chalk.green('\n✔ QR Code generated successfully!\n'));

    qr.generate(link, {
        small: isCompactQRCode,
    });

    console.log();
}

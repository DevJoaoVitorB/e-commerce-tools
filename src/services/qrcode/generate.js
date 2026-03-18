import chalk from 'chalk';
import qr from 'qrcode-terminal';

export const generateQRCode = (err, response) => {
    if (err) throw new Error(err);

    qr.generate(response.link, { small: response.type === '2' }, (qrcode) => {
        console.log(chalk.green('QR code generated successfully \n'));
        console.log(`${qrcode} \n`);
    });
};

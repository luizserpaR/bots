const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});
wsdrwserwerrerw
client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (message) => {
	if (message.body.toLocaleLowerCase() === 'bom dia') {
		await message.reply('olá estou a sua disposição, no que posso ajudar?');
		await message.reply('digite 1 teste');
		await message.reply('digita 2 teste');
	}
	if (message.body.toLocaleLowerCase() === 'boa tarde') {
		await message.reply('olá estou a sua disposição, no que posso ajudar?');
		await message.reply('digite 1 teste');
		await message.reply('digita 2 teste');
	}
	if (message.body.toLocaleLowerCase() === 'boa noite') {
		await message.reply('olá estou a sua disposição, no que posso ajudar?');
		await message.reply('digite 1 teste');
		await message.reply('digita 2 teste');
	}
	if (message.body.toLocaleLowerCase() === '1') {
		await message.reply('qual vc gostaria?');
		await message.reply('digite 3 teste');
		await message.reply('digita 4 teste');
	}
	if (message.body.toLocaleLowerCase() === '2') {
		await message.reply('qual escolhe?');
		await message.reply('digite 5 teste');
		await message.reply('digita 6 teste');
	}
	
});

client.initialize();
 
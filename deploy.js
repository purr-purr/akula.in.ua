let FtpDeploy = require('ftp-deploy');
let ftpDeploy = new FtpDeploy();
require('dotenv').config({ path: '.env.local' });

let config = {
	user: process.env.FTP_USER,
	password: process.env.FTP_PASS,
	host: process.env.FTP_HOST,
	port: 21,
	localRoot: __dirname + '/out',
	remoteRoot: process.env.FTP_REMOTE_ROOT,
	include: ['*'],
	exclude: [],
	deleteRemote: process.env.FTP_DELETE,
	forcePasv: true,
};

ftpDeploy
	.deploy(config)
	.then((res) => console.log('FTP Deploy finished'))
	.catch((err) => console.log(err));

ftpDeploy.on('uploaded', function (data) {
	console.log(
		'FTP uploaded: ' + data.transferredFileCount + '/' + data.totalFilesCount,
	);
});

ftpDeploy.on('upload-error', function (data) {
	console.log(data.err);
});

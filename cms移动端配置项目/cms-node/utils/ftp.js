const FtpClient = require('ftp');
const fs = require('fs');
const client = new FtpClient();
const config = {
  host: '124.223.69.156',
  port: 21,
  user: 'user',
  password: 'fscxfzYw5Hpa6yp6',
  keepalive: 100000  // ms
}

function connect() {
  return new Promise((resolve, reject) => {
    client.on('ready', () => {
      console.log('ftp ready');
      resolve();
    })
    client.on('close', () => {
      console.log('ftp close');
    });
    client.on('end', () => {
      console.log('ftp end');
    });
    client.on('error', (err) => {
      console.log('ftp err', err);
      reject(err)
    });

    client.connect(config);
  })
}

async function upload(sourcePath, targetPath) {
  if (!fs.existsSync(sourcePath)) {
    return false;
  }
  await connect();
  return new Promise((resolve, reject) => {
    client.put(sourcePath, targetPath, (err) => {
      client.end();
      if (err) {
        console.log(err);
        reject(false);
      } else {
        console.log(`upload file completed. filePath: ${targetPath}`);
        resolve(true);
      }
    })
  });
}

module.exports = upload

// test ftp upload
// const fileName = 'ftp-upload-file.txt';
// const sourcePath = `./${fileName}`;
// const targetPath = `upload/${fileName}`;

// upload(sourcePath, targetPath);
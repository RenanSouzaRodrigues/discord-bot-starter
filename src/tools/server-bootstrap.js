const exec = require('child_process').exec;

async function isProcessRunning(processName) {
  const command = 'tasklist'

  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) reject(err);
      resolve(stdout.toLowerCase().indexOf(processName.toLowerCase()) > -1);
    })
  })
}

async function buildServer(serverBuildCommand) {
  return new Promise((resolve, reject) => {
    exec(serverBuildCommand, (err, stdout, stderr) => {
      if (err) reject(err);
      resolve(true);
    })
  })
}

module.exports = { 
  isProcessRunning,
  buildServer 
};
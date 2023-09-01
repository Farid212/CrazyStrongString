const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to generate a random secret key of the specified length
function generateSecretKey(length) {
  if (length % 2 !== 0) {
    throw new Error('Key length must be an even number of bytes.');
  }
  return crypto.randomBytes(length / 2).toString('hex');
}

// Ask the user for the desired key length
rl.question('Enter the desired key length (between 32 and 1024): ', (answer) => {
  const keyLength = parseInt(answer, 10);
  
  if (isNaN(keyLength) || keyLength < 32 || keyLength > 1024) {
    console.log('Invalid key length. Please enter a value between 32 and 1024.');
    rl.close();
  } else {
    const secretKey = generateSecretKey(keyLength);
    console.log('Generated secret key:', secretKey);
    rl.close();
  }
});


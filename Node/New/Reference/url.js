const readline = require('readline');
const url = require('url');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a URL: ', (userInput) => {
  const parsedUrl = new URL(userInput);

  console.log('Parsed Components:');
  console.log('Protocol:', parsedUrl.protocol);
  console.log('Hostname:', parsedUrl.hostname);
  console.log('Pathname:', parsedUrl.pathname);
  console.log('Search Parameters:', parsedUrl.searchParams.toString());

  // Append a new search parameter
  parsedUrl.searchParams.append('newParam', 'newValue');

  // Log modified URL
  console.log('\nModified URL:');
  console.log(parsedUrl.href);

  // Close the interface
  rl.close();
});


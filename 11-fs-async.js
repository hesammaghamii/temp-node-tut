const { readFile, writeFile } = require('fs');

readFile('./content/subfolder/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile('./content/subfolder/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/async-writer.txt',
      `here async 2 file :  ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);

          return;
        }
        console.log(result);
      }
    );
  });
});

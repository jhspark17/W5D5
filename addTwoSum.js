const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, callback){
  if (numsLeft > 0) {
    reader.question("Enter a number: ", function(answer) {
      sum += parseInt(answer);
      console.log(sum);
      addNumbers(sum, numsLeft-1, callback);
    });
  } else {
    reader.close();
    return callback(sum);
  };
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
  

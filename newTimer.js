const times = process.argv.slice(2);


for (let time of times) {
  // switching string to number 
  time = Number(time);
  // console.log(Number(time));

  // if time is a number (ingoring inputs that are strings)
  // if it is greater than 0, ignore negative time, logically can't include that has passed
  if (typeof (time) === 'number' && time >= 0) {
    setTimeout(() => {
      // this makes the sound the output
      process.stdout.write('\x07');
      // need to multiply by 1000 because it reads in milliseconds
    }, time * 1000);
  }
};

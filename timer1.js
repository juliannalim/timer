// allows us to input the time in node
const args = process.argv;
  //console.log(args);
let play = args.slice(2); // remove the first two elements in args only want the numbers in the array

//access the array in args
for (let time of play) {
    // making the time in play from strings to number
  time = Number(time);
   // console.log(time);

  if (typeof(time) === 'number' && time >= 0) {
    setTimeout(() => {
    process.stdout.write('\x07');
    }, time * 1000); // multipe by it 1000 b/c in ms
  }
}
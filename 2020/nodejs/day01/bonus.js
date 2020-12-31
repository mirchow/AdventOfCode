const inputValues = require('./input');

const start = () => {
  const start = Date.now();
  const sorted = inputValues.sort((a, b) => a - b);
  let found = false;
  for (let i of sorted) {
    for (let j of sorted) {
      for (let k of sorted) {
        console.log(`i: ${i}, j: ${j} k: ${k}`)
        const x = i + j + k;
        if (x === 2020) {
          console.log(`i: ${i}, j: ${j}, k: ${k}, x: ${x}`)
          console.log(`answer is ${i * j * k}`)
          found = true;
          break;
        } else if (x > 2020) {
          continue;
        }
      }
      if (found) {
        break;
      }
    }
    if (found) {
      break;
    }
  }

  const finish = Date.now();
  console.log(`program took ${finish - start} ms`);
}

start();
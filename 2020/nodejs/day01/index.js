const inputValues = require('./input');

const start = () => {
  const start = getNanoSecTime()
  const sorted = inputValues.sort((a, b) => a - b);
  let found2 = false;
  let found3 = false;
  for (let i of sorted) {
    if (!found2 || !found3) {
      for (let j of sorted) {
        const x = i + j
        if (x === 2020) {
          console.log(`i: ${i}, j: ${j}, combined: ${i * j}`)
          found2 = true;
        } else if (x > 2020) {
          continue;
        }
        if (found3 != true) {
          for (let k of sorted) {
            const x = i + j + k;
            if (x === 2020) {
              console.log(`i: ${i}, j: ${j}, k: ${k}, combined: ${i * j * k}`)
              found3 = true;
              break;
            }
          }
        }
      }
    }
    if (found2 === true && found3 === true) {
      break;
    }
  }

  const finish = getNanoSecTime();
  console.log(`program took ${finish - start} ns`);
}

const getNanoSecTime = () => {
  var hrTime = process.hrtime();
  return hrTime[0] * 1000000000 + hrTime[1];
}

start();
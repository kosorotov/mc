function getResult(config = {}) {
  const configLength = Object.keys(config).length;

  if (configLength === 0) {
    return undefined;
  }

  const mathFuncNames = {
    '+': getRandomSum,
    '-': getRandomDifference,
    '*': getRandomProduct,
    '/': getRandomQuotient
  };

  let rndFuncArr = [];

  Object.keys(config).forEach(function(val) {
    let funcName = mathFuncNames[val];
    let funcConfig = config[val];
    rndFuncArr.push([funcName, funcConfig[0], funcConfig[1]]);
  });
  const rndIndex = getRandomInt(0, configLength - 1);
  const currentFuncArray = rndFuncArr[rndIndex];
  const func = currentFuncArray[0];
  const digits1 = currentFuncArray[1];
  const digits2 = currentFuncArray[2];
  return func(digits1, digits2);
}

function getRandomSum(digits1, digits2, min1 = 0, min2 = 0) {
  const pair = getRandomPair(digits1, digits2, min1, min2);
  const sum = pair[0] + pair[1];
  return [pair[0], pair[1], sum, '+'];
}

function getRandomDifference(digits1, digits2, min1 = 0, min2 = 0) {
  const pair = getRandomPair(digits1, digits2, min1, min2);
  const diff = pair[0] - pair[1];
  return [pair[0], pair[1], diff, '-'];
}

function getRandomProduct(digits1, digits2, min1 = 0, min2 = 0) {
  const pair = getRandomPair(digits1, digits2, min1, min2);
  const prod = pair[0] * pair[1];
  return [pair[0], pair[1], prod, '*'];
}

function getRandomQuotient(digits1, digits2, min1 = 0, min2 = 1) {
  const pair = getRandomPair(digits1, digits2, min1, min2);
  const quot = pair[0] / pair[1];
  return [pair[0], pair[1], quot, '/'];
}

function getRandomPair(maxDigits1 = 1, maxDigits2 = 1, minNumber1 = 0, minNumber2 = 0) {
  return [getRandomIntByDigits(minNumber1, maxDigits1), getRandomIntByDigits(minNumber2, maxDigits2)];
}

function getRandomIntByDigits(minNumber = 0, maxDigits = 1) {
  if (maxDigits < 1 || maxDigits > 12) {
    return undefined;
  }
  const maxs = [9, 99, 999, 9999, 99999, 999999, 9999999, 99999999, 999999999, 9999999999, 99999999999, 999999999999];
  const maxNumber = maxs[maxDigits - 1];
  return getRandomInt(minNumber, maxNumber);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomInt, getRandomIntByDigits, getRandomPair, getRandomQuotient, getRandomProduct,
         getRandomDifference, getRandomSum, getResult };

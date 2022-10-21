const palinedroneNum = (num) => {
  const str = num.toString();
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }

  console.log(newStr, str);
  if (newStr == str) {
    return true;
  } else {
    return false;
  }
};

console.log(palinedroneNum(51589));

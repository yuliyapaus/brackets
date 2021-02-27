module.exports = function check(str, bracketsConfig) {
  let bracketPair = '';
    let newString = str;
    let flag = true;
    while (flag) {
        flag = false;
    for (let i of bracketsConfig) {
        bracketPair = i[0]+i[1];
        if (newString.includes(bracketPair)) {
            newString = newString.replace(bracketPair, '');
            flag = true;
    } 
    }
}
return (newString)?false:true
}

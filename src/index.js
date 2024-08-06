module.exports = function reverse (n) {
    n = n.toString();
    let len = n.length;
    let i = 0;
    let result = '';
    while (i < len) {
       let newN = n[i];
       result = `${newN}${result}`;
       i = i + 1;
    }
    result =  parseInt(result);
  return result; 
}

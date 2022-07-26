

function diceCoefficient(str1, str2) {
  var str1 = str1.toLowerCase();
  var str2 = str2.toLowerCase();
  var str1 = str1.replace(/[^a-z0-9]/g, '');
  var str2 = str2.replace(/[^a-z0-9]/g, '');
  var str1 = str1.split('');
  var str2 = str2.split('');
  var len1 = str1.length;
  var len2 = str2.length;
  var max = Math.max(len1, len2);
  var sum = 0;
  for (var i = 0; i < max; i++) {
      if (str1[i] == str2[i]) {
          sum++;
      }
  }
  return (2 * sum) / (len1 + len2);
}


console.log(diceCoefficient('WOMAN','WOMAN'))

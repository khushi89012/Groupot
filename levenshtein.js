



function levenshteinDistance(str1, str2) {
  var len1 = str1.length;
  var len2 = str2.length;
  var d = [];
  for (var i = 0; i <= len1; i++) {
    d[i] = [];
    d[i][0] = i;
  }
  for (var j = 0; j <= len2; j++) {
    d[0][j] = j;
  }
  for (var i = 1; i <= len1; i++) {
    for (var j = 1; j <= len2; j++) {
      var cost = (str1[i - 1] === str2[j - 1]) ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + cost
      );
    }
  }
  return d[len1][len2];
}


console.log(levenshteinDistance('MAN','WOMAN'));


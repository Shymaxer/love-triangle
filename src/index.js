/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  var array = [0];
  preferences = array.concat(preferences);
  var count = 0;

  for(var i =1 ; i<= preferences.length; i++)
  {
    var a = preferences[i];
    var b = preferences[a];
    var c = preferences[b];

    if((c == i) && (preferences[a]!= a) && (preferences[b] != b)  && (preferences[c] != c)){
      count ++
    }
  }
    return count/3
};

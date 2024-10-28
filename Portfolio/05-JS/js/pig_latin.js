/*
Pig Latin
*/

function igpayAtinlay() {
  var str= document.getElementById("txtVal").value;
  var returnArray = [];
  var wordArray = str.split(" ");

  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    var beginning = word.charAt(0);

    if (/[aeiouAEIOU]/.test(beginning)) {
      returnArray.push(word + "way");
      continue;
    }

    let consonantCluster = beginning;
    let j = 1;

    while (j < word.length && !/[aeiouAEIOU]/.test(word.charAt(j))) {
      consonantCluster += word.charAt(j);
      j++;
    }

    let pigLatinWord = word.slice(j) + consonantCluster + "ay";
    returnArray.push(pigLatinWord);
  }

  document.getElementById("pigLatLbl").innerHTML= returnArray.join(" ");
}

// Some examples of expected outputs
console.log(igpayAtinlay("pizza")); // "izzapay"
console.log(igpayAtinlay("apple")); // "appleway"
console.log(igpayAtinlay("happy meal")); // "appyhay ealmay"

function isPalindrome(word) {
  // Write your algorithm here
  const reversedStr = word.split('').reverse().join('');
  return reversedStr === word
}

/* 
  Add your pseudocode here
  const reversed
  reversed = word.tochar()
  reversed.reverse()
  if reversed === word
  return true
  return false 
*/

/*
  Add written explanation of your solution here
  we need to check if the word is a palindrome 
  which means that the word spelling backwards will be the same 
  so first we need to reverse the word 
  change the string into characters
  reverse them 
  then put them back as a string 
  and check if you have the same word

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

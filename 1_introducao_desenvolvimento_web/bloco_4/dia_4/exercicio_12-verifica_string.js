function checksString(word, ending){
  let endWord = word[word.length - 2] + word[word.length - 1];
  if(endWord === ending){
    return true;
  } else {
    return false;
  }
}

console.log(checksString("Trybe", "be"));

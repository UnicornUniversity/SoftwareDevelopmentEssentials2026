function sayWord(word) {
    if (word.length > 0) {
        console.log(word);
        sayWord(word.substring(1));
    }
}

sayWord("abracadabra");
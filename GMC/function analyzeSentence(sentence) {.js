function analyzeSentence(sentence) {
    let length = 0;
    let words = 0;
    let vowels = 0;
    let vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    // Initialize a flag to track if we're inside a word
    let inWord = false;

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        // Count every character including spaces
        length++;

        // Check if the character is a vowel
        if (vowelsSet.has(char)) {
            vowels++;
        }

        // Count words based on transitions from space to a character
        if (char !== ' ' && char !== '.') {
            if (!inWord) {
                words++;
                inWord = true;
            }
        } else if (char === ' ') {
            inWord = false;
        }

        // Stop processing when the period is reached
        if (char === '.') {
            break;
        }
    }

    return { length, words, vowels };
}

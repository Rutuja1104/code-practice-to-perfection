function longestSubstring(s) {
    let set = new Set();
    let left = 0;
    let max = 0;

    for (let right = 0; right < s.length; right++) {// The right pointer iterates through the string, adding characters to the set until it encounters a duplicate character.
        while (set.has(s[right])) {// If a duplicate character is found, the left pointer moves forward, removing characters from the set until the duplicate character is removed.
            set.delete(s[left]);
            // set.delete(s[left]) removes the character at the left pointer from the set, 
            // allowing us to move the left pointer forward 
            // until we no longer have a duplicate character in the current window defined by left and right pointers. 
            // This ensures that we are always working with a substring of unique characters.
            left++;
        }
        set.add(s[right]);// Once we have a valid substring (no duplicates), we calculate its length and update the maximum length found so far.
        max = Math.max(max, right - left + 1);// The length of the current substring is calculated as right - left + 1, and we update max if this length is greater than the previously recorded maximum length.
    } 
    console.log(set)
    return max;
}

console.log(longestSubstring("abcabcbb")); // 3
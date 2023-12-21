function longestPalindrome(s: string): number {
    const charCountMap = new Map<string, number>();
    for (const char of s) {
        charCountMap.set(char, (charCountMap.get(char) ?? 0) + 1);
    }

    let len = 0;
    let containsOdd = false;
    for (const value of charCountMap.values()) {
        if (value % 2 === 0) {
            len += value;
        } else {
            containsOdd = true;
            len += value - 1;
        }
    }
    if (containsOdd) {
        len += 1;
    }

    return len;
}

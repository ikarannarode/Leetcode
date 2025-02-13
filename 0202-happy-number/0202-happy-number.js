function isHappy(n) {
    function getNext(num) {
        return num.toString().split('').reduce((sum, digit) => sum + digit ** 2, 0);
    }

    let seen = new Set();
    
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }
    
    return n === 1;
}
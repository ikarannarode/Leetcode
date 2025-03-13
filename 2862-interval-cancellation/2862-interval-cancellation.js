/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const result = [];
    let timeElapsed = 0;

    // Call the function immediately
    result.push({ "time": timeElapsed, "returned": fn(...args) });

    // Set up the interval for repeated execution
    const intervalId = setInterval(() => {
        timeElapsed += t;
        result.push({ "time": timeElapsed, "returned": fn(...args) });
    }, t);

    // Return the cancel function to stop the interval
    return function() {
        clearInterval(intervalId);
    };
};

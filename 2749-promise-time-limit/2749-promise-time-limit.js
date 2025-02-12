/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            // Start the function execution
            const fnPromise = fn(...args);

            // Create a timeout that rejects the promise
            const timeout = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            // Resolve or reject based on the function execution
            fnPromise
                .then((res) => {
                    clearTimeout(timeout); // Clear timeout if function resolves in time
                    resolve(res);
                })
                .catch((err) => {
                    clearTimeout(timeout); // Clear timeout if function rejects
                    reject(err);
                });
        });
    };
};

// Example usage:
const limited = timeLimit(async (n) => {
    await new Promise(res => setTimeout(res, 100)); // Simulating delay
    return n * n;
}, 50);

limited(5)
    .then(console.log)
    .catch(console.log); // Expected output: "Time Limit Exceeded"

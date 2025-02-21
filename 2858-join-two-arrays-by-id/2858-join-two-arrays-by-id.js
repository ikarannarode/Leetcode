/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let map = new Map();

    // Add all elements from arr1 to the map
    for (let obj of arr1) {
        map.set(obj.id, obj);
    }

    // Merge elements from arr2, overriding values if necessary
    for (let obj of arr2) {
        if (map.has(obj.id)) {
            map.set(obj.id, { ...map.get(obj.id), ...obj });
        } else {
            map.set(obj.id, obj);
        }
    }

    // Convert map values to an array and sort by id
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
};
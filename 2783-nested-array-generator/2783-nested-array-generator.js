/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
    for(const elmt of arr){
        if(Array.isArray(elmt)){
            yield* inorderTraversal(elmt);
        }
        else if(elmt!=undefined){
           yield elmt;
        }
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
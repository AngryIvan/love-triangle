/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    var a = 0; // first Spichonee
    var b = 0; // first Spichonee
    var c = 0; // first Spichonee
    var numberOfTriangles = 0;

    for (var i = 0; i < preferences.length; i++) {
        if (preferences[i] !== 0) {
            a = preferences[i];
            b = preferences[a - 1];
            c = preferences[b - 1];
            if (preferences[c - 1] == a && preferences[b - 1] == c && preferences[a - 1] == b && a !== b && b !== c && c !== a) {
                numberOfTriangles++;
                preferences[c - 1] = 0;
                preferences[b - 1] = 0;
                preferences[a - 1] = 0;
            }
        }
    }
    return numberOfTriangles;
};
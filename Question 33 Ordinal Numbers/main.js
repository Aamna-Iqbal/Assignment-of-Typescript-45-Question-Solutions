var ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Using For-loop
for (var _i = 0, ordinalNumbers_1 = ordinalNumbers; _i < ordinalNumbers_1.length; _i++) {
    var arrayNumbers = ordinalNumbers_1[_i];
    var ordinalnumbersEnding = void 0;
    if (arrayNumbers === 1) {
        ordinalnumbersEnding = "st";
    }
    else if (arrayNumbers === 2) {
        ordinalnumbersEnding = "nd";
    }
    else if (arrayNumbers === 3) {
        ordinalnumbersEnding = "rd";
    }
    else {
        ordinalnumbersEnding = "th";
    }
    console.log("".concat(arrayNumbers).concat(ordinalnumbersEnding));
}

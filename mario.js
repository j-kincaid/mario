
printPyramid(5);

function printPyramid(height) {
    // height is the number of rows. For each row...
    for (var row = 0; row < height; row++) {
        // figure out how many bricks in this row (aka the '#' characters)
        var numBricks = row + 2;

        // figure out how many space characters
        var numSpaces = height - row;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += " ";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // print the
        console.log(rowStr);
    }
}

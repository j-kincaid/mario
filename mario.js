
printPyramid(5);

function printPyramid(height) {
    // height is the number of rows. For each row...
    for (var row = 0; row < height; row++) {
        // figure out how many bricks in this row (aka the '#' characters)
        var numBricks = row + 2;

        // figure out how many space characters
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += ".";
            // using a period instead of a space because HTML ignores whitespace
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the <body>
        document.body.appendChild(rowElem);
    }
}

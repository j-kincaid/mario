
drawPyramid(5);


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += ".";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // TODO 1
        // create a text element with the string of characters


        // TODO 2
        // create a <p> element with the text inside


        // TODO 3
        // insert the text element as a child of the paragraph element


        // TODO 4
        // insert the paragraph element as a child of the <body>


        // you can delete this
        console.log(rowStr)
    }
}

drawPyramid(5);


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // TODO 2
    // delete the "under construction" element, ie the <div id="notice">


    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 1; i < numSpaces; i++) {
            rowStr += " "; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 1; i < numBricks; i++) {
            rowStr += "#";
        }

        // TODO 1
        // create an element whose inner text is rowStr,


        pyramidDiv = document.getElementById('pyramid');
        childDiv = document.appendChild("pyramidDiv");
        // and insert it as a child of the container <div id="pyramid">
        childDiv.innerHTML = 'rowStr';
        pyramidDiv.appendChild(childDiv);
    }
}
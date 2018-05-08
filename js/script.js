var i;
var k;
var j;
var g;
var h;
var star;
var space;

function drawTree(k) {
    for (i = 0 ; i < k ; i++) {
        star = "*"
        space = "__"

        for (j = 0 ; j < i ; j++ ) {
            star += "**"

            for (h = k - j ; h < i ; h-- ) {
                space += "_"
            }
        }


        console.log (space + star);
    }
}
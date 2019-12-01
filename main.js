var myHtmlItem = document.getElementById("container");

var result = "";

for (lines = 0; lines < 10; lines++) {
    result = result + "<div>";
    for (i = 0; i < 10; i++) {
        if (lines % 2 === 1) {
            if (i % 2 == 1) {
                result = result + BuildBox(lines, i, "whiteBox");
            } else {
                result = result + BuildBox(lines, i, "whiteBox");
            }
        } else {
            if (i % 2 == 0) {
                result = result + BuildBox(lines, i, "whiteBox");
            } else {
                result = result + BuildBox(lines, i, "whiteBox");
            }
        }
    }
    result = result + "</div>";
}
myHtmlItem.innerHTML = result;
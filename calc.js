$(document).ready(function () {

    charlist = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "=", "/", "reset"];
    opList = ["+", "-", "*", "/"]

    $("body").html("<div><p></p></div>")

    for (let i = 0; i < charlist.length; i++) {
        $("div").append("<button id=btn" + i + ">" + charlist[i] + "</button>");

        $("#btn" + i).click(function () {
            if (this.innerHTML == "=") {
                $("p").html(eval($("p").html()));
            }
            else if (this.innerHTML == "reset") {
                $("p").html("");
            }
            else if (opList.includes($(this).html()) && opList.includes($("p").html()[$("p").html().length-1] )
            ) {
                $("p").append("");
            }
            else {
                $("p").append($(this).html());
            }
        })
    }

});
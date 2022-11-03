var personas = ["Alejandro", "Barbara", "Federico", "Lola"];
var div_personas = document.querySelector("#personas");
div_personas.innerHTML = "<ul>" +
    personas.map(function (personas) {
        return "<li>".concat(personas, "</li>");
    }).join("")
    + "</ul>";

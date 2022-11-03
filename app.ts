let personas:string[] = ["Alejandro", "Barbara", "Federico", "Lola"];

let div_personas:HTMLElement | null = document.querySelector("#personas");

div_personas.innerHTML = "<ul>" + 
                                    personas.map((personas) => {
                                        return `<li>${personas}</li>`;
                                    }).join("")
                                    +"</ul>";
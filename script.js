//Referencia a los elementos

const texto = document.getElementById("texto");
const boton = document.getElementById("boton"); 
const lista = document.getElementById("lista");

//agregamos un nuevo elemento a la lista
function agregarElemento(){
    const itemText = texto.value.trim();

    if(itemText !== ""){
        const li = document.createElement("li");
        li.textContent = itemText;
        li.className = "grupoLista-item";
        lista.appendChild(li);

        texto.value = "";

        li.addEventListener("dblclick", function(){
            lista.removeChild(li)
        });
    }
}

boton.addEventListener("click", agregarElemento);

texto.addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        agregarElemento();
    }
})

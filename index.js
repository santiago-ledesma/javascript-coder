function mostrarProductos() {
    let catalogo = "Cortes disponibles: \n";
    catalogo += "1. Costilla - $4700 \n";
    catalogo += "2. Vacio - $5000 \n";
    catalogo += "3. Lomo - $4300 \n";
    catalogo += "4. Entrecot - $3900 \n";
    return catalogo;
}

function comprarProducto() {
    let total = 0;
    let seguirComprando = true;

    while (seguirComprando) {
        let catalogo = mostrarProductos();
        let eleccion = prompt(catalogo + "Que corte desea comprar? Ingrese el numero o escriba 'salir' para finalizar ");

        //verificacion ingreso de dato
        if (eleccion === null || eleccion === "") {
            alert("No has ingresado un dato valido");
        continue;
        }

        //verificacion salir
        if (eleccion === "salir") {
        break;
        }

        eleccion = parseInt(eleccion);

        //verificacion de que el dato sea number y corresponda al rango
        if (isNaN(eleccion) || eleccion < 1 || eleccion > 4) {
        alert("Producto no valido, selecciona nuevamente");
        continue;
        }

        if (eleccion === 1) {
        total += 4700;
        alert("Has agregado Costilla ");
        } else if (eleccion === 2) {
        total += 5000;
        alert("Has agregado Vacio ");
        } else if (eleccion === 3) {
        total += 4300;
        alert("Has agregado Lomo ");
        } else if (eleccion === 4) {
        total += 3900;
        alert("Has agregado Entrecot ");
        }

        let respuesta = prompt("Quiere seguir comprando? (si/no)");

        if (respuesta === "si") {
            seguirComprando = true;
        } if (respuesta === "no") {
            seguirComprando = false;
        } else{
                
                while (respuesta !== "si" || respuesta !== "no"){
                let respuesta = prompt("Quiere seguir comprando? (si/no)");
                if (respuesta === "si"){
                    seguirComprando = true;
                    break
                } if (respuesta === "no"){
                    seguirComprando = false;
                    break
                }
                
            }    
        }
    }
    alert(`Compra exitosa. El total es ${total}`);
    }
comprarProducto();


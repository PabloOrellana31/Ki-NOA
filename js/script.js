class Carrito {
    constructor(TipoDeProducto, Precio, Peso) {
        this.TipoDeProducto = TipoDeProducto;
        this.Precio = Precio;
        this.Peso = Peso;
    }
}

const producto1 = new Carrito("Aceite", 800, "1 litro");
const producto2 = new Carrito("Cereal", 750, "1 kilo");
const producto3 = new Carrito("Confitura", 540, "1/2 kilo");
const producto4 = new Carrito("Harinas", 500, "1 kilo");
const producto5 = new Carrito("Semillas", 350, "1/2 kilo");

const compra = [producto1, producto2, producto3, producto4, producto5];

let eleccion = parseInt(prompt("Bienvenido a Ki-NOA \n ¿Que deseas hacer? n\ 1-Comprar \n 2-¿Que producto podriamos traer? \n 3-Mirar nuestros productos"));

switch (eleccion) {
    case 1:
        let producto = parseInt(prompt("Ingrese el nombre del producto"));
        if (existeproducto) {
            let productoEncontrado = buscarProducto(producto);
        } else {
            alert("No tenemos ese producto");
        }
        break;
    case 2:
        let afirmacion;
        do {
            let TipoDeProducto = parseInt(prompt("Ingrese el producto"));
            let Precio = parseInt(prompt("¿Que precio deberia tener?"));
            let Peso = parseInt(prompt("¿Cuanto deberia pesar?"));

            if (existeproducto(TipoDeProducto)) {
                alert("Error ya existe el producto");
            } else {
                agregarproducto(TipoDeProducto, Precio, Peso);
                console.log(compra);
                alert("Agregado con exito")
            }
            afirmacion = confirm("¿Quiere agregar otro?");
        } while (afirmacion == true)

        break;


    case 3:
        let productosfiltro
        let preciofiltro
        eleccion = parseInt(prompt("Buscar por \n 1-Nombre del producto \n 2-Precio"));
        switch (eleccion) {
            case 1:
                productosfiltro = prompt("Ingrese producto");
                const productofiltrado = compra.filter(Carrito => Carrito.TipoDeProducto.includes(productosfiltro))
                alert("Encontramos el producto " + productosfiltro)
                break;

            case 2:
                preciofiltro = prompt("Ingrese precio");
                const preciofiltrado = compra.filter(Carrito => Carrito.Precio.includes(preciofiltro))
                alert("Encontramos el producto " + preciofiltro)
            default:
                break;
        }

        default:
            alert("Error");
            break;

}



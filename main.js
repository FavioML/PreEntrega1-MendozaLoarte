function inicio() {
  const nombre = prompt("Favor de ingresar su nombre");
  alert(
    "Hola " +
      nombre +
      "!" +
      " le damos la bienvenida a CELESTINA: Vida a Granel"
  );
}

function seleccionarProducto() {
  producto = prompt(
    "Elije uno de los productos disponibles \n 1: Avena \n 2: Cereales \n 3: Granos"
  );
  if (producto === "1") {
    alert("Avena si se encuentra disponible para la compra");
  } else if (producto === "2") {
    alert("Cereales si se encuentra disponible para la compra");
  } else if (producto === "3") {
    alert("Granos si se encuentra disponible para la compra");
  } else {
    alert("No ha seleccionado un producto disponible");
  }
  opcion = prompt(
    "Usted desea: \n 1: Seleccionar otro producto \n 2: Terminar de comprar \n 3: Salir de la web"
  );
}

function compraFinalizada() {
  if (producto === "1") {
    alert("El monto a pagar total es de " + avena * 1.18);
    console.log(`Pedido Avena , valor S/.${avena}`);
  } else if (producto === "2") {
    alert("El monto a pagar total es de " + cereales * 1.18);
    console.log(`Pedido Cereales , valor S/.${cereales}`);
  } else if (producto === "3") {
    alert("El monto a pagar total es de " + granos * 1.18);
    console.log(`Pedido Granos , valor S/.${granos}`);
  }
}

let producto;
const avena = 10;
const cereales = 15;
const granos = 8;

inicio();
let opcion = prompt(
  "Que te gustaría hacer? \n 1: Visualizar los productos \n 2: Terminar de comprar \n 3: Salir de la web"
);

while (opcion !== "3") {
  switch (opcion) {
    case "1":
      seleccionarProducto();
      break;
    case "2":
      compraFinalizada();
      opcion = "3";
  }
}

alert("Gracias por su compra, vuelva pronto");

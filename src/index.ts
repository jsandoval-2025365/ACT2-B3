import * as readline from "readline";

import { Mercancia, calcularSubtotal } from "./calcular-subtotal.js";
import { calcularIVA } from "./calcular-iva.js";
import { calcularTotal } from "./calcular-total.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const compradores: string[] = ["Mynor","Maria","Yubbiny"];

const productos: Mercancia[] = [
    {nombre: "Papas", precio: 15},
    {nombre: "Galletas", precio: 10},
    {nombre: "Refresco", precio: 8}
];

/**
 * Inicia el flujo principal de la compra.
 *
 * Solicita al usuario seleccionar un comprador
 * y, una vez validado, inicia el proceso de
 * selección de productos.
 *
 * @returns No retorna ningún valor.
 */
const iniciarCompra = (): void => {

    const carrito: Mercancia[] = [];

    rl.question(`Seleccione un comprador: 
        1. ${compradores[0]} 
        2. ${compradores[1]} 
        3. ${compradores[2]} 
    Opción: `, (people) => {

            const user = parseInt(people);

            if (isNaN(user) || user < 1 || user > compradores.length) {
                console.log("\nComprador inválido.");
                rl.close();
                return;
            }

            const compradorSeleccionado =
                compradores[user - 1];

            if (!compradorSeleccionado) {
                console.log("\nComprador no encontrado.");
                rl.close();
                return;
            }

            console.log(`\nComprador seleccionado: ${compradorSeleccionado}`);

            
/**
 * Permite al usuario agregar productos al carrito
 * de manera recursiva hasta que decida finalizar
 * la compra ingresando la opción 0.
 *
 * Al finalizar, genera el resumen de compra,
 * calcula subtotal, IVA y total.
 *
 * @param carrito - Lista de productos agregados durante la compra.
 * @param comprador - Nombre del comprador seleccionado.
 *
 * @returns No retorna ningún valor.
 */            
            seleccionarProductos(carrito, compradorSeleccionado);
        }
    );
};

const seleccionarProductos = (carrito: Mercancia[], comprador: string): void => {

    console.log("\nProductos disponibles:\n");

    productos.forEach((producto, index) => {

            console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);

        }
    );

    console.log("\n0. Finalizar compra\n");

    rl.question("Seleccione un producto: ", (producto) => {

            const compra = parseInt(producto);

            if (compra === 0) {

                const subtotal =
                    calcularSubtotal(carrito);

                const iva =
                    calcularIVA(subtotal);

                const total = calcularTotal(subtotal,iva);

                console.log("\n===== RESUMEN DE COMPRA =====");

                console.log(`\nComprador: ${comprador}`);

                console.log("\nProductos comprados:");

                if(carrito.length === 0) {

                    console.log("No se agregaron productos.");
                }else{
                    carrito.forEach(
                        (item,index) => {

                            console.log(`${index + 1}. ${item.nombre} - $${item.precio.toFixed(2)}`);

                        }
                    );

                }

                console.log("\n=============================");

                console.log(`Subtotal: $${subtotal.toFixed(2)}`);

                console.log(`IVA (12%): $${iva.toFixed(2)}`);

                console.log(`Total: $${total.toFixed(2)}`);

                console.log("\n=============================");

                rl.close();
                return;
            }

            if (isNaN(compra) || compra < 1 || compra > productos.length) {
                console.log("\nProducto inválido.");

                seleccionarProductos(carrito,comprador);

                return;
            }

            const productoSeleccionado = productos[compra - 1];

            if (!productoSeleccionado) {

                console.log("\nProducto no encontrado.");

                seleccionarProductos(carrito,comprador);

                return;
            }

            carrito.push(productoSeleccionado);

            console.log(`\n${productoSeleccionado.nombre} agregado al carrito.`);

            seleccionarProductos(carrito,comprador);
        }
    );
};

iniciarCompra();
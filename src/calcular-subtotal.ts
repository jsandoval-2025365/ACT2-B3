/**
 * Representa un producto que puede ser agregado al carrito.
 */
export interface Mercancia {
    nombre: string;
    precio: number;
}


/**
 * Calcula la suma total de los precios de todos los productos
 * contenidos en el carrito de compra.
 *
 * También valida que el carrito sea un arreglo válido y que
 * todos los productos tengan un precio numérico mayor o igual a cero.
 *
 * @param carrito - Lista de productos seleccionados por el usuario.
 * @returns El subtotal acumulado de todos los productos.
 *
 * @throws Error Si el carrito no es un arreglo.
 * @throws Error Si algún producto tiene un precio inválido.
 */
export const calcularSubtotal = (carrito: Mercancia[]): number => {

    if (!Array.isArray(carrito)) {
        throw new Error(
            "El carrito debe ser un arreglo."
        );
    }

    if (carrito.length === 0) {
        return 0;
    }

    return carrito.reduce(
        (acumulador, producto) => {

            if (typeof producto.precio !== "number" || producto.precio < 0) {
                throw new Error(
                    `Precio inválido para ${producto.nombre}`
                );
            }

            return (acumulador + producto.precio);

        },
        0
    );
};
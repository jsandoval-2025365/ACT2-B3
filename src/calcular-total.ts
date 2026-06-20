/**
 * Calcula el total final de la compra.
 *
 * El total se obtiene sumando el subtotal
 * más el importe del IVA.
 *
 * @param subtotal - Suma de los productos antes de impuestos.
 * @param iva - Importe del IVA calculado previamente.
 * @returns El monto total a pagar.
 *
 * @throws Error Si alguno de los valores es negativo.
 */

export const calcularTotal = (subtotal: number,iva: number): number => {

    if (subtotal < 0 || iva < 0) {
        throw new Error(
            "Valores inválidos."
        );
    }

    return (subtotal + iva);
};
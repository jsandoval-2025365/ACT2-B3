/**
 * Calcula el IVA correspondiente a un subtotal.
 *
 * Actualmente utiliza una tasa fija del 16%.
 *
 * @param subtotal - Monto subtotal de la compra.
 * @returns El importe correspondiente al IVA.
 *
 * @throws Error Si el subtotal es negativo o no es numérico.
 */

export const calcularIVA = (subtotal: number): number => {

    if (typeof subtotal !== "number" || subtotal < 0) {
        throw new Error(
            "Subtotal inválido."
        );
    }

    return (subtotal * 0.12);
};
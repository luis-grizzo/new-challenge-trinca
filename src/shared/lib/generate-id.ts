/**
 * @function generateId - Gera um número aleatório.
 *
 * @returns O número gerado entre 0 a 9999.
 */

export const generateId = () => Math.round(Math.random() * 10000)

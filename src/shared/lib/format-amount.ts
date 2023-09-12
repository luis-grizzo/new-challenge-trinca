/**
 * @function formatAmount - Realiza a formatação do número fornecido para o padrão do Real Brasileiro.
 *
 * @param value - Valor a ser formatado.
 *
 * @returns Valor formatado no padrão do Real Brasileiro.
 */

export const formatAmount = (value: number): string => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

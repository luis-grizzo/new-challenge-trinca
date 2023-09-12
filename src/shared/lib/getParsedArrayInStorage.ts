/**
 * @function getParsedArrayInStorage - Valida o storage da chave fornecida e realiza o parse da informação com a tipagem fornecida.
 *
 * @param storageKey - Chave do storage a ser processado.
 *
 * @returns O array tipado com o type fornecido.
 */

export const getParsedArrayInStorage = <T>(storageKey: string): Array<T> => {
  !localStorage.getItem(storageKey) &&
    localStorage.setItem(storageKey, JSON.stringify([]))

  const storage = localStorage.getItem(storageKey)

  const parsedStorage = storage && JSON.parse(storage)

  return parsedStorage
}

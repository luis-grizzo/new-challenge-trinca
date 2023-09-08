export const getParsedArrayInStorage = <T>(storageKey: string): Array<T> => {
  !localStorage.getItem(storageKey) &&
    localStorage.setItem(storageKey, JSON.stringify([]))

  const storage = localStorage.getItem(storageKey)

  const parsedStorage = storage && JSON.parse(storage)

  return parsedStorage
}

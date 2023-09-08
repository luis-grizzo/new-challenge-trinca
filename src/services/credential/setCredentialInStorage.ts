import { ICredential, IEvent } from '@/shared/types'
import { getParsedArrayInStorage, generateId } from '@/shared/utils'
import { CREDENTIAL_STORAGE_KEY } from '@/shared/constants'

/**
 * @function setCredentialInStorage - Cadastra uma nova credencial no localStorage.
 *
 * @param email - Email a ser cadastrado.
 * @param password - Senha a ser cadastrada.
 */

export const setCredentialInStorage = (email: string, password: string) => {
  const parsedStorage = getParsedArrayInStorage<ICredential>(CREDENTIAL_STORAGE_KEY)

  const newStorage: ICredential[] = [
    ...parsedStorage,
    {
      id: generateId(),
      email,
      password
    }
  ]

  localStorage.setItem(CREDENTIAL_STORAGE_KEY, JSON.stringify(newStorage))
}

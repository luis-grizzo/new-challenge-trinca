import { toast } from 'react-toastify'

import { USER_STORAGE_KEY } from "@/shared/constants"
import { IUser } from "@/shared/types"
import { getParsedArrayInStorage, generateId } from "@/shared/utils"

/**
 * @function setUserInStorage - Cadastra um novo usuário no localStorage.
 *
 * @param email - Email a ser cadastrado.
 * @param password - Senha a ser cadastrada.
 */

export const setUserInStorage = (email: string, password: string) => {
  const parsedStorage = getParsedArrayInStorage<IUser>(USER_STORAGE_KEY)

  const newStorage: IUser[] = [
    ...parsedStorage,
    {
      id: generateId(),
      email,
      password,
      events: []
    }
  ]

  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newStorage))

  toast.success("Usuário cadastrado com sucesso!")
}

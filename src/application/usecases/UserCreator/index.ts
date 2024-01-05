import type { User } from '@domain/entities/User'
import type { UserRepository } from '@domain/repositories/UserRepository'
import { UserAlreadyExistsException } from '@domain/exeptions/UserAlreadyExistsException'
import { ExistUserByUserName } from '@domain/services/ExistUserByUserName'

export class UserCreatoUseCase {
  private readonly _userRepository: UserRepository
  private readonly _existUserByUsername: ExistUserByUserName

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
    this._existUserByUsername = new ExistUserByUserName(userRepository)
  }

  async run (body: User): Promise<User> {
    const existUser: boolean = await this._existUserByUsername.run(body.username)

    if (existUser) throw new UserAlreadyExistsException()

    const userCreated: User = await this._userRepository.save(body)

    return userCreated
  }
}

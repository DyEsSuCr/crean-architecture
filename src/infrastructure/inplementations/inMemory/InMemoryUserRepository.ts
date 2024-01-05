import type { Nullable } from '@domain/Nullable'
import type { User } from '@domain/entities/User'
import type { UserRepository } from '@domain/repositories/UserRepository'

export class InMemoryUserRepository implements UserRepository {
  private readonly userData: User[] = []

  async getByUsername (username: string): Promise<Nullable<User>> {
    const userFound = this.userData.find((user) => user.username === username)

    if (userFound === undefined) return null

    return userFound
  }

  async getAll (): Promise<User[]> {
    return this.userData
  }

  async save (user: User): Promise<User> {
    this.userData.push(user)
    return user
  }

  async update (user: User): Promise<User> {
    return user
  }

  async delete (): Promise<void> {}

  async getById (id: string): Promise<Nullable<User>> {
    return null
  }
}

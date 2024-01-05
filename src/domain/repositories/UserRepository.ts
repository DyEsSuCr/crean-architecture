import type { Nullable } from '@domain/Nullable'
import type { User } from '@domain/entities/User'

export interface UserRepository {
  getAll: () => Promise<User[]>
  save: (user: User) => Promise<User>
  getByUsername: (username: string) => Promise<Nullable<User>>
  update: (user: User) => Promise<User>
  delete: (user: User) => Promise<void>
  getById: (id: string) => Promise<Nullable<User>>
}

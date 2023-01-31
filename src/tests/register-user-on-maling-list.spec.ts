import { UserData } from './../usecases/register-user-on-maling-list/user-data';

describe('Register user on mailing list use case',()=> {
  test('should add user with complete data to mailing list', async () => {
    const users: UserData[] = []
    console.log(users)
    // const repo: UserRepository = new InMemoryUserRepository(users)
    // const usercase: RegisterUserOnMailingList = new RegisterOnMailingList(repo)
    // const name = 'Carlos Eduardo'
    // const email = 'any@email.com'
    // const response = await usercase.RegisterUserOnMailingList({ name, email })
    // const user = repo.findUserByEmail(email)
    // expect((await user).name).toBe('Carlos Eduardo')
  })
})
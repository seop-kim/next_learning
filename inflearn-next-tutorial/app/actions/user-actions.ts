'use server'

type User = {
    id: number,
    name: string,
}

export async function searchUsers(name: string) {
    const DB: User[] = [
        {id: 1, name: 'test'},
        {id: 2, name: 'test2'},
        {id: 3, name: 'test3'},
    ]

    return DB.filter(user => user.name.includes(name))
}

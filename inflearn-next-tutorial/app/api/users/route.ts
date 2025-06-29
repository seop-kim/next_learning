import {NextResponse} from "next/server";

type User = {
    id: number,
    name: string,
}

const DB: User[] = [
    {id: 1, name: 'test'},
    {id: 2, name: 'test2'},
    {id: 3, name: 'test3'},
]

export async function GET(request: Request) {
    const searchParams = new URL(request.url).searchParams;
    const name = searchParams.get('name') as string;

    return NextResponse.json({
        users: DB.filter(user => user.name.includes(name))
    })
}

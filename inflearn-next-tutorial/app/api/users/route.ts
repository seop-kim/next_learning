import {NextResponse} from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({
        users: [
            {id: 1, name: 'test'},
            {id: 2, name: 'test2'},
            {id: 3, name: 'test3'},
        ]
    })
}

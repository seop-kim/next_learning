'use client'

import {useEffect, useState} from "react";
import {searchUsers} from "@/app/actions/user-actions";

type User = {
    id: number,
    name: string,
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        searchUsers('test')
            .then(data => setUsers(data));
    }, [])

    return (
        <div>
            <h1>Users</h1>
            {users.map(user => <p key={user.id}>{user.name}</p>)}
        </div>
    );
}
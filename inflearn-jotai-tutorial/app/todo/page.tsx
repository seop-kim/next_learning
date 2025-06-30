'use client'

import {useQuery, useMutation} from "@tanstack/react-query";
import {createTodo, getTodos} from "@/app/actions/todo-actions";
import {useState} from "react";


export default function TodosPage() {
    const [todoInput, setTodoInput] = useState('');

    const todosQuery = useQuery({
        queryKey: ['todos'],
        queryFn: () => getTodos()
    });

    const createTodMutation = useMutation({
        mutationFn: async () => {
            if (todoInput === '') throw new Error('no data')
            return createTodo(todoInput);
        },
        onSuccess: () => {
            setTodoInput('');
            todosQuery.refetch();
        },
        onError: (error) => {
            alert(error);
        },
    });

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todos</h1>
            {/* TODOS를 생성하는 부분 */}
            <div className="flex space-x-2 mb-4">
                <input
                    type="text"
                    value={todoInput}
                    placeholder="Enter todo"
                    onChange={(e) => setTodoInput(e.target.value)}
                    className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={() => createTodMutation.mutate()}
                    disabled={createTodMutation.isPending}
                    className={`px-4 py-2 rounded text-white ${createTodMutation.isPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    {createTodMutation.isPending ? "Loading..." : "Create"}
                </button>
            </div>

            {/* TODOS를 보여주는 부분 */}
            {todosQuery.isLoading && <p>Loading...</p>}
            {todosQuery.data && todosQuery.data.map((todo: string, index: number) => (
                <p key={index} className="border-b py-2">{todo}</p>
            ))}
        </div>
    );
};
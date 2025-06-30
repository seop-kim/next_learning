'use server'

const TODOS: string[] = [
    'todo1',
    'todo2',
    'todo3',
];

export const getTodos = async () => {
    return TODOS;
}

export const createTodo = async (data: string) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    TODOS.push(data);
    return TODOS;
}
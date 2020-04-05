const initialState = {
    todoList: [
        'atualizado via redux!'
    ]
}

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, todoList: [...state.todoList, action.item]}
        default:
            return state;
    }
}
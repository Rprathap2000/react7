const initialState = {
    todos:[]
}
const todoReducer = (state=initialState,action) =>
{
    switch (action.type)
    {
        case "ADD": return {
            ...state, todos: [...state.todos, {
                id: action.id,
                text:action.data }] }
        default: return state;
    }
    
}
export default todoReducer
export const ADDTODO = (id,text) => (
    {
        type: "ADD",
        id: id,
        data:text
    }
)
export const DELETETODO = (id) => (
    {
        type: "DELETE",
        id:id
    }
)
export const Toggle = (id) =>
(
    {
        type: "Toggle",
        id:id
    }
)
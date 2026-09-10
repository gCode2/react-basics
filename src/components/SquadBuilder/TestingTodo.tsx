import { useReducer, useState } from "react"



function TestingTodo(){
    interface Todo{
    id: number,
    text: string,
    done: boolean
    }

    type TodoAction = | 
    {type: "add", text: string} | 
    {type: "remove", id: number} |
    {type: "toggle", id: number}

    const initialTodos = [{id: 0, text: "1st one", done: false},{id: 1, text: "2nd one", done: false}];

    // const [todo, setTodo] = useState<Todo[]>(initialTodos);
    const [todoText, setTodoText] = useState("");

    

    function todosReducer(state: Todo[], action: TodoAction): Todo[]{
        switch(action.type){
            case "add":
                return [...state, {id: Date.now(), text: action.text, done: false}];
            case "remove":
                return state.filter(todo=>todo.id !== action.id);
            case "toggle":
                return state.map(todo=>todo.id === action.id ? {...todo, done: !todo.done} : todo)
            default:{
                throw Error('Unknown action')
            }
        }
    }

    const [state, dispatch] = useReducer(todosReducer, initialTodos);

    function removeTodoHandler(id:number){
        dispatch({
            type:"remove",
            id: id
        })
    }
    function handleTodoAdd(text: string){
        setTodoText("");
        dispatch({
            type:"add",
            text: text
        })
    }
    function handleTodoToggle(id: number){
        dispatch({
            type: "toggle",
            id: id
        })
    }
    return (
        <>
        <div>
            <h3>
                add todo
            </h3>
            <input type="text" value={todoText} onChange={(e)=>setTodoText(e.target.value)}/>
            <button onClick={()=>handleTodoAdd(todoText)}>
                Add
            </button>
        </div>
        <div>
            {state.map(todo=>(
                <div key={todo.id}>
                    <div style={todo.done ? {textDecoration: "line-through"} : {}}>{todo.text}</div>
                    <div>
                        <button onClick={()=>handleTodoToggle(todo.id)}>
                            Toggle
                        </button>
                        <button onClick={()=>removeTodoHandler(todo.id)}>
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
export default TestingTodo
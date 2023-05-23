import { useState } from "react";

import ToDoForm from "../components/ToDoApp/ToDoForm";
import List from "../components/ToDoApp/List";

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);

    return (
        <div>
            <h3 className='bg-primary text-light py-2 text-center'>
                To Do App
            </h3>
            <div className='todo-container shadow p-2 py-3'>
                <ToDoForm todoList={todoList} setTodoList={setTodoList} />
                <List todoList={todoList} setTodoList={setTodoList} />
            </div>
        </div>
    );
};

export default TodoApp;

import React, { useState } from "react";

const ToDoForm = (props) => {
    const { todoList, setTodoList } = props;
    const [item, setItem] = useState("");

    const handleAddToDo = () => {
        if (item === "") return;
        const newTodo = {
            id: Math.floor(Math.random() * 100000),
            description: item,
            isCompleted: false,
            createdAt: new Date(),
        };

        const tempToDo = [...todoList, newTodo];
        setTodoList(tempToDo);
        setItem("");
    };

    return (
        <div>
            <div className=' d-flex mb-3'>
                <input
                    onChange={(e) => {
                        setItem(e.target.value);
                    }}
                    type='text'
                    className='form-control'
                    placeholder='write some thing ...'
                    value={item}
                />
                <button
                    onClick={handleAddToDo}
                    className={
                        item === ""
                            ? "btn btn-success btn-sm px-3 ms-3 disabled"
                            : "btn btn-success btn-sm px-3 ms-3 "
                    }>
                    <i className='fa-solid fa-plus'></i>
                </button>
            </div>
        </div>
    );
};

export default ToDoForm;

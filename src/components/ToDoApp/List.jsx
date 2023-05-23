import React from "react";

const List = (props) => {
    const { todoList, setTodoList } = props;
    console.log("todoList", todoList);

    const handleDeleteToDo = (selectedId) => {
        console.log({ selectedId });
        const newTodoList = todoList.filter((item) => item.id !== selectedId);
        setTodoList(newTodoList);
    };

    return (
        <div>
            {todoList.length > 0 ? (
                <div>
                    {todoList.map((toDoItem) => (
                        <div
                            key={toDoItem.id}
                            className='d-flex align-items-center justify-content-between mb-1'>
                            <input
                                type='checkbox'
                                className='form-check-input '
                            />
                            <p className='mb-1 mx-2'>{toDoItem.description}</p>
                            <div className='d-flex'>
                                <button className='btn btn-info btn-sm mx-2'>
                                    <i className='fa-solid fa-edit'></i>
                                </button>
                                <button
                                    onClick={() =>
                                        handleDeleteToDo(toDoItem.id)
                                    }
                                    className='btn btn-danger btn-sm'>
                                    <i className='fa-solid fa-trash'></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Nothing Added</p>
            )}
        </div>
    );
};

export default List;

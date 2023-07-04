import React from 'react';

type PropsType = {
    tasks: TasksType[]
    children?: React.ReactNode
}

type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

const SuperTodolist: React.FC<PropsType> = (props) => {
    const {tasks, children} = props

    const currentTasks = tasks.map(el => {
        return (
            <li>
                <input type={"checkbox"} checked={el.isDone}/>
                <span>{el.title}</span>
            </li>
        )
    })


    return (
        <div>
            <h1>Im TODOLIST</h1>
            {currentTasks}
            {children}
        </div>
    );
};

export default SuperTodolist;
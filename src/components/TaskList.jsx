// src/components/TaskList/TaskList.js
import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

const TaskList = () => {
    const { filteredTasks, toggleDescription } = useTaskContext();

    return (
        <div className='mt-6'>
            {
                filteredTasks.map((task) => (
                    <TaskCard key={task.id} task={task} toggleDescription={toggleDescription} />
                ))
            }
        </div>
    );
};

export default TaskList;

import React, { createContext, useContext, useState } from 'react';
import initialData from '../assets/data';

const TaskContext = createContext();

export const useTaskContext = () => {
    return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(initialData);
    const [severityFilter, setSeverityFilter] = useState('All');
    const [sortOrder, setSortOrder] = useState('Newest');

    const addNewTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const toggleDescription = (id) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, descExpanded: !task.descExpanded }
                    : task
            )
        );
    };

    const filteredTasks = tasks
        .filter((task) => severityFilter === 'All' || task.severity === severityFilter)
        .sort((a, b) =>
            sortOrder === 'Newest'
                ? new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime()
                : new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime()
        );

    return (
        <TaskContext.Provider
            value={{
                filteredTasks,
                severityFilter,
                setSeverityFilter,
                sortOrder,
                setSortOrder,
                addNewTask,
                toggleDescription,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

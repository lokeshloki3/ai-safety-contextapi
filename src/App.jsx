import React from 'react';
import FilterTasks from './components/FilterTasks';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 p-8 text-center w-11/12 mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        AI Safety Incident Dashboard
      </h1>
      <FilterTasks />
      <TaskForm />
      <div className="mt-6">
        <TaskList />
      </div>
    </div>
  );
};

export default App;

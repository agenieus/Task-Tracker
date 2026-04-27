'use client';
import TaskList from '@/components/tasks-structure/tasklist';
import mockTasks from '@/lib/tasks';
import { useEffect, useState } from 'react';

export default function TasksPage() {
  const [tasks, setTasks] = useState(mockTasks);

  useEffect(() => {
    console.log('Tasks Loaded.');
  }, []);

  function toggleTaskCompletion(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold ">My Tasks</h1>
      <p className="text-2xl mt-1 mb-3 ">{tasks.length} total tasks</p>
      <TaskList tasks={tasks} onToggle={toggleTaskCompletion}></TaskList>
    </main>
  );
}

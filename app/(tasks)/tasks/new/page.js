import NewTaskForm from '@/components/tasks-structure/new-task-form';

export const metadata = {
  title: 'New Task',
  description: 'Create a new task',
};

export default function NewTaskPage() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Task</h1>
      <NewTaskForm />
    </main>
  );
}

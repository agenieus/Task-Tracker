import TaskList from '@/components/tasks-structure/tasklist';
import { getAllTasks } from '@/lib/tasks';
import Link from 'next/link';

export const revalidate = 60;

export async function generateMetadata() {
  const tasks = getAllTasks();
  const pending = tasks.filter((t) => !t.is_completed).length;
  return {
    title: 'My tasks',
    description: `You have ${pending} pending task${pending === 1 ? '' : 's'}`,
  };
}

export default async function TasksPage() {
  // const [tasks, setTasks] = useState(mockTasks);

  // useEffect(() => {
  //   console.log('Tasks Loaded.');
  // }, []);

  // function toggleTaskCompletion(id) {
  //   setTasks((prevTasks) =>
  //     prevTasks.map((task) =>
  //       task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
  //     )
  //   );
  // }

  const tasks = getAllTasks();

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold">My Tasks</h1>
          <p className="text-2xl mt-1 mb-3">{tasks.length} total tasks</p>
        </div>
        <Link
          href="/tasks/new"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          + New Task
        </Link>
      </div>
      <TaskList tasks={tasks} />
    </main>
  );
}

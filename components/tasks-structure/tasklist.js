import TaskCard from './taskcard';

export default function TaskList({ tasks, onToggle }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
}

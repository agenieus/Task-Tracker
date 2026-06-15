'use client';
import { createTask } from '@/lib/actions';
import { useActionState } from 'react';
import SubmitButton from '../submit/submit-button';

const initialState = { errors: {} };

export default function NewTaskForm() {
  const [state, formAction, isPending] = useActionState(
    createTask,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {state?.errors?.general && (
        <p className="text-red-400 text-sm">{state.errors.general}</p>
      )}

      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="text-sm font-medium">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="w-full bg-slate-800 border border-indigo-800 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="e.g Build login screen"
        />
        {state?.errors?.title && (
          <p className="text-red-400 text-sm">{state.errors.title}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="text-sm font-medium">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          className="w-full bg-slate-800 border border-indigo-800 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="e.g Describe the task"
        />
        {state?.errors?.description && (
          <p className="text-red-400 text-sm">{state.errors.description}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="priority" className="text-sm font-medium">
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          className="w-full bg-slate-800 border border-indigo-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        {state?.errors?.priority && (
          <p className="text-red-400 text-sm">{state.errors.priority}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="image" className="text-sm font-medium">
          Image (optional)
        </label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-slate-700 file:text-white hover:file:bg-indigo-600"
        />
      </div>

      <SubmitButton label="Create Task" pendingLabel="Creating..." />
    </form>
  );
}

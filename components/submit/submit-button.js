'use client';
import { useFormStatus } from 'react-dom';

export default function SubmitButton({
  label = 'Submit',
  pendingLabel = 'Saving...',
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`px-6 py-2 rounded-lg font-medium text-white transition-colors ${
        pending
          ? 'bg-gray-500 cursor-not-allowed'
          : 'bg-indigo-700 hover:bg-indigo-800'
      }`}
    >
      {pending ? pendingLabel : label}
    </button>
  );
}

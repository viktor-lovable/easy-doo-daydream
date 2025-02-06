
import React from 'react';
import { Check, Trash2 } from 'lucide-react';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <button
        onClick={() => onToggle(id)}
        className={`todo-checkbox ${completed ? 'checked' : ''}`}
      >
        {completed && <Check className="w-3 h-3 text-white" />}
      </button>
      <span className="flex-1">{text}</span>
      <button
        onClick={() => onDelete(id)}
        className="todo-delete"
        aria-label="Delete todo"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
};

export default TodoItem;

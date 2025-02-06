
import React, { useEffect, useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';
import EmptyState from '../components/EmptyState';
import { toast } from 'sonner';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    toast.success('Task added');
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.success('Task deleted');
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="container max-w-2xl py-12 space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-medium tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">
            Keep track of your daily tasks and goals.
          </p>
        </div>

        <TodoInput onAdd={addTodo} />

        <div className="space-y-3">
          {todos.length === 0 ? (
            <EmptyState />
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                {...todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;

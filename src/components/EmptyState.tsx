
import React from 'react';
import { ClipboardList } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <div className="empty-state">
      <ClipboardList className="w-12 h-12 mx-auto mb-4 text-muted-foreground/40" />
      <h3 className="text-lg font-medium mb-1">No tasks yet</h3>
      <p className="text-sm">Add your first task above</p>
    </div>
  );
};

export default EmptyState;

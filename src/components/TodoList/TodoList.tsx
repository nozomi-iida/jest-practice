import { FC } from 'react';
import { Todo } from '../../type';
import TodoItem from '../TodoItem/TodoItem';
type Props = {
  todos: Todo[] | undefined;
  removeHandler?: (id: number) => void;
  updateTodo?: (id: number) => void;
};
const TodoList: FC<Props> = ({ todos, removeHandler, updateTodo }) => {
  return (
    <div>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeHandler={removeHandler}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

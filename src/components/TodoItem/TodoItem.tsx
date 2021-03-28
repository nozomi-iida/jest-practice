import { FC } from 'react';
import { Todo } from '../../type';
import styles from './TodoItem.module.css';

type Props = {
  todo: Todo;
  removeHandler?: (id: number) => void;
  updateTodo?: (id: number) => void;
};
const TodoItem: FC<Props> = ({ todo, removeHandler, updateTodo }) => (
  <div className={styles.itemContainer}>
    <div>
      <input
        type='checkbox'
        name={`checkbox-${todo.id}`}
        checked={todo.completed}
        data-testid={`checkbox-${todo.id}`}
        onChange={() => updateTodo && updateTodo(todo.id)}
      />
      <label
        htmlFor={`checkbox-${todo.id}`}
        onClick={() => updateTodo && updateTodo(todo.id)}
        className={todo.completed ? styles.completed : ''}
      >
        {todo.title}
      </label>
    </div>
    <button
      className={styles.closeBtn}
      data-testid={`close-btn-${todo.id}`}
      onClick={() => removeHandler && removeHandler(todo.id)}
    >
      x
    </button>
  </div>
);
export default TodoItem;

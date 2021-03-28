import { render, screen } from '@testing-library/react';
import mockData from '../../mockData';
import TodoList from './TodoList';

beforeEach(() => {
  fetchMock.once(JSON.stringify(mockData));
});

describe('todo list test', () => {
  it('should show of todos', () => {
    render(<TodoList todos={mockData} />);
    mockData.forEach((data) =>
      expect(screen.getByText(data.title)).toBeInTheDocument()
    );
  });
  // it('should show title of todos', () => {
  //   render(<TodoList todos={mockData} />);
  //   screen.debug();
  // });
});

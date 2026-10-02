import { beforeEach, describe, it, expect, vi, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from './Todo'

const todoData = {
  done: false,
  text: 'dummy text',
  _id: 'dummyId',
}

describe('Todo component test', () => {
  const mockCompleteTodo = vi.fn()
  const mockDeleteTodo = vi.fn()
  beforeEach(() => {
    render(
      <Todo
        todo={todoData}
        completeTodo={mockCompleteTodo}
        deleteTodo={mockDeleteTodo}
      />,
    )
  })

  test('renders content', () => {
    expect(screen.getByText('dummy text')).toBeDefined()
    expect(screen.getByText('Set as done')).toBeDefined()
    expect(screen.getByText('This todo is not done')).toBeDefined()
    expect(screen.getByText('Delete')).toBeDefined()
  })

  it('triggers completeTodo function on click', async () => {
    const user = userEvent.setup()

    const setAsDoneButton = screen.getByRole('button', { name: /Set as done/i })
    await user.click(setAsDoneButton)

    expect(mockCompleteTodo).toHaveBeenCalledTimes(1)
  })
})

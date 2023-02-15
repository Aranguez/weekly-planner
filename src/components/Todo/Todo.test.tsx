import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { screen, render, cleanup, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Todo from './Todo'

const defaultProps = {
  title: 'todo title',
  onEdit: vi.fn(),
  onDelete: vi.fn()
}

describe('Todo component', () => {
  beforeEach(() => {
    render(<Todo {...defaultProps} />)
  })

  afterEach(cleanup)

  it('should render todo title', () => {
    screen.getByText('todo title')
  })

  it('should render todo delete button', () => {
    screen.getByRole('button', { name: 'Delete' })
  })

  it('should render todo edit button', () => {
    screen.getByRole('button', { name: 'Edit' })
  })

  it('should call edit fn', async () => {
    const editBtn = screen.getByRole('button', { name: 'Edit' })
    userEvent.click(editBtn)

    await waitFor(() => {
      expect(defaultProps.onEdit).toBeCalled()
    })
  })

  it('should call delete fn', async () => {
    const deleteBtn = screen.getByRole('button', { name: 'Delete' })
    userEvent.click(deleteBtn)

    await waitFor(() => {
      expect(defaultProps.onDelete).toBeCalled()
    })
  })
})

import { beforeEach, describe, expect, it } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'

// mocks
import { TASK } from 'mocks/task'

// component to test
import TodoList, { Props } from './TodoList'

const defaultProps: Props = {
  tasks: []
}

describe('TodoList component', () => {
  beforeEach(cleanup)

  it('should render component correctly', () => {
    render(<TodoList {...defaultProps} />)
  })

  it('should display an empty list', () => {
    render(<TodoList {...defaultProps} />)
    expect(screen.getByRole('list').children).toStrictEqual([])
  })

  it('should display a list of tasks', () => {
    render(<TodoList tasks={[TASK]} />)
    screen.getAllByRole('listitem')
  })
})

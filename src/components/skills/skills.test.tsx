import { render, screen, logRoles } from '@testing-library/react'
import { Skills } from './skills'

describe('Skills', () => {
  const skillsArray = ['HTML', 'CSS', 'JavaScript']

  test('renders is correctly', () => {
    render(<Skills skills={skillsArray} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list skills', () => {
    render(<Skills skills={skillsArray} />)
    const listElementItems = screen.getAllByRole('listitem')
    expect(listElementItems).toHaveLength(skillsArray.length)
  })

  test('renders Login button', () => {
    render(<Skills skills={skillsArray} />)
    const logginButton = screen.getByRole('button', {
      name: 'Login',
    })
    expect(logginButton).toBeInTheDocument()
  })

  test('Start learning button is not rendered', () => {
    render(<Skills skills={skillsArray} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('Start learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skillsArray} />)
    logRoles(view.container)
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000,
      },
    )
    expect(startLearningButton).toBeInTheDocument()
  })
})

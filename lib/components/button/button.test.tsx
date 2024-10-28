import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Button from './button'

describe(`Compnent: ${Button.name}`, () => {
    it('should render', () => {
        const { container } = render(<Button>My Button</Button>)

        expect(container).toMatchInlineSnapshot(`
          <div>
            <button
              class="default solid medium "
              style="min-width: undefinedpx; max-width: undefinedpx;"
            >
              My Button
            </button>
          </div>
        `)
    })
})
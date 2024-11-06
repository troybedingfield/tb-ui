import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import SplitButton from './splitbutton'

describe(`Component: ${SplitButton.name}`, () => {
    it('should render', () => {
        const { container } = render(<SplitButton dropdownItems={["item1", "item2"]}>My Button</SplitButton>)

        expect(container).toMatchInlineSnapshot(`
          <div>
            <div
              class="split-container"
            >
              <button
                class=""
              >
                My Button
              </button>
              <div
                class="dropdown"
              >
                <button>
                  <span
                    class="down-arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        `)
    })

})
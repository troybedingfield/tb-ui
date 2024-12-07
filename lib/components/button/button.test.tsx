import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Button from './button'

describe(`Component: ${Button.name}`, () => {
  it('should render', () => {
    const { container } = render(<Button>My Button</Button>)

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid medium "
        >
          My Button
        </button>
      </div>
    `)
  })

  it('should render Button Text correctly', () => {
    const { container } = render(<Button>Button Text</Button>)

    expect(container.querySelector('Button Text'));
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid medium "
        >
          Button Text
        </button>
      </div>
    `)
  })

  it('should render color prop = default correctly', () => {
    const { container } = render(<Button color='primary'>Button Text</Button>)

    expect(container.firstElementChild?.classList.contains('default')).toBe(true)
    // expect(getByText('large')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid medium "
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render color prop = secondary correctly', () => {
    const { container } = render(<Button color='secondary'>Button Text</Button>)

    expect(container.firstElementChild?.classList.contains('secondary')).toBe(true)
    // expect(getByText('large')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="secondary solid medium "
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render color prop = error correctly', () => {
    const { container } = render(<Button color='error'>Button Text</Button>)

    expect(container.firstElementChild?.classList.contains('error')).toBe(true)
    // expect(getByText('large')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="error solid medium "
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render color prop = warning correctly', () => {
    const { container } = render(<Button color='warning'>Button Text</Button>)

    expect(container.firstElementChild?.classList.contains('warning')).toBe(true)
    // expect(getByText('large')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="warning solid medium "
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render color prop = success correctly', () => {
    const { container } = render(<Button color='success'>Button Text</Button>)

    expect(container.firstElementChild?.classList.contains('success')).toBe(true)
    // expect(getByText('large')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="success solid medium "
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render color prop = disabled correctly', () => {
    const { container } = render(<Button color='disabled'>Button Text</Button>)

    expect(container.firstElementChild?.classList.contains('disabled')).toBe(true)
    // expect(getByText('large')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="disabled solid medium "
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render size prop = small correctly', () => {
    const { container } = render(<Button size='small'>Button Text</Button>)

    expect(container.querySelector('Button Text'));
    expect(container.firstElementChild?.classList.contains('small')).toBe(true)
    // expect(getByText('large')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid small "
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render size prop = medium correctly', () => {
    const { container } = render(<Button size='medium'>Button Text</Button>)

    expect(container.querySelector('Button Text'));
    expect(container.firstElementChild?.classList.contains('medium')).toBe(true)
    // expect(getByText('large')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid medium "
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render size prop = large correctly', () => {
    const { container } = render(<Button size='large'>Button Text</Button>)

    expect(container.querySelector('Button Text'));
    expect(container.firstElementChild?.classList.contains('large')).toBe(true)
    // expect(getByText('large')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid large "
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render fill prop = solid correctly', () => {
    const { container } = render(<Button fill='solid'>Button Text</Button>)

    expect(container.firstElementChild?.classList.contains('solid')).toBe(true)
    // expect(getByText('large')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid medium "
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render fill prop = outline correctly', () => {
    const { container } = render(<Button fill='outline'>Button Text</Button>)

    expect(container.firstElementChild?.classList.contains('outline')).toBe(true)
    // expect(getByText('large')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default outline medium "
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render fill prop = none correctly', () => {
    const { container } = render(<Button fill='clear'>Button Text</Button>)

    expect(container.firstElementChild?.classList.contains('none')).toBe(true)
    // expect(getByText('large')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default none medium "
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render disabled prop = true correctly', () => {
    const { container } = render(<Button disabled>Button Text</Button>)

    expect(container.firstElementChild?.getAttribute('disabled'))
    // expect(getByText('large')).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid medium "
          disabled=""
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render uppercase prop = true correctly', () => {
    const { container } = render(<Button uppercase='true'>Button Text</Button>)

    // expect(container.getAttribute('disabled')).toBe(true)
    // expect(getByText('large')).toBeInTheDocument();
    expect(container.firstElementChild?.classList.contains('text-uppercase')).toBe(true);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid medium text-uppercase"
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render minwidth prop = 400px correctly', () => {
    const { container } = render(<Button minWidth={400}>Button Text</Button>)

    expect(container.querySelector<HTMLElement>('button')!.style.minWidth === '400px').toBe(true);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid medium "
          style="min-width: 400px;"
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render maxwidth prop = 100px correctly', () => {
    const { container } = render(<Button maxWidth={100}>Button Text</Button>)

    expect(container.querySelector<HTMLElement>('button')!.style.maxWidth === '100px').toBe(true);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid medium "
          style="max-width: 100px;"
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render customBGColor prop = rgb(244, 244, 244) correctly', () => {
    const { container } = render(<Button customBGColor='rgb(244, 244, 244)'>Button Text</Button>)

    expect(container.querySelector<HTMLElement>('button')!.style.backgroundColor === 'rgb(244, 244, 244)').toBe(true);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid medium "
          style="background-color: rgb(244, 244, 244);"
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render customColor prop = rgb(144, 144, 144) correctly', () => {
    const { container } = render(<Button customColor='rgb(144, 144, 144)'>Button Text</Button>)

    expect(container.querySelector<HTMLElement>('button')!.style.color === 'rgb(144, 144, 144)').toBe(true);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid medium "
          style="color: rgb(144, 144, 144);"
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render customBorderColor prop = rgb(12, 12, 12) correctly', () => {
    const { container } = render(<Button customBorderColor='rgb(12, 12, 12)'>Button Text</Button>)

    expect(container.querySelector<HTMLElement>('button')!.style.borderColor === 'rgb(12, 12, 12)').toBe(true);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid medium "
          style="border-color: rgb(12, 12, 12);"
        >
          Button Text
        </button>
      </div>
    `)
  })
  it('should render buttonClick prop correctly', () => {

    const handleClick = vi.fn(); // Create a mock function

    render(<Button buttonClick={handleClick}>Click me</Button>);

    const buttonElement = screen.getByRole('button'); // Find the button

    fireEvent.click(buttonElement); // Simulate a click

    expect(handleClick).toHaveBeenCalled(); // Assert the handler was call
    const { container } = render(<Button buttonClick={handleClick}>Click Me</Button>)


    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="default solid medium "
        >
          Click Me
        </button>
      </div>
    `)
  })
})
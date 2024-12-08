import type { Meta, StoryObj } from '@storybook/react';

import { default as Button } from './button';
import '../../index.scss'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        children: {
            control: { type: 'text' },
            defaultValue: { summary: ' ' },
            description: "Button Text"
        },
        color: {
            options: ['primary', 'secondary', 'success', 'warning', 'error', 'disabled', undefined],
            control: { type: 'select' },
            defaultValue: { summary: 'default' },
            description: "Define Color: 'primary', 'secondary', 'success', 'warning', 'error', 'disabled', undefined"

        },
        fill: {
            options: ['solid', 'outline', 'clear', undefined],
            control: { type: 'select' },
            defaultValue: { summary: 'solid' },
            description: "Define Size: 'solid', 'outline', 'clear', undefined"
        },
        border: {
            options: ['true', undefined],
            control: { type: 'select' },
            defaultValue: { summary: 'false' },
            description: "Set Border: 'true', undefined"
        },
        size: {
            options: ['small', 'medium', 'large', undefined],
            control: { type: 'select' },
            defaultValue: { summary: 'medium' },
            description: "Define Size: 'small', 'medium', 'large', undefined"
        },
        uppercase: {
            options: ['true', undefined],
            control: { type: 'select' },
            defaultValue: { summary: undefined },
            description: "Set Border: 'true', undefined"
        },
        minWidth: {
            control: { type: 'number' },
            defaultValue: { summary: undefined },
            description: "Set Min Width: number"
        },
        maxWidth: {
            control: { type: 'number' },
            defaultValue: { summary: undefined },
            description: "Set Max Width: number"
        },
        minHeight: {
            control: { type: 'number' },
            defaultValue: { summary: undefined },
            description: "Set Min Height: number"
        },
        maxHeight: {
            control: { type: 'number' },
            defaultValue: { summary: undefined },
            description: "Set Max Height: number"
        },
        disabled: {
            control: { type: 'boolean' },
            defaultValue: { summary: undefined },
            description: "Set Disabled: 'true', undefined"
        },
        customBGColor: {
            control: { type: 'color' },
            defaultValue: { summary: undefined },
            description: "Set Custom Bakground Color: Hex, rgb(), rgba()"
        },
        customColor: {
            control: { type: 'color' },
            defaultValue: { summary: undefined },
            description: "Set Custom Text Color: Hex, rgb(), rgba()"
        },
        customBorderColor: {
            control: { type: 'color' },
            defaultValue: { summary: undefined },
            description: "Set Border Color: Hex, rgb(), rgba()"
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
        buttonClick: undefined,
        children: 'Button',
        size: undefined,
        fill: undefined,
        border: undefined,
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        minHeight: undefined,
        maxHeight: undefined,
        customBGColor: undefined,
        customColor: undefined,
        customBorderColor: undefined
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        children: 'Button'
    },
};
export const Primary: Story = {
    args: {
        children: 'Primary Color Button',
        color: 'primary'
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Color Button',
        color: 'secondary'
    },
};

export const Success: Story = {
    args: {
        children: 'Success Color Button',
        color: 'success'
    },
};
export const Warning: Story = {
    args: {
        children: 'Warning Color Button',
        color: 'warning'
    },
};
export const Error: Story = {
    args: {
        children: 'Error Color Button',
        color: 'error'
    },
};
export const DisabledColor: Story = {
    args: {
        children: 'Disabled Color Button',
        color: 'disabled'
    },
};

export const SolidFill: Story = {
    args: {
        children: 'Solid Fill Button',
        fill: 'solid'
    },
};
export const OutlineFill: Story = {
    args: {
        children: 'Outline Fill Button',
        fill: 'outline'
    },
};
export const NoFill: Story = {
    args: {
        children: 'No Fill Button',
        fill: 'clear'
    },
};
export const Border: Story = {
    args: {
        children: 'Border Button',
        border: 'true'
    },
};
export const Disabled: Story = {
    args: {
        children: 'Disabled Button',
        disabled: true
    },
};
export const Small: Story = {
    args: {
        children: 'Small Button',
        size: 'small'
    },
};
export const Medium: Story = {
    args: {
        children: 'Medium Button',
        size: 'medium'
    },
};
export const Large: Story = {
    args: {
        children: 'Large Button',
        size: 'large'
    },
};
export const Uppercase: Story = {
    args: {
        children: 'Uppercase Button',
        uppercase: 'true'
    },
};
export const MaxWidth: Story = {
    args: {
        children: 'Max Width 400px Button',
        maxWidth: 400
    },
};
export const MinWidth: Story = {
    args: {
        children: 'Min Width 400px Button',
        minWidth: 400
    },
};
export const MaxHeight: Story = {
    args: {
        children: 'Max Height 200px Button',
        maxHeight: 200
    },
};
export const MinHeight: Story = {
    args: {
        children: 'Min Height 200px Button',
        minHeight: 200
    },
};
export const customBGColor: Story = {
    args: {
        children: 'Custom Background Color Button',
        customBGColor: '#FFC0CB'
    },
};
export const customColor: Story = {
    args: {
        children: 'Custom Text Color Button',
        customColor: '#800000'
    },
};
export const customBorderColor: Story = {
    args: {
        children: 'Custom Border Color Button',
        customBorderColor: '#FF4d00',
        border: 'true'
    },
};



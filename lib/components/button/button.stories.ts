import type { Meta, StoryObj } from '@storybook/react';

import { default as Button } from './button';
// import '../../index.scss'

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
            defaultValue: { summary: ' ' }
        },
        color: {
            options: ['default', 'success', 'warning', 'error', 'disabled', undefined],
            control: { type: 'select' },
            defaultValue: { summary: 'default' }
        },
        fill: {
            options: ['solid', 'outline', 'clear', undefined],
            control: { type: 'select' },
            defaultValue: { summary: 'solid' }
        },
        size: {
            options: ['small', 'medium', 'large', undefined],
            control: { type: 'select' },
            defaultValue: { summary: 'medium' }
        },
        uppercase: {
            options: ['true', undefined],
            control: { type: 'select' },
            defaultValue: { summary: undefined }
        },
        minWidth: {
            control: { type: 'number' },
            defaultValue: { summary: undefined }
        },
        maxWidth: {
            control: { type: 'number' },
            defaultValue: { summary: undefined }
        },
        disabled: {
            control: { type: 'boolean' },
            defaultValue: { summary: undefined }
        },
        customBGColor: {
            control: { type: 'color' },
            defaultValue: { summary: undefined }
        },
        customColor: {
            control: { type: 'color' },
            defaultValue: { summary: undefined }
        },
        customBorderColor: {
            control: { type: 'color' },
            defaultValue: { summary: undefined }
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
        buttonClick: undefined,
        children: 'Button',
        size: undefined,
        fill: undefined,
        color: undefined,
        uppercase: undefined,
        disabled: false,
        minWidth: undefined,
        maxWidth: undefined,
        customBGColor: undefined,
        customColor: undefined,
        customBorderColor: undefined
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'Primary Button'
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        color: 'secondary'
    },
};

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

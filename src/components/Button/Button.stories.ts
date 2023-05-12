import type { Meta, StoryObj } from '@storybook/react';
import Button from "./Button";


const meta = {
    title: 'Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Button',
        type: 'secondary',
    },
};

export const Tertiary: Story = {
    args: {
        children: 'Button',
        type: 'tertiary',
    },
};

export const Large: Story = {
    args: {
        size: 'Large',
        children: 'Button',
    },
};

export const Medium: Story = {
    args: {
        size: 'Medium',
        children: 'Button',
    },
};

export const Small: Story = {
    args: {
        size: 'Small',
        children: 'Button',
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import ButtonIcon from "./ButtonIcon";


const meta = {
    title: 'ButtonIcon',
    component: ButtonIcon,
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        type: 'secondary',
    },
};

export const Tertiary: Story = {
    args: {
        type: 'tertiary',
    },
};

export const TertiaryERZL: Story = {
    args: {
        type: 'tertiaryERZL',
    },
};

export const Error: Story = {
    args: {
        type: 'error',
    },
};

export const MoreColorOff: Story = {
    args: {
        type: 'moreColorOff',
    },
};

export const MoreColorOn: Story = {
    args: {
        type: 'moreColorOn',
    },
};

export const settings: Story = {
    args: {
        type: 'settings',
    },
};

export const Large: Story = {
    args: {
        size: 'Large',
    },
};

export const Medium: Story = {
    args: {
        size: 'Medium',
    },
};

export const Small: Story = {
    args: {
        size: 'Small',
    },
};

import type { Meta, StoryObj } from '@storybook/react';
import ButtonLabel from "./ButtonLabel";

const meta = {
    title: 'ButtonLabel',
    component: ButtonLabel,
} satisfies Meta<typeof ButtonLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelPrevERZL: Story = {
    args: {
        type: 'labelPrevERZL',
    }
};

export const LabelAdd: Story = {
    args: {
        type: 'labelAdd',
    }
};

export const LabelTrash: Story = {
    args: {
        type: 'labelTrash',
    }
};

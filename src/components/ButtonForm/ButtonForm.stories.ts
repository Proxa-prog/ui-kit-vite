import type { Meta, StoryObj } from '@storybook/react';
import ButtonForm from "./ButtonForm";

const meta = {
    title: 'ButtonForm',
    component: ButtonForm,
} satisfies Meta<typeof ButtonForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

};

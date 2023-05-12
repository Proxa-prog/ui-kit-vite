import type { Meta, StoryObj } from '@storybook/react';

import Counter from './Counter';

const meta: Meta<typeof Counter> = {
    title: 'Counter',
    component: Counter,
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Primary: Story = {
    decorators: [
        (Story) => (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: 'none',
                    backgroundColor: 'inherit',
                    width: '48px',
                    height: '48px',
                }}>
                    <Story />
                </div>
            </div>
        ),
    ],
};
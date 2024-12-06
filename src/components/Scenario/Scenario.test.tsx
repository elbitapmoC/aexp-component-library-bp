import '@testing-library/jest-dom';
import { describe } from 'node:test';
import Scenario from './Scenario';

import { render } from 'react-dom';
import type { JSX } from 'react/jsx-runtime';
import { beforeAll, expect, test, vi } from 'vitest';

describe('Modal', () => {
  const mockClose = vi.fn();

  beforeAll(() => {
    mockClose.mockReset();
  });

  test('renders modal with expected controls', () => {
    render(<Scenario />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  describe('when passed onClose handler', () => {
    test('calls onClose action when pressing the ESC key', async () => {
      const { user } = renderWithUser(<Scenario onClose={mockClose} />);
      await user.keyboard('{Escape}');
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test('renders dismissible button that calls onClose action when clicked', async () => {
      const { user } = renderWithUser(<Scenario onClose={mockClose} />);
      const closeButton = screen.getByRole('button', { name: /close/i });
      await user.click(closeButton);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test('calls onClock action when clicking outside of the modal', async () => {
      const { user } = renderWithUser(<Scenario data-testid="mockId" onClose={mockClose} />);
      const scrimElement = screen.getByTestId('mockId');
      await user.click(scrimElement);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });
});
function renderWithUser(arg0: JSX.Element): { user: any } {
  throw new Error('Function not implemented.');
}

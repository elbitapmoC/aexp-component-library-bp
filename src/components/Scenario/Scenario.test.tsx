import '@testing-library/jest-dom';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Scenario from './Scenario';

describe('Scenario Component', () => {
  it('renders with the expected elements', () => {
    render(
      <Scenario title="Test Scenario" variant="light" size="medium" data-testid="dialog">
        <p>Scenario content</p>
      </Scenario>,
    );

    // Check if the open button is rendered
    expect(screen.getByRole('button', { name: /open scenario/i })).toBeInTheDocument();

    // Open the dialog
    fireEvent.click(screen.getByRole('button', { name: /open scenario/i }));

    const dialog = screen.getByTestId('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('open');
    expect(screen.getByText(/test scenario/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^close scenario$/i })).toBeInTheDocument();
  });

  it('closes when Escape key is pressed', async () => {
    render(
      <Scenario title="Test Scenario" variant="light" size="medium" data-testid="dialog">
        <p>Scenario content</p>
      </Scenario>,
    );

    // Open the dialog
    fireEvent.click(screen.getByRole('button', { name: /open scenario/i }));

    const dialog = screen.getByTestId('dialog');
    expect(dialog).toHaveAttribute('open');

    // Simulate Escape key press
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

    // Wait for the dialog to close
    await waitFor(
      () => {
        expect(dialog).not.toHaveAttribute('open');
      },
      { timeout: 1000 },
    );
  });

  it('closes when clicking outside the dialog', () => {
    render(
      <Scenario
        title="Test Scenario"
        variant="light"
        size="medium"
        disableBackdropClick={false}
        data-testid="dialog"
      >
        <p>Scenario content</p>
      </Scenario>,
    );

    // Open the dialog
    fireEvent.click(screen.getByRole('button', { name: /open scenario/i }));

    const dialog = screen.getByTestId('dialog');
    expect(dialog).toHaveAttribute('open');

    fireEvent.click(dialog);

    expect(dialog).not.toHaveAttribute('open');
  });

  it('does not close when clicking inside the dialog', () => {
    render(
      <Scenario title="Test Scenario" variant="light" size="medium" data-testid="dialog">
        <p data-testid="inside">Scenario content</p>
      </Scenario>,
    );

    // Open the dialog
    fireEvent.click(screen.getByRole('button', { name: /open scenario/i }));

    const dialog = screen.getByTestId('dialog');
    expect(dialog).toHaveAttribute('open');

    fireEvent.click(screen.getByTestId('inside'));

    expect(dialog).toHaveAttribute('open');
  });
});

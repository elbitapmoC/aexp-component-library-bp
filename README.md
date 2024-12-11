# 🚨 MAY DAY, MAY DAY❗️

##### Our reusable component library was *accidentally deleted.*  
##### The only thing we managed to recover? **Unit tests.**

Your **mission**, should you choose to accept it: **Rebuild the repository from scratch.**  
- Make it scalable.  
- Use modern tools.  
- Keep it simple.  
- Follow best practices.  
And yes, accessibility matters too.

---

## 🕵️‍♂️ The Briefing:  

### Rules of Engagement:  
- You have **2.5 hours**. No more, no less.  
- It’s better to partially complete both tasks than fully complete just one.  
- Document every decision: **Why you did something is just as important as what you did.**  
- Prioritize Developer Experience (**DX**)—linting, formatting, and consistency are key.

---

## 🎯 The Objective

`Task #1`: Build the **Foundation for a Component Library**

#### Core Tech Stack:
- **TypeScript**: Because type safety matters.  
- **React**: The component king.  
- **React Testing Library**: To keep the bugs at bay.  
- **Vitest**: For fast and reliable tests.  

`Task 2`: Build a `Modal` Component  
- **Goal**: Pass the provided unit tests (see below).  
- Make it reusable, flexible, and accessible.  
- Design it with future scalability in mind.  

```typescript
describe("Modal", () => {
  const mockClose = vi.fn();

  beforeEach(() => {
    mockClose.mockReset();
  });

  test("renders modal with expected controls", () => {
    render(<Modal />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  describe("when passed an onClose handler", () => {
    test("calls onClose when ESC is pressed", () => {
      render(<Modal onClose={mockClose} />);
      fireEvent.keyDown(screen.getByRole("dialog"), {
        key: "Escape",
        code: "Escape",
      });
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test("calls onClose when clicking outside the modal", async () => {
      const { user } = renderWithUser(<Modal onClose={mockClose} />);
      const scrim = screen.getByTestId("modal-scrim");
      await user.click(scrim);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });
});
```

---

## 🔧 Approach: The Game Plan  

### 1. Start Small, Scale Big  
Begin with a simple, reusable `Modal`. Make it:
- **Modular**: Each part (logic, styles, types) should be separate.  
- **Composable**: Smaller components that work together.  

### 2. Learn from the Best  
Look at libraries like Radix UI or Material UI for inspiration:  
- **Buttons:** To handle actions.  
- **Forms:** For inputs, dropdowns, and validation.  
- **Modals:** For alerts and popups.  
- **Icons & Tooltips:** Contextual hints and SVGs for visual consistency.  

### 3. Stick to Best Practices  
- **Keep Components Focused:** One job per component.  
- **Separate Concerns:**  
  - Logic in the component file.  
  - Styles in `styled.ts`.  
  - Types in `types.ts`.  
- **Use Props for Flexibility:** Allow consumers to customize without rewriting.

---

## 📂 Architecture: The Blueprint

Here’s how the files structured to support clean architecture and scalability:

```plaintext
src/
└── components/
  ├── Modal/
  │   ├── Modal.tsx # Component logic
  │   ├── Modal.stories.tsx # Storybook documentation
  │   ├── Modal.test.tsx # Unit tests 
  │   ├── styled.ts # Scoped styles 
  │   └── types.ts # Type definitions 
  └── styles/ 
  │   └── globals.css # Global styles (if needed) 
  └── utils/ 
      └── helpers.ts # Shared utility functions
```

---

## 📚 Learn More
1. [Design Principles](./docs/design-principles.md)
2. [Accessibility Guide](./docs/accessibility.md)
3. [Decision-Making Details](./docs/decision-making.md)
4. [Workflow for Adding Components](./docs/workflow.md)
5. [Future Roadmap](./docs/roadmap.md)

References and Learning Materials:
- [Wes Bos: HTML Close Buttons](https://wesbos.com/times-html-entity-close-button)
- [One Framework Examined By Princple Engineer](https://youtu.be/NtwffmEFTJw?si=LBd9Y8fcLpV2vOfm)
- [ARIA Dialog Modal](https://www.w3.org/WAI/ARIA/apg/#dialog_modal)
- [Dialog-RADIX](https://www.radix-ui.com/primitives/docs/components/dialog#api-reference)
- [Dialog-ShadCDN](https://ui.shadcn.com/docs/components/dialog)
- [ComponentProps](https://react.dev/reference/react/ComponentProps)
- [Building Reusable Components-- Patterns & Best Practices](https://medium.com/cstech/building-reusable-ui-components-with-react-best-practices-and-patterns-24b6fe921347)
- [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/)

---

### Summary
#####  What Was Delivered:

- **MVP**: The most important things to start this component library, not extra features or components for no reason.
  - A reusable and testable Modal (Modal) component.
  - Well-documented Storybook examples.
  - A scalable repository foundation.
  - Start the foundation to a component library
  - Start creating tests for each component.
  - Build out naming convention, weigh options (BEM, Atomic, Utility-first etc.)
  - Implement accessibility features.
- Tools such as Biome, Storybook, and Rollup were integrated based on best practices for scalability, developer experience, and maintainability (see 'Decision-Making' for details).

---

## This README will self-destruct 💣 in 5 seconds!
### . 
### . 
### ..eh.. maybe not. Either way, happy coding!

# MAY DAY, MAY DAY❗️
##### Our reusable component library was accidentally deleted.
##### Unit tests was the only thing that could be recovered.
##### Mission...IF you choose to accept: Rebuild the repository from scratch.
  Utilize:
    - Best practices
    - Modern tools
    - Scalable architecture
    + more

#### Debriefing:
- 2.5 hours.. that's all you got!
- Everything is important.
- It's better to partially complete both tasks, than fully completing one.
- Document your code and comment your intentions.
  - Write up why you made each decision.
- Performance on the task within the given time, will be taken into consideration in the assessment.
- Consider DX, handling linting, formatting improvements.

##### Task #1: `Build a repository that we could use as a foundation for a component library.`

Core Tech:
- Typescript
- React
- React Testing Library
- Vitest

Approach:
  1. Research **Reusable Component Library**:
      - A curated set of modular, testable, and composable React components designed to boost development speed and ensure a consistent user interface across multiple projects. This guide provides a structured approach for building, maintaining, and scaling a component library.
  2. Start with a simple, reusable component.
  3. Look at existing component libraries, utility componants & finding similarities
      - **Buttons**: Handles user interactions like submission, navigation, or toggling.
      - **Forms**: Includes input fields, dropdowns, checkboxes, radio buttons, and validation.
      - **Modals**: Flexible overlays for popups, alerts, and forms.
      - **Cards**: Group content like titles, images, and actions.
      - **Tables**: Displays data with sorting, filtering, and pagination.
      - **Icons**: SVG-based icons for consistent visual representation.
      - **Tooltips**: Provides contextual information.
      - **Spinners**: Indicates loading states.
  - Best practices:
    - **Keep Components Small and Focused**
    - **Single Responsibility Principle (SRP)**: Easier to reuse, debug, and test.
    - **Embrace Component Composition**: Smaller components can be combined to create more complex components.
      - **Example**: A `Card` component can include:
        - `CardHeader`
        - `CardBody`
        - `CardFooter`
    - **Flexibility Through Props**: Allows custom behavior and styling via well-defined props.
    - Avoid hardcoding styles; instead, use class names or utility-first CSS (e.g., TailwindCSS).
    - Use **`React.ComponentProps`** to inherit standard attributes.
- Document:
  - Create usage examples, prop tables, and guidelines for each component.
  - Use tools like **Storybook** to visualize and interact with components.

##### Task Two - Component Build

Using the following unit test as a foundation, recreate a reusable component that would result in all of these tests passing.

Whilst the unit test was originally written with a specific testing library, if you need to refactor the functions to reflect a different package that is fine.

Consider the flexibility of this component, how you might break this down for different use cases, what configuration the end-consumer might need / want.

```typescript
describe("Modal", () => {
  const mockClose = vi.fn();

  beforeAll(() => {
    mockClose.mockReset();
  });

  test("renders modal with expected controls", () => {
    render(<Scenario />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  describe("when passed onClose handler", () => {
    test("calls onClose action when pressing the ESC key", () => {
      render(<Scenario onClose={mockClose} />);
      fireEvent.keyDown(screen.getByRole("dialog"), {
        key: "Escape",
        code: "Escape",
      });
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test("renders dismissible button that calls onClose action when clicked", async () => {
      const { user } = renderWithUser(<Scenario onClose={mockClose} />);
      const closeButton = screen.getByRole("button", { name: /close/i });
      await user.click(closeButton);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test("calls onClock action when clicking outside of the modal", async () => {
      const { user } = renderWithUser(
        <Scenario data-testid="mockId" onClose={mockClose} />
      );
      const scrimElement = screen.getByTestId("mockId");
      await user.click(scrimElement);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });
});
```

##### **Testing Strategies**: Helps us ensure reliability:
  - **Unit Tests**: Test component logic and props.
  - **Integration Tests**: Validate component interactions.
  - `npm run test`/`npx vitest` to run all tests.

---
---
---

# Building A Component Library React
### React + Vite + Storybook + Typescript

<hr>

_(Oh great! You've made it this far. I see you love documentation too. Proceed.)_


## Learn More

To learn more about Building Reusable, Flexible, Scalable + more components, take a look at the following resources:
_(instrumental in shaping this library)_


- [Wes Bos: HTML Close Buttons](https://wesbos.com/times-html-entity-close-button)
- [BEM Methodology](https://getbem.com/introduction/)
- [One Framework Examined By Princple Engineer](https://youtu.be/NtwffmEFTJw?si=LBd9Y8fcLpV2vOfm)
- [ARIA Dialog Modal](https://www.w3.org/WAI/ARIA/apg/#dialog_modal)
- [Dialog-RADIX](https://www.radix-ui.com/primitives/docs/components/dialog#api-reference)
- [Dialog-ShadCDN](https://ui.shadcn.com/docs/components/dialog)
- [ComponentProps](https://react.dev/reference/react/ComponentProps)
- [Building Reusable Components-- Patterns & Best Practices](https://medium.com/cstech/building-reusable-ui-components-with-react-best-practices-and-patterns-24b6fe921347)
- [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/)


---


### Decision Making:

### 1. **Biome**

**Why Biome Instead of ESLint and Prettier?**
- Combines linting, formatting, and organization into a single tool.
- Simplifies the configuration process, reducing cognitive overhead for developers.
- Faster performance compared to the combination of ESLint and Prettier.
- Automatically enforces consistent coding standards without additional plugins.

**Addressing Challenges**:
- Eliminates the need for managing multiple configurations for linting and formatting.
- Improves team-wide code consistency without the friction of integrating multiple tools.

### 2. **Storybook**

**Why Storybook?**
- Provides an isolated environment to develop and test components visually.
- Acts as living documentation, enabling new team members to quickly understand how to use components.
- Enhances collaboration between developers and designers._(It helps that Amex uses it for their design system.)_
- Supports accessibility and responsive design testing.

**Key Benefits**:
- Encourages atomic design principles by showcasing components individually.
- Reduces integration errors by verifying component behavior in isolation.


### 3. **CSS Modules + BEM**

**Why CSS Modules?**
- Scopes styles to individual components, avoiding global namespace conflicts.
- Generates unique class names at build time, ensuring scalability.

**Why BEM?**
- Provides a clear and structured naming convention.
- Facilitates maintainability by separating blocks, elements, and modifiers.

**Challenges Addressed**:
- Avoids runtime overhead associated with CSS-in-JS solutions like `styled-components`.
- Enables better debugging with tools like browser dev tools.

### 4. **Time-Constrained Scenarios**

When deadlines are tight, consider the following:
- **Prebuilt Libraries**: Tools like TailwindCSS or ShadCDN can provide a quick way to create consistent UIs.
- **Transition Plan**: Begin with prebuilt libraries and replace them incrementally with custom-built components once requirements stabilize.
- The plan initially was to use a prebuilt library, but I read, `Build a repository that we could use as a foundation for a component library.`, so I went with the latter.

### 4. **Rollup JS-- Setup and build component libary**

- **The JavaScript module bundler**: Compile small pieces of code into something larger and more complex
- **Tree-shaking**: Removes unused code, reducing bundle size.
- **Code-splitting w/o overhead**: Rollup splits code into chunks automatically, like dynamic loading or multiple entry points, and there is a way to explicitly tell Rollup which modules to split into separate chunk
- **Handles special needs**: With many configuration options and a rich interface to make the ideal bundler for your project.
- Unopionated, flexible, and extensible.
- The sauce behind Vite 🌭

---

### **Component Design Principles**

#### **Scalability**
- **BEM** ensures predictable and scalable naming conventions.
- **CSS Modules** scope styles, preventing style leakage across components.

#### **Flexibility**
- Components use `React.ComponentProps` to inherit native HTML attributes (e.g., `id`, `aria-*`, `className`).
- Props provide clear APIs for customization, ensuring reusability across projects.

#### **Accessibility (a11y)**

- Components designed with ARIA roles and attributes for inclusivity.
- Focus trapping and keyboard navigation are implemented in interactive components like modals.


---


### Steps I Took
1. Read Project Requirements:
Fully understood goals and constraints.

2. Started with Task 2:
Building the Scenario (Modal) component was foundational.

3. Setup the Project:

4. Chose Vite over Next.js for its lightweight setup.
5. Selected tools:
- React
- Vitest
- React Testing Library
- TypeScript
- Storybook
- Built the Scenario Component:
  - Utilized HTML <dialog> for simplicity and semantics.
  - Designed props (`variant`, `size`, `disableBackdropClick`) for flexibility.
- Documented with Storybook:
  - Added stories for prop variations (e.g., light/dark mode, size).
  - Focused on clear usage examples.
  - Enhanced DX with Biome:
    - Simplified linting and formatting with **Biome** instead of ESLint + Prettier.
- Validated with Tests

---

### Summary
#####  What I Delivered:

- A reusable and testable Modal (Scenario) component.
- Well-documented Storybook examples.
- A scalable repository foundation.
- Start the foundation to a component library
- Start creating tests for each component.
- Build out naming convention, weigh options (BEM, Atomic, Utility-first etc.)
- Implement accessibility features.
- Utilize Biome for linting and formatting, replacing ESLint + Prettier.

---

### Future Improvements

- Build out component library
- Build out tests for each component.
- Build out naming convention, weigh options (BEM, Atomic, Utility-first etc.)
- Build out documentation via storybook (including examples)
- Build out more best practices:
  - PR's
  - Code reviews
  - Code organization
  - Useful plugins
- Update library with a Design System
  - Layouts
  - Typography
  - Colors
  - Spacing
  - Shadows
  - Borders
  - etc.
- Extend the component library with more patterns.
- Implement more accessibility (focus trapping, keyboard navigation).
- Enhance Storybook documentation with complex scenarios.
- Add a design system for typography, colors, spacing, and shadows.
- **Utilize CircleCI for continuous integration and deployment.**

As the library evolves, consider revisiting some decisions based on the project's scale, team size, and performance requirements.

---

### Ready to Dive In?
1. Clone the repository.
2. Install dependencies (`npm install`).
3. Run the app (`npm run dev`) and Storybook (`npm run storybook`).
4. Start building reusable components today!

###### After 2.5hrs...
- Upgraded from CSS modules to Styled Components
- Consolodated all my notes into this README.md
- [Deploy Design System with Vercel](https://aexp-component-library-bp.vercel.app/?path=/story/components-scenario--default)


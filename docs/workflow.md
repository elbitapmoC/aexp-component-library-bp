## The Workflow 🛠️

1. **Create a Folder**  
    - Organize the new component in its own directory under `src/components/`. 

2. **Write the Component Logic**  
    - Start with a functional component in the `.tsx` file.  
    - Use TypeScript for strong typing and clear prop definitions.  
    - Follow the Single Responsibility Principle (one job per component).  

3. **Style the Component**  
    - Use `styled.ts` for scoped styles or a preferred CSS-in-JS solution.

4. **Write Unit Tests**  
    - Use `Vitest` and `React Testing Library` to validate behavior and props.  
    - Cover edge cases, like missing or incorrect props.  

5. **Document in Storybook**  
    - Create a `.stories.tsx` file with interactive examples:  
      - Showcase different prop values (e.g., `size="small"`, `variant="dark"`).  
      - Document all props with descriptions and usage examples.  

6. **Run Tests and Linting**  
    - Ensure your tests pass using:  
  `npx vitest`

[Back to Documentation Index](./README.md)
[Return to Main README](../README.md)
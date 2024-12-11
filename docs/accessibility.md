## 📝 Accessibility Checklist

Ensuring accessibility isn’t optional—it's a priority. Use this checklist to make sure all components are inclusive and usable by everyone:

**TLDR:**
- [x] ARIA roles included.
- [x] Supports keyboard-only navigation.
- [x] Passes color contrast checks.
- [x] Focus trapping implemented.

**Detailed Checklist:**
1. **ARIA Roles & Attributes:**  
   - Assign appropriate roles (e.g., `role="dialog"` for modals).  
   - Use attributes like `aria-labelledby` and `aria-describedby` for context.

2. **Keyboard Navigation:**  
   - Ensure users can navigate the component using only a keyboard.  
   - Include `Tab`, `Enter`, and `Escape` key support for interactive components.

3. **Focus Management:**  
   - Trap focus within modals and return it to the trigger element when closed.  
   - Use `tabindex` to control the tab order.

4. **Color Contrast:**  
   - Verify text and UI elements meet WCAG 2.1 color contrast guidelines.  
   - Use tools like [Contrast Checker](https://webaim.org/resources/contrastchecker/).

5. **Screen Reader Support:**  
   - Test with screen readers to ensure meaningful announcements are made.  
   - Avoid visual elements that aren’t accessible via text descriptions.

6. **Accessible Labels:**  
   - Use `aria-label` or `aria-labelledby` to describe buttons and inputs.  
   - Avoid placeholder-only inputs—use `<label>` elements instead.

[Back to Documentation Index](./README.md)
[Return to Main README](../README.md)
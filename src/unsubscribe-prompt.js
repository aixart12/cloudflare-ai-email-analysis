export const unsubscribePrompt = (email) => `
Input: ${email}
Task: Analyze the email to detect the presence of unsubscribe mechanisms. These can appear as links or text phrases in the content such as "unsubscribe", "opt-out", or similar terms, or as a List-Unsubscribe header.
Output Specification:
If an unsubscribe link or method is detected in the email content or headers, output: Unsubscribe link found in content: yes
If no unsubscribe mechanism is detected, output: Unsubscribe link found in content: no. Suggestion: Add an unsubscribe link to ensure compliance with email marketing standards.

`
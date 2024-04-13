import { triggerWords } from "./trigger-words";

export const triggerPrompt = (email) =>  `When an email contains one or more spam trigger words, it is more likely to be filtered out by spam filters, decreasing its chances of reaching the recipient's inbox. Your task is to review the given the email content and identify any words  that are listed on the link https://blog.hubspot.com/blog/tabid/6307/bid/30684/the-ultimate-list-of-email-spam-trigger-words.aspx. Once identified, list these trigger words and suggest alternatives to rephrase the sentences containing them without altering the original context.
Instructions:
Identify Spam Trigger Words:
Analyze the email text.
Check for any words or phrases that match those on the provided spam trigger word list.
List all identified trigger words from the email.
Suggest Rephrasings:
For each identified trigger word, provide an alternative way to express the same idea without using the trigger word.
Ensure the rephrased sentence maintains the original meaning and tone of the email.
Example:
Original Sentence: "Act now to ensure you don't miss out on this one-time offer!"
Trigger Words Identified: "Act now," "miss out," "one-time offer"
Rephrased Sentence: "We encourage you to take advantage of this exclusive opportunity soon!"

Submission:
Submit your list of trigger words along with the original sentences and their rephrased versions. Ensure clarity and effectiveness in communication are maintained in your rephrased sentences.

Email = ${email}

`

export const triggerPrompttwo = (email) => `
Review the following email content and identify any spam trigger words as defined by a known list (link to the list). Once identified, suggest rephrasings for the sentences containing these words to avoid spam filters without changing the original meaning.

Identify Spam Trigger Words:
- Analyze the email text.
- Check for matching words from the provided list.
- List all identified trigger words.

Suggest Rephrasings:
- Rephrase sentences to maintain original intent but avoid spam triggers.

Ouput :
 - give only requied output , no extra thing is requied
 - give output in html  which should be easy to render in the browser

Email Content:
${email}
`;

// This version of the function simplifies the instructions, making it easier for the model to understand and execute the task.

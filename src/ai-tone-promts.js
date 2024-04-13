export const aiTonePrompt = (email) => `
Objective: Evaluate the tone of the provided email content to determine whether it is conversational or formal. The analysis should focus on the naturalness and human-like quality of the language used.

Input: ${email}

Process:

    Language Style Detection: Assess the language style used in the email. Look for indicators such as:
        Use of casual or colloquial language versus formal or technical vocabulary.
        Sentence structure, including the presence of complex constructions typical of formal writing or simpler, more direct sentences found in conversational tone.
        The use of personal pronouns and direct addresses to the reader, which are more common in conversational tones.

    Engagement Level Analysis: Evaluate how engaging the language is. Conversational tones often involve:
        Questions that engage the reader.
        Expressions that convey personality or emotion.
        Informal greetings or sign-offs.

    Formality Level: Check for elements that typically denote formality, such as:
        Formal salutations and closures.
        Lack of contractions.
        Passive voice usage.

Output:

    Tone Classification: Classify the tone of the email as either 'Conversational' or 'Formal'.
    Feedback: If the tone is conversational, confirm that it meets the desired criteria for natural-sounding, human-like interaction. If the tone is formal, provide specific observations supporting this classification.
`
export const spamProbabiltyPrompt = (email) => `
Objective: "Rate the spam-proof quality of the following message on a scale from 0 to 100:"

Input = ${email}

Output : 
    - Return the output just the number betwenn 0 - 100. Don't add anything extra. 

Example : 
Input = Hey Dhruv, Sonu here from TopHire.

Tried calling you but couldn't get through. Thanks for signing up with us! you've already taken the first step to start interviewing with some of the best tech & product companies out there....BUT there's a few things missing on your profile.

Here are some pointers on which details are missing and why you should definitely add them -

1) Tech skills - Your tech skills paint a solid picture of what languages/applications you're strong at. Having a solid tech stack on your profile will always attract more companies compared to having a blank detail.

2) Notice period - Your notice period is an important indicator that allows interested companies to understand how long it would take for them to get you onboard. Knowing this before starting with interview rounds allows them to set expectations correctly.

3) Salary - Salary details are important to understand where your current expectations are and help us match your profile with only those companies who will be able to afford you.

Our next batch of candidates goes live on 16 April, 2024 and we only select limited candidates for each batch since we want to make sure our companies reach out to most of them! So do fill up these details soon.

P.s. Don't want to sign up on TopHire to fill these details? Just send them to me and I'll add them for you.

Link to login - https://tophire.co/login

Thanks, and all the best!
- Sonu Gurung

Ouput : 
 75
`
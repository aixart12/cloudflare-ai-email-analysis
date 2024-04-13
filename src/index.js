import { Ai } from "@cloudflare/ai";
import { Hono } from "hono";

import emailTemplate from "./email-template.html"
import { triggerPrompt, triggerPrompttwo } from "./trigger-promt";
import { aiTonePrompt } from "./ai-tone-promts";
import { unsubscribePrompt } from "./unsubscribe-prompt";
import { spamProbabiltyPrompt } from "./spam-probability";

const app = new Hono();

app.get("/", (c) => c.html(emailTemplate));
// app.get("/b", (c) => c.html(template));

app.get("/stream", async (c) => {
  const ai = new Ai(c.env.AI);

  const query = c.req.query("query");
  const question = query || "What is the square root of 9?";

  const systemPrompt = `You are a helpful assistant.`;
  const stream = await ai.run(
    "@cf/meta/llama-2-7b-chat-int8",
    {
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question },
      ],
      stream: true,
    },
  );

  return new Response(stream, {
    headers: {
      "content-type": "text/event-stream",
    },
  });
});

app.post("/", async (c) => {

  const ai = new Ai(c.env.AI);
  
  const body = await c.req.json();
  console.log('reaching the api ' , body)
  const question = body.query || "What is the square root of 9?";

  const systemPrompt = `You are a expert in email marketing have 20 years of experience`;

  console.log('length',triggerPrompt(question))

  const { response: answer , ...rest} = await ai.run(
    "@cf/meta/llama-2-7b-chat-int8",
    {
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: triggerPrompttwo(question) },
      ],
    },
  );
  console.log('rest' , rest)
  

  return c.text(answer);
});
app.post("/tone", async (c) => {

  const ai = new Ai(c.env.AI);
  
  const body = await c.req.json();
  console.log('reaching the api ' , body)
  const question = body.query || "What is the square root of 9?";

  const systemPrompt = `You are a expert in email marketing have 20 years of experience`;

  console.log('length',triggerPrompt(question))

  const { response: answer , ...rest} = await ai.run(
    "@cf/meta/llama-2-7b-chat-int8",
    {
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: aiTonePrompt(question) },
      ],
    },
  );
  console.log('rest' , rest)
  

  return c.text(answer);
});

app.post("/unsubscribe", async (c) => {

  const ai = new Ai(c.env.AI);
  
  const body = await c.req.json();
  console.log('reaching the api ' , body)
  const question = body.query || "What is the square root of 9?";

  const systemPrompt = `You are a expert in email marketing have 20 years of experience`;

  console.log('length',triggerPrompt(question))

  const { response: answer , ...rest} = await ai.run(
    "@cf/meta/llama-2-7b-chat-int8",
    {
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: unsubscribePrompt(question) },
      ],
    },
  );
  console.log('rest' , rest)
  

  return c.text(answer);
});
app.post("/spam-changes", async (c) => {

  const ai = new Ai(c.env.AI);
  
  const body = await c.req.json();
  console.log('reaching the api ' , body)
  const question = body.query || "What is the square root of 9?";

  const systemPrompt = `You are a expert in email marketing have 20 years of experience`;

  console.log('length',triggerPrompt(question))

  const { response: answer , ...rest} = await ai.run(
    "@cf/meta/llama-2-7b-chat-int8",
    {
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: spamProbabiltyPrompt(question) },
      ],
    },
  );
  console.log('rest' , rest)
  

  return c.text(answer);
});

app.onError((err, c) => {
  return c.text(err);
});

export default app;
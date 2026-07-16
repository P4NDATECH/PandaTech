require("dotenv").config();
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function iniciarJarvis() {
  const respuesta = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content: "Eres JARVIS, el asistente de PandaTech.",
      },
      {
        role: "user",
        content: "Hola JARVIS, inicia el sistema.",
      },
    ],
  });

  console.log(respuesta.choices[0].message.content);
}

iniciarJarvis();
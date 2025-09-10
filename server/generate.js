import openai from "./api.js";
import openaiClient from "./api.js";

const generate = async (queryDescription) => {
  const response = await openaiClient.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "user",
        content: `Convert the following natural language description into a SQL query: \n\n${queryDescription}.`,
      },
    ],
  });

  return response;
};

export default generate;

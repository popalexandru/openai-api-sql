import OpenAI from "openai";
import "dotenv/config";

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.error("OPENAI_API_KEY is not set: ", openaiApiKey);
  process.exit(1);
}
const openai = new OpenAI({
  apiKey: openaiApiKey,
});

export default openai;

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt:
    "I am studying for an AQA Alevel Biology Exam. To help me revise could you create me some information about Biological Molecules which follows the specification. Then could you create some questions for me to answer.",
  temperature: 0.7,
  max_tokens: 1351,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

// output the response to a markdown file
fs.writeFileSync("output.md", response.data.choices[0].text);

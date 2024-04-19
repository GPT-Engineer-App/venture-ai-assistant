# venture-ai-assistant

WRITE AND IMPLEMENTING CODE BASE BASED ON THE FOLLOWING DESCRIPTION AND FEATURES:
Description:
You are working in a startup whose product is growing quite fast recently. Based on the success, the CEO decided to start fundraising from Venture Capital firms. But to do that, he asked you to first create a database of VCs that he can then reach out to.  Your task is to build a Generative AI assistant for the CEO, which will be able to assess VC similarity and perform information extraction.

Given VC website URL as an input by the user, your Generative AI assistant should be able to:
Scrape Home page of the website and store the content in vectorDB of your choice,
Extract the following information and show it to the user as a JSON object: VC name, contacts, industries that they invest in, investment rounds that they participate/lead.
Compare VC website content to the other VC website contents in the database (some examples provided below) and print the 3 most similar VCs.

Technical Requirements:
Build the Generative AI assistant (e.g. using OpenAI APIs),
Build an API (using FastAPI/Flask) that can be used as an interface for the AI Assistant,
Either host the vectorDB, and the assistant app on cloud or containerize using Docker,
Submit GitHub URL with your codebase. If the app is deployed in the cloud, submit the app URL as well.

Evaluation criteria:
Completeness of your work,
Quality of the assistant both for information extraction as well as similarity,
Quality of code,
Architectural and Software Choices.

Example VC websites that you can populate the database initially to compute the similarity:
www.accel.com
www.a16z.com
www.greylock.com
www.benchmark.com
www.sequoiacap.com
www.indexventures.com
www.kpcb.com
www.lsvp.com
www.matrixpartners.com
www.500.co
www.sparkcapital.com
www.insightpartners.com





## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/venture-ai-assistant.git
cd venture-ai-assistant
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

S.PRIYADARSHINI PORTFOLIO + AURA AI

FILES
- index.html: portfolio content and Aura AI chat interface
- style.css: portfolio and chatbot styling
- script.js: navigation and chatbot browser logic
- netlify/functions/chat.js: secure Gemini API serverless function
- netlify.toml: Netlify function configuration

RUN LOCALLY
1. Install Node.js.
2. Open this folder in VS Code.
3. In the terminal, run: npm install -g netlify-cli
4. Run: netlify dev
5. Open the local URL shown by Netlify CLI.

ENABLE AURA AI
1. Create a Gemini API key in Google AI Studio.
2. In Netlify, open Site configuration / Environment variables.
3. Add GEMINI_API_KEY with your API key as its value.
4. Redeploy the site.
5. Test Aura AI after deployment.

SECURITY
Do not paste the API key into index.html or script.js. It must remain in the GEMINI_API_KEY server environment variable.

IMPORTANT ASSETS
Your uploaded files did not include the images/ and certificates/ folders referenced by the original HTML. Copy your existing images/ and certificates/ folders into this project folder before publishing, so your profile photo and six certificate previews display correctly.

CONTACT
The email address in index.html is still a sample placeholder. Replace priyadarshini@example.com with your real email before publishing.

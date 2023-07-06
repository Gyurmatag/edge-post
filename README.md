## Edge post


The project was created for this article to demonstrate edge functions and edge databases in practice

To run this app please make a .env file in the root folder with the following content:

```
DATABASE_URL=<insert your Turso Database URL here (refer to the article)>

DATABASE_AUTH_TOKEN=<insert your Turso database auth token here (refer to the article)>

NEXT_PUBLIC_APP_URL=<your web app URL (for example your local environment: http://localhost:3000)>
```

Do an install:
```bash
npm install
```

Then run the development server:
```bash
npm run dev
```

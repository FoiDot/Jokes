## About the project

Created with [create react app](https://create-react-app.dev/docs/adding-typescript/).

## Before start

1. On the project main root, run:

```
cp .env.example .env
```

In order to create a **.env** file with the **.env.example** content.

2. Install dependencies:

```
npm install
```

3. Start the project:

```
npm start
```

4. Use the following Account credentials to Login:

```
email: admin@example.com
password: admin123
```

## Considerations

1. **@mui/icons-material** package depends on **@mui/material**. This last library components were not used in the project, just the Icons.

2. For Joke listing, when the views are between _51_ and _75_, we use the **Yellow** color for the text. But this color does not have a good contrast with Light mode, so the **List** has a background color.

3. Jokes API doesn't have Login endpoint, so the Login call is simulated manually. On the other hand, I would use **jsonwebtoken** in React, but I found out this library is not supported outside NodeJs.

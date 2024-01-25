# Forum Website - Frontend

Welcome! This is a frontend instance of a planned web forum website, which I am working on currently.

It runs on React, leveraging the Material UI library.

## How To Setup

1. You should first set-up the backend through which this frontend will connect to. You can find the repo containing the backend snapshot [here](https://github.com/josh1248/cvwo-assignment-24-backend).
2. Ensure that the backend server is running.
3. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) this repo.
4. [Clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) **your** forked repo.
5. Open your terminal and navigate to the directory containing your cloned project.
6. Install dependencies for the project by entering this command:

```bash
yarn install
```

7. Run the app in development mode by entering this command:

```bash
yarn start
```

8. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
9. You should be able to see a `Hello, World!` greeting, with 4 links to different parts of this website.

## Features / Dev Log

### 25 Jan 24
Initial: react-router-dom for routing, axios for communication with backend. Contains a registration and a login page, with a database view of users and posts in the backend.

## Note
This is a continuation of my work for the CVWO 2024 assignment. You can find the incomplete snapshot on 25 Jan 2024 here: https://github.com/josh1248/forum-website-frontend
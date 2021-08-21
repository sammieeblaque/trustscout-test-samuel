# TrustScout Task

This task has 2 parts:

### Frontend:

Create a simple app that uses [Firebase Auth](https://firebase.google.com/docs/auth/web/start) (email/password) and [Firebase Realtime Database](https://firebase.google.com/docs/database/web/start) to allow users to:

1. sign up
2. log in
3. log out

While logged in, the user should see:

1. a personal greeting with their name
2. a counter. The counter should start with a value of 0 at the first login. There must be buttons to increment or decrement the count, and the value of the counter must persist between user sessions.

### Backend:

Use [Firebase Functions](https://firebase.google.com/docs/functions/get-started) to create a trigger function which sends an email to the user when their counter value reaches multiples of 10 (10, 20, 30, ...) Use [Mailjet](https://www.npmjs.com/package/node-mailjet) to send the email.

Access information / API keys for Firebase and Mailjet will be provided separately.

## What we're looking for

In addition to the basic specs outlined above, we're looking for the following:

- Passing front end tests using Jest (the amount of testing is your judgement call)
- Passing tests of the Firebase Functions using Jest (the amount of testing is your judgement call)
- appropriate Firebase database rules with passing tests of the rules (the amount of testing is your judgement call)
- The Firebase Functions tests execute during the GitLab CI "test" stage, only when commits are made to the master branch
- Appropriate documentation throughout, and updates to this README as appropriate
- Good commit messages. Follow your favorite convention and add information about what you're using to this README

## How to complete the task

When you're finished, deploy the project and share the deployment URL with us.

## Warning

- It is possible to do this task using the Firebase and Mailjet free tiers, which are both generous. However, a credit card was required in order to provide access to both. If any costs are incurred, you will not be paid for this task, and you will not be hired.

# About this starter code:

This TypeScript project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), with a few additions:

1. Firebase Functions has already been added (in Typescript) _Modify the setup as you see fit._
2. An initial test script for Firebase Functions has been added which will execute jest tests on the [firebase emulators](https://firebase.google.com/docs/emulator-suite). This was provided as a reference to make your life easier, but it is not required that your tests execute on the emulators, and this should be changed if you have a better way. _Modify it as you see fit._
3. An initial gitlab CI file has been provided which will run the tests and build/deploy documentation on commit. This was provided as a reference and starting place to make your life easier. _Modify it as you see fit._

# Setup

This section provides guidance to give you a starting place and direction, but is left vague because making decisions about setup is part of the task.

You will need to install the [Firebase CLI](https://firebase.google.com/docs/cli) for this project if you don't have it already.

1. Use the `firebase init` command to connect this repo to the Firebase project that's been shared with you for the task
2. Use the [Firebase Functions Environment Configuration](https://firebase.google.com/docs/functions/config-env) for the Mailjet variables

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run docs`

Uses typedoc to build the docs in the `docs` folder.\
See the [typedoc website](https://typedoc.org/) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

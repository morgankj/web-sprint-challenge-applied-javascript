# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In your challenge this week, you will demonstrate your mastery of these skills by creating **an online Lambda newspaper**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [X] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [X] Open the assignment in Canvas and click on the "Set up git" option.
- [X] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [X] Check to see that Codegrade has accepted your git submission.

## Project Instructions

### Introduction

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page.

In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the image linked below:

[Lambda Times](https://tk-assets.lambdaschool.com/cac4803c-6e8f-4846-be0e-b20d82a34a73_lambda-times.png)

### Instructions

- [X] Navigate to the root of the project with your command line.
- [X] Run `npm install` to download the dependencies listed in the `package.json` file.
- [X] Run `npm start` to compile the project and serve it.
- [X] Navigate Chrome to `http://localhost:3000`
- [X] In a separate terminal, run `npm test` to run tests.

**Steps Required for MVP:**

- [X] Steps 1 and 2 are explained inside the `src/components/header.js` file.
- [X] Steps 3 and 4 are explained inside the `src/components/tabs.js` file.
- [X] Steps 5 and 6 are explained inside the `src/components/card.js` file.

**Important Notes:**

- Please **do not move or rename existing files** or folders.
- If your development server stops "auto reloading", manually kill it with `CTRL+C` and restart it.
- Do not change the `package.json` file except to install libraries with NPM (Axios is _already_ in the `package.json`).
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Submission format

- [X] Submit via Codegrade by committing and pushing any new changes to the *main* branch.
- [X] Check Codegrade for automated feedback.
- [X] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [X] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is the DOM?
    The DOM (or Document Object Model) is a representation of the objects on a webpage (it is our API). The DOM is language neutral, and dynamic. It branches out in a tree-like flow to represent your content and its structure.
2. What is an event?
    Every user interaction with a web page is an event. When an event happens, it is known as a trigger. 
3. What is an event listener?
    The event tracking process, and the subsequent action taken is the "event listener." An Event Listener is a procedure or function that waits for an event to occur, then does something in response.
4. Why would we convert a NodeList into an Array?
    To use array methods that are not available to nodelists! Both have their own prototypes, methods, and properties. NodeLists are collections of DOM nodes, and arrays are special javascript data that store info.
5. What is a component?
    A component is a singular, modular piece of code that usually uses HTML, JS, and CSS to create custom web elements. It is reusable, D.R.Y., and can stand alone.


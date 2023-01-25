## Table of contents
​
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Demo Video](#Video)
  - [Install](#Install)
  - [Run the App](#Run-the-Application)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge
​
Users should be able to:
​
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
​
### Screenshot
​
![Screenshot](https://i.imgur.com/934GOiZ.png)

### Video
​
![Video] Here's my video: https://youtu.be/CfO4pGdzDqw

### Install

- Clone this repo into your local machine
- Install Node.js, Jest, and Inquirer

```Node
npm init
npm i
```
```Jest
npm install --save-dev jest
```
```Inquirer
npm i inquirer@8.2.4
```
### Run the Application
```Run the application
node index.js
```
​
## My process
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap
- Font Awesome
- Javascript
- Node.js
- Inquierer
​
### What I learned
​
I learned how to seperate my functions to seperate pages so I can test them individually, instead of having one big function on one file. I've also learned that when writing one of these files (i.e. the test or lib files) that while helpful, copying and pasting can become really annoying having to go back and fix every last little bit to transcribe "manager" to "intern" etc. 

I also learned to test when I write each individual file, instead of saving them for the end, and a huge headache.

I also learned jest must be actually typed in the package.json "scripts>test" area for the tests to work.

### Useful resources
​
- [Jest](https://jestjs.io/docs/getting-started) - These are the docs for Jest, which I used to test my code.
- [Node.js](https://nodejs.org/en/download/) - Download page for node, which is needed to run the program.
- [Inquirer](https://www.npmjs.com/package/inquirer) - These are the docs for inquirer, which is used alongside node to ask the questions in the app. 
​

​
## Author
  Spencer Carlson
- GitHub - [anomic84](https://github.com/anomic84)
​

​
## Acknowledgments

I'd like to thank https://github.com/ricky8221 for his youtube video as well as https://github.com/JamesLJenks and https://github.com/jchoe125 for inspiration for this code.
​

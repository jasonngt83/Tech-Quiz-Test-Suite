# Tech Quiz Test Suite

Link to video
https://app.screencastify.com/v3/watch/oQSw52YF2Ll793hVwV3q

## Description

This is a UMN Coding Module Challenge. The goal was to implement Cypress component and end-to-end testing for a Tech Quiz application. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation<a id="installation"></a>

Create a new folder in your local system.

Open the folder in VS Code.

In the Terminal, type `git init` to set up a local Git repository in the selected folder.

Clone the repository locally with  `git clone https://github.com/jasonngt83/Tech-Quiz-Test-Suite.git`

Once you have cloned the repository locally, you will need to type `npm install` in the Terminal of VS Code. 

Then type `npm run install` to install dependencies for the client and server.

After that, type `npm run client:build`, `npm run build` and `npm run seed`

## Usage<a id="usage"></a>

To run the component test type `npm run component-test` in the command line, or type `npm run cypress` to test using the Cypress GUI.

To run the End-to-End test you will need to have the server and client running. In your terminal type `npm run start:dev`

Then open a new terminal window (leave the server running and the old terminal open) . In the new window run `npm run test` for a terminal based test or run `npm run cypress` to test using the Cypress GUI.


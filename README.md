# shutterstock-api-sandbox

Welcome to Shutterstock! The exercise we have prepared for you here is an introduction to quite a few essential tools and concepts involved in day to day web application development. This application will use your own api developer account to make requests to the Shutterstock public api and do interesting things with the results of those requests. The basic app has been set up for you here in this git repository and once we get it pulled down and built and you are set up with your developer account you should be ready to hit the ground running!

## Getting set up.

Before we get started writing code we will need some prerequisites:

### Github
If you dont have a Github account already now is the time to create one!
Do so here on this very website in the top right corner.

### Git
Next we will want to be able to interact with github via the command line with `git`. Install it on your machine following the instructions here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### node.js
This application is a `node.js` application so you will need node running on your machine in order to develop on it. The easiest way to do that is via the `nvm` tool. As long as we are on osx or linux installation of `nvm` is straightforward. Follow the instructions here: https://github.com/nvm-sh/nvm

Once you are set up with nvm you can run `nvm install node 12` to install the latest LTS version of node. After that you can tell it to `nvm use 12` in any shell to run node.

## Pulling down and building the app

Now we are ready to checkout the app and see if we can build it. Open your shell and go to a folder where you would like to keep your work as you go. From there type:

`git clone https://github.com/mHubbell/shutterstock-api-sandbox.git`

This will pull down all of the code from this repo in to a folder called `shutterstock-api-sandbox` here in your working directory. Switch to that directory now.

Now that we are in our project directory we can use:

`npm install`

This will install all of the projects dependencies as defined in the `package.json` file you see in the root directory

You can now run:

`npm run build`

This will run `webpack` on the source code, creating a javascript package that can be interpreted by the browser.
This application is also setup to build its front end code when we start the server and recompile it as it changes. Convenient! To try that run:

`npm start`

Oops! That didnt work. You should see a message that says:

`Error: Cannot find module './env.private'`

This means there is a missing file that the application is expecting. This is on purpose. This file is meant to contain an application key / secret needed to talk to the shutterstock api. We dont want this information floating around here in github so this file is specifically `ignored` and should never be committed to the repo for the world to see. This brings us to our next step.

## Getting a Shutterstock API Key

To get your key and secret you will need an account at Shutterstock. Go sign up for one here: https://developers.shutterstock.com/

# shutterstock-api-sandbox

Welcome to Shutterstock! The exercise we have prepared for you here is an introduction to quite a few essential tools and concepts involved in day to day web application development. This application will use your own api developer account to make requests to the Shutterstock public api and do interesting things with the results of those requests. The basic app has been set up for you here in this git repository and once we get it pulled down and built and you are set up with your developer account you should be ready to hit the ground running!

* [Getting set up.](#getting-set-up)
  * [Github](#github)
  * [Git](#git)
  * [node.js](#nodejs)
* [Pulling down and building the app](#pulling-down-and-building-the-app)
* [Getting a Shutterstock API Key](#getting-a-shutterstock-api-key)
* [Developing in the sandbox](#developing-in-the-sandbox)
  * [Set up an editor](#set-up-an-editor)
  * [Let's write some code](#lets-write-some-code)
  * [Understanding the application](#understanding-the-application)
    * [src/](#src)
    * [index.html](#indexhtml)
    * [index.jsx](#indexjsx)
    * [App.jsx](#appjsx)
    * [Search.jsx](#searchjsx)
    * [theme.js](#themejs)
  * [Ui dependencies](#ui-dependencies)
    * [material](#material)
    * [axios](#axios)
  * [Additional reading](#additional-reading)
    * [package.json](#packagejson)
    * [server.js](#serverjs)
    * [webpack.config.js](#webpackconfigjs)
    * [.babelrc](#babelrc)
    * [.eslintrc, .eslintignore](#eslintrc-eslintignore)
    * [.gitignore](#gitignore)

## Getting set up.

Before we get started writing code we will need some prerequisites:

### Github
If you dont have a Github account already now is the time to create one!
Do so here on this very website in the top right corner.

### Git
Next we will want to be able to interact with github via the command line with `git`. Install it on your machine following the instructions here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### node.js
This application is a `node.js` application so you will need node running on your machine in order to develop on it. The easiest way to do that is via the `nvm` tool. As long as we are on osx or linux, installation of `nvm` is straightforward. (If not there are other options) Follow the instructions here: https://github.com/nvm-sh/nvm

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

To get your key and secret you will need an account at Shutterstock. Go sign up for one here: https://developers.shutterstock.com/ You will then need to set up an app. Choose all of the "automatic approval" options and set both the callback url and hostname as `localhost` when creating your app. You can now access your key and secret. Copy paste those into a file on the main project root called `env.private.js` like so:

```
process.env.SSTK_KEY = '<client key here>';
process.env.SSTK_SECRET = '<client secret here>';
```

You should now be able to start the app successfully by running `npm start`. Once started go to `localhost:3000` in your browser and you should see the application. Upon clicking "Try a search" you should see the raw output of a basic search via shutterstock's api. It doesnt look like much but thats where you come in!

## Developing in the sandbox

### Set up an editor

You are now ready to start writing some code! If you dont already have a favorite code editor now is a great time to get aquainted with one. I personally like `atom` which is a free editor made by the folks here at gitlab and has tons of open source plugins and is quite easy to customize for your needs:

https://atom.io/

Regardless of what editor you are using you will want it to be ready for coding a react / node javascript application so you will want plugins related to syntax highlighting and inline helpers for those languages.

```
git checkout -b winternship2020
```

### Let's write some code

Open `src/Search.jsx` and find the `Try a Search` text.

Change this to read `Welcome to Winternship! Try a Search!`

Save the file and switch back to your browser. Refresh the page. Note the button text has changed to reflect your changes. Wow!

### Understanding the application

Modifying a single file is one thing, understanding how it all fits together is a bit more challenging.

#### src/

The front end code is housed within the `src` directory (a common convention for javascript projects). Our application is written in `react`. React was originally conceived at Facebook and is the principal tool used there for their front end development as well as a quickly growing group of other companies (including Shutterstock) React has a very large and active community of developers creating various useful components and applications. `react` is pretty great and should be around for a while. If you are looking at getting started in front end web development, react is a good place to start.

https://reactjs.org/

#### index.html

This is an html "template" that webpack will use to generate the basic page to attach our code to. This is the only html page we will need for our exercise here as the app we will create is whats called a "SPA" (single page application). There should not be much need to edit this as it really one needs one ingredient, the: `<div id="root"></div>` tag. This div element is where we will be injecting all of our javascript generated elements.

#### index.jsx

This is the entry point for our react application. It tells react to build the main `App` component and injects that into the `root` div as described above. You will see this file referenced in the webpack config as our "entry" point.

#### App.jsx

This is the main component of our application. It provides a `Router` so that we can build various pages as well as a basic `Tabs` component which allows us to go from page to page. Note that these are not real "pages" and are distinct from the `routes` we mentioned above in the `server.js` file. The "routes" referred to here are handled by javascript and will manipulate the browsers "history" api to simulate going page to page as in a traditional web application. This allows the standard features such as the back / forward buttons to work as expected. This is also where we inject our "theme" which will provide general css styling to the various components we will be creating.

#### Search.jsx

This is our first (and only at the moment) page in our application. It is referenced in the "/" route in the App.js. This is where the "search" is executed and the results displayed. In this file you can see the most basic example of "control flow" in a react application.

`constructor(props)`

This is the constructor method of the component and will be invoked when we create our instance of the component within the `Route` above, passing any properties that have been defined as `props`. This is where we take the opportunity to define the base `state` of the component which at the moment only needs an empty array to represent our our search `results`.

`doSearch()`

This method is one we defined that will call our servers `/search` endpoint to interact with the shutterstock api and return the results. When returned we populate our `results` state property with the search results. You will notice that this method is defined as being `async`. This means that the method takes some time to finish it's work and will return what is called a "Promise". Using the `async` keyword here enables us to use the `await` keyword within the method which instructs javascript to wait until the call to our server is complete before continuing.

`render()`

The core of the component happens within the `render` function at the bottom. This method will be invoked by react whenever properties referenced within have changed (such as the `results` array we refer to within `state`) So whenever this array changes, `render` will be invoked and the new content displayed. You will notice we render all of the component here including the "Try a search" button. React is smart enough to know that this buttons properties don't change when the `results` array has changed and it is left alone during the rendering process. The `Button` component here invokes a method that we defined above: `doSearch` when clicked, completing the control flow circle.

#### theme.js

This file defines general styling properties for our application. It is analogous to a `css` stylesheet that you may have seen in a more traditional html application. In our application however we define our styles as javascript objects which will be transformed into css for us by `material` (some more detail about that below)

### Ui dependencies

In our app we are making use of some third party libraries that make react development much easier and enjoyable. We will have a quick look at those.

#### material

Material is a ui kit originally created by Google. It provides a wide range of useful ui components, styling and layout features that make app development much easier than without. It provides what we call `atoms` and `molecules` in the ui component business allowing you to create more complex `organisms`. This is called "atomic design" and is an interesting and helpful way to think about developing ui features.

https://material-ui.com/

https://bradfrost.com/blog/post/atomic-web-design/

#### axios

Axios is a library we can use to make http requests. It helps us construct our calls to various service endpoints in a clean, predictable fashion.

https://github.com/axios/axios

Ok thats the basics! You are ready to start playing with the application. We will sit together when youve got the basics set up here and brainstorm some ideas for what this application might do. When you are ready to commit some code I will make you a "collaborator" on this Github repository and then you can commit and push your branch, creating a pull request that I can review and subsequently merge into the master branch. We will go over the details of that when you are ready to do so.

Have fun!

### Additional reading

#### package.json

The package file is something you will see in almost every javascript application you will come across. This file describes the application, its dependencies and defines scripts used for building and running our application. It hooks us up to `npm` and allows us to install and manage dependencies. `npm` is a very widely used network of open source javascript packages. If you can think of it, it is likely that something exists there for you to install, and if not you can create something and make it available for others. We wont be covering that in this exercise but if curious we can look into that process.

https://www.npmjs.com/

#### server.js

This is the server side of our application. It is based on `express` which is a very common framework for creating node js web applications. See the documentation here:

https://expressjs.com/

This file is what is executed when we run `npm start` you can see the reference to that inside the `package.json` under `scripts`. This runs `node` on the server.js file which creates an express application and tells it to start "listening" on port 3000. It is here that we can start creating `routes` for our application to call and also where we will be interacting with the shutterstock api via the shutterstock "sdk" (software development kit) The sdk provides an easy way to interact with the api by setting up our authentication and providing validated methods we can use to call the various endpoints it provides.

https://github.com/shutterstock/public-api-javascript-sdk

#### webpack.config.js

The webpack config manages the building of our front end ui code. These days we like to write javascript in lots of fancy ways that browsers cannot actually interpret as is. We also generally want to "package" our javascript files into one or more "bundles" to be included in the page. Webpack manages this for us, principally employing a tool called `babel` which "transpiles" our javascript code into a bundle containing code that browsers can understand.

Webpack is invoked when we run the server (you can see references to this in our server.js file) but it can also be invoked on its own via `npm run build`. In general we wouldnt hook webpack up to the server in a production environment and instead would pre-build our javascript using this command, only invoking the server side webpack when developing. Since we dont plan to actually deploy this application we shouldnt need to worry ourselves with that for this exercise. See the documentation for all of the things webpack can do for us here:

https://webpack.js.org/

#### .babelrc

This file tells `babel` how we want our code transpiled by referencing various "plugins" and "presets". These tell babel what kinds of fancy javascript features we are using so that it is prepared to turn them into vanilla javascript for consumption.

#### .eslintrc, .eslintignore

These files tell `eslint` about the code syntax to expect in our javascript files so that our editor can help us create cleanly written and hopefully not broken code. Some files should be ignored such as the transpiled bundle. This is governed by .eslintignore

#### .gitignore

The git ignore file tells git to ignore certain files and folders when committing code. This is how we keep our private env file out of git as well as various other folders that will be automatically generated during our build process that we dont actually want in our repository.

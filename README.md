This task was completed using [Create React App](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) as the React server and a Node Express API server for the RESTful requests. 

#### The User story
Build a shopping cart that and client component that allows specified products to be listed and to add and remove them from a shopping basket. 
- Adding and removing to and from the basket makes a POST/GET request to update a 'customer' shopping basket. In lieu of a data store - an array is used during the life of the server.
- Users can view their basket by clicking on the 'Bag' link on the right hand-side of the app.
- On the home page customers can add to basket and on the shoppinggbag page they can remove items from the basket - these actions update their array on the server.

#Assumptions
- The application is built in Node.js using the Express framework. Can be [installed here](https://nodejs.org/en/download/).
- Local storage maintains the basket count and button selection on the /api home page.
- GET is used to get products for the /api and /shoppingbag pages.
- POST is used to add and delete items from the basket.
- We have two separate servers; one runs the React frontend and the Express server processes all API calls.
- Both run concurrently to use the application.

##Installation and setup

- First install the **create-react-app** globally with command:
  ```npm install -g create-react-app```(Node.js 4.x or higher is required).
- Either fork or clone the repo onto your local machine.    
- With node.js installed onto your machine run the command ```npm install``` from the brav directory in a console.
    - This will install all listed dependencies from the **package.json** file into the project locally.
    - If this is not successful then **dependencies** will have to be installed manually using the ```npm install **packageName** --save``` command. 
    Similarly all **devDependencies** will have to be installed with the ```npm install **packageName** --save-dev``` command.   
- The Express framework and relevant modules should be installed onto your machine. All node modules will be installed into the **node_modules** folder.
- This should the brav directory and the shoppingcart sub-directory.

##Run Application

1. Run an instance of the API server by running the command: ```npm run server``` from the /brav directory. The console should show the server is running as **Server started: http://localhost:3001/**.
2. Run an instance of the React server by running the command in a second console: ```cd shoppingcart npm run start``` from the /brav directory. The console should show the server is running as **The app is running at:http://localhost:3000/**.
3. Open [http://localhost:3000/api](http://localhost:3000/api) to view it in the browser.




# Priddle

<p align="center">
  <img src=(./src/images/Priddle.png)>  
</p>

Social Site that allows users to comment and post puzzles and riddles. 

### A live version of Priddle is deployed with Render and running here:

[Live Version](https://priddle.onrender.com/)



## Features


#### Posting



#### Commenting



#### Liking




## Installation

**1. Clone the repository to your local maching**

**2. Navigate into the root folder and run the build command**
  
  To install all node packages:
  ```
  $ npm install
  ```

**3. Add the necessary environment variables**

  Reverie Sound Review makes use of development and production variables for fetching.
  
  First navigate to the root directory and create `env.development`
  
  Navigate to this file and add the following:
  
  ```javascript
      REACT_APP_API_URL=http://localhost:8000
  ```
  
  This setup will only work if you run JSON-Server on port 8000. If you're running it on a different port, then update the `REACT_APP_API_URL` variable to match.

  **5. Start up the servers**
  
  Run this to start up the JSON-Server backend:
  ```
  $ json-server --watch src/data/db.json --port 8000
  ```
  
  Then, in another terminal, run this to start up the React frontend:
  ```
  $ npm start
  ```

## Contributing


# Setup

1. Open new console window and run `npm install`

2. Run `npm run build:dev`

3. In a new console window, run `npm run server:dev`

# Tasks

## Add Features to Frogger

1. Make red boxes appear to enter and leave game container incrementally.

2) Add Win modal.

3. Add Game Over modal.

4) Add Next Level option to Win Modal

5. Make additional levels more difficult than previous. (Up to you what this means.)

6) Add Highscores:
   - Top 10 stored on server for global rankings
   - If user score is in top 10, prompt them for name.

## Add Features to User Pages

1. Inside of src/Home.jsx

   - Print out all of the users returned from fetch.

2. Inside src/EditUserInfo.jsx and server.js

   - Make it so you can create a new user, change an existing user's favorite animal, and add to their favorite games.

3. Create User Page.

   - Has link to Edit User Info page.
   - Prints out user's username, favorite animal, and favorite games.
   - Make favorite games in list links that load game.

4. Inside src/Login.jsx
   - Username cannot be the same as an existing one.
   - Once a user enters their name, they're redirected to the user page.

## Create Server and Make HTTP requests in Node.

##### _Use any libraries you want._

1. Create a second server that will behave as your endpoint.

   - Endpoint returns paginated results:

   ```
   const exampleResponseObject = {
    data: ['stuff' * 500],
    pageNum: 1,
    totalResults: 54329,
    resultsPerPage: 500,
   }
   ```

   - All results may or may not be in initial page response.
   - Continue to make requests until all are fetched.
   - Test your code out.

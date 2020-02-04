## Technologies

This app uses HTML, CSS, JavaScript, Bootstrap, Jquery, and AJAX.

### Planning

My original plan was to complete the app in the following steps:

1. Use HTML and CSS to create a game board, buttons for game-actions, and buttons for users actions.
2. Add event handlers to the board and buttons to make the app interactive.
3. Successfully call the API by creating games, patching them, and getting data with AJAX.
4. Connect the AJAX calls with the event handlers so that the buttons and game board would behave as expected. For example, the Sign In button should take a user's email and password and sign them in. At this same point, a user should be able to click on space on the board and update the cell's value.
5. Add the Tic Tac Toe-specific game logic. This includes things like preventing users from overriding already-clicked cells, adding turn orders, checking for winning game states, etc.

After completing these steps, the core functionality of the app would be completed, which would leave things like app design and code refactoring as next steps.

### Development Process

Like intended in the original plan, the app was built in steps that built upon each other. The order of steps that the app was actually built in differed from the plan, though.

Development was started by creating the user authentication forms in the HTML, including Sign In, Sign Up, Sign Out, and Change Password buttons. Event handlers were added to these buttons using Jquery selectors. The game board was not built until later.

With the user action buttons in place, I began linking them with the API using AJAX calls. Completing the user-action AJAX functions allowed me to confirm that all previous parts of the app (HTML, Jquery selectors, event handlers, variable storage, and API connections) were all functioning properly at this point.

Next, I started the game-related API functions. This included adding a working game board as well as buttons for creating a game, getting game details, and storing the board state. Similarly to how the user actions operate, the game actions are triggered by Jquery selectors and event handlers which invoke AJAX calls to create games, update the API game's board state, and retrieve the user's number of played games.

Once all API and necessary UI sections of the app were complete, I focused on game logic. This included preventing illegal actions, making a function for testing win conditions, alternating turns between players, etc.

After game-related and user-related functionality was operational, the development process consisted of a mix of improving communications sent to the user, bug-fixing, code refactoring, and visual design.

### Future Updates

Potential future updates to the app include various design and visual enhancements, more options for game data retrieval (e.g. completed games, won games, etc.), and multiplayer.

The current highest priority updates are overall app design and presentation.

### Wireframes

[Desktop](https://i.imgur.com/eQCwSlD.jpg)

[Mobile](https://i.imgur.com/LMoCDIj.jpg)

## User Stories
As a new user, I want instructions on how to use the app.

As tech-savvy user, I want signing up and signing in to be quick and easy so that it doesn't cut into play time.

As a power user, I want to be able to see how many games I've played.

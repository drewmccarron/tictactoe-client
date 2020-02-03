##Documentation

###Technologies

This app uses HTML, CSS, JavaScript, Bootstrap, Jquery, and AJAX.

###Planning

The original plan was to complete the app in multiple steps:

1. Use HTML and CSS to create a game board, buttons for game-actions, and buttons for users actions.
2. Add event handlers to the board and buttons to make the app interactive.
3. Successfully interact with the API by creating games, patching them, and getting them with AJAX.
4. Connect the AJAX calls with the event handlers so that buttons and game board would behave as expected. For example, the Sign In button should take a user's email and password and sign them in. At this same point, a user should be able to click on space on the board and update the cell's value.
5. Add the Tic Tac Toe-specific game logic. This includes things like preventing users from overriding already-clicked cells, adding turn orders, checking for winning game states, etc.

At this point, the core functionality of the app would be completed, which would leave things like app design and code clean-up as potential future tasks.

###Development Process

Like intended in the original plan, the app was built in steps that would expand upon the previous steps. Unlike the plan, the real development process did not
go in that specific order.

Development was started by creating the user authentication forms in the HTML, including Sign In, Sign Up, Sign Out, and Change Password. Event handlers were added to these buttons with Jquery. The game board did not become used until later.

With the user action buttons in place, I began linking them with the API using AJAX calls. Completing the user-action AJAX functions allowed me to confirm that all previous parts of the app (HTML, Jquery selectors, event handlers, variable storage, and API connections) were all functioning properly at this point.

Next, I started the game action functions. This included adding a functioning game board, buttons for creating a game, getting game details, and storing the board state. Similarly to how the user actions operate, the game actions are triggered by Jquery event handlers which invoke AJAX calls to create games, update the API game's board state, and retrieve the user's number of played games.

Once the app could succesfully create and patch games through the API, the core functions of the app were largely complete. Development past this point largely included work on app design, UI elements, cleaning and reorganizing the code.

###Future Updates

Potential future updates to the app include various design and visual enhancements, more options for game data retrieval (e.g. comleted games, won games, etc.), and multiplayer.

The highest priority updates would be overall app layout and presentation. At the time of writing this, the app is lacking in terms of visuals and it is mostly black and white with default font. Any upgrades in this area would be a notable improvement.

###Wireframes

[Desktop](https://i.imgur.com/eQCwSlD.jpg)
[Mobile](https://i.imgur.com/LMoCDIj.jpg)

##User Stories
As a new user, I want instructions on how to use the app.
As tech-savvy user, I want signing up and signing in to be quick and easy so that it doesn't cut into play time.
As a power user, I want to be able to see how many games I've played.

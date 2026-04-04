# APDOKU

A modern, interactive Sudoku game built with vanilla JavaScript, featuring a sleek user interface, dark/light mode toggle, and smooth animations powered by Anime.js.

## Features

- **Interactive Sudoku Gameplay**: Play a fully functional Sudoku game with auto-generated puzzles
- **Dark/Light Mode**: Toggle between dark and light themes with smooth animations
- **Timer**: Built-in countdown timer to track your solving time
- **Mistake Counter**: Tracks incorrect moves to help improve your skills
- **Notes System**: Add and remove notes in cells for puzzle-solving assistance
- **Responsive Design**: Optimized for various screen sizes
- **User Authentication**: Simple login/signup system using local storage
- **Smooth Animations**: Enhanced user experience with Anime.js animations

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animations**: Anime.js
- **Fonts**: Google Fonts (Poppins, Exo 2, Pixelify Sans, Sour Gummy)
- **Icons**: Custom SVG icons

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ap-bipo/APDOKU.git
   cd APDOKU
   ```

2. **Open the project**:
   - Navigate to the `SUDOKU` folder
   - Open `loginpage.html` in your web browser

## Usage

1. **Sign Up/Login**:
   - Open `loginpage.html`
   - Create a new account or log in with existing credentials
   - Click the expand button to switch between login and signup modes

2. **Play the Game**:
   - After logging in, you'll be redirected to the main game
   - Select numbers from the right panel
   - Click on empty cells to place numbers
   - Use the note button to toggle note mode for adding/removing hints
   - Access settings via the gear icon to toggle dark/light mode

3. **Game Features**:
   - Timer starts automatically when the page loads
   - Mistakes are counted and displayed
   - Correct placements are highlighted in green
   - Incorrect placements are highlighted in red and increment the mistake counter

## Project Structure

```
APDOKU/
├── SUDOKU/
│   ├── index.html              # Main game page
│   ├── loginpage.html          # Login/Signup page
│   ├── style.css               # Main game styles
│   ├── styleLoginPage.css      # Login page styles
│   ├── reset.css               # CSS reset
│   ├── script.js               # Main game logic
│   ├── GenerateSUDOKU.js       # Sudoku board generation
│   ├── LightDarkMode.js        # Theme switching logic
│   ├── CountUpTimer.js         # Timer functionality
│   ├── note.js                 # Notes system
│   ├── SettingOption.js        # Settings menu
│   ├── FormValidation.js       # Login form validation
│   ├── expandSignupPage.js     # Signup form expansion
│   └── anime.min.js            # Animation library
└── README.md
```

## How It Works

- **Board Generation**: Uses a backtracking algorithm to generate valid Sudoku puzzles
- **Game Logic**: Validates moves against the solution board
- **State Management**: Tracks selected numbers, notes, and game progress
- **User Data**: Stores user accounts in browser localStorage
- **Animations**: Leverages Anime.js for smooth transitions and effects

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**ap-bipo** - [GitHub](https://github.com/ap-bipo)

---

*This project was created as a learning experience in web development and game creation.*


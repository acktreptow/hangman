# Hangman React / TypeScript Application

Welcome to my Hangman game! This is application was built using React and TypeScript. The game randomly selects a word from a predefined list, and your goal is to guess the word letter by letter. Be careful, though – you have a limited number of incorrect guesses before the hangman is complete.

## Features

- Randomly selects a word from a predefined list.
- Tracks guessed letters and updates the hangman drawing accordingly.
- Informs you if you win or lose the game.
- Supports both keyboard and mouse inputs for letter guesses.
- Responsive design created through CSS modules for an optimal gaming experience.

## Installation

1. Clone this repository to your local machine.

```bash
   git clone https://github.com/acktreptow/hangman.git
```

2. Navigate to the project directory.

```bash
   cd hangman
```

3. Install the required dependencies.

```bash
   npm install
```

4. Run the application by using the following command:

```bash
  npm run dev
```

## How to Play

1. The game will start with a randomly selected word.
2. Use the keyboard to guess letters.
3. Each incorrect letter adds to the hangman drawing.
4. Win the game by guessing the entire word before the hangman is complete.
5. Refresh the page or press Enter to start a new game.

## Customization

Feel free to customize the game by modifying the code. You can add more words to the `wordList.json` file, change the styling in `.module.css` files, or tweak the game logic in `App.tsx`.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.
4. Ensure your code passes any existing tests.

## Future Enhancements

I would like to add a difficulty mode (number of guesses) and perhaps different genres of lists of words (sports/movies) etc.

## Contact

If you have any questions or feedback, please reach out to me at [alex@treptow.dev](mailto:alex@treptow.dev)

## License

This Hangman React application is open-source and available under the MIT License. Feel free to use, modify, and distribute it as you see fit. Enjoy playing!

# iOS Calculator

A sleek, modern iOS-style calculator built with React and Vite, featuring a beautiful dark/light mode toggle and smooth animations.

## Features

- **iOS-inspired Design**: Clean, modern interface that mimics the iOS calculator
- **Dark/Light Mode**: Toggle between dark and light themes
- **Full Calculator Functionality**:
  - Basic arithmetic operations (+, -, ×, ÷)
  - Percentage calculations
  - Sign toggle (+/-)
  - Decimal point support
  - Clear function
- **Real-time Expression Display**: Shows operators and numbers as you build calculations
- **Responsive Design**: Works on different screen sizes
- **Smooth Animations**: Button press animations and transitions

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Phosphor React** - Beautiful icon library

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ios-calculator-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

- **Numbers**: Click digit buttons (0-9) to enter numbers
- **Operations**: Use +, -, ×, ÷ buttons for arithmetic operations
- **Equals**: Press = to calculate the result
- **Clear**: Press C to reset the calculator
- **Sign Toggle**: Use +/- to change the sign of the current number
- **Decimal**: Press . to add decimal points
- **Theme Toggle**: Click the sun/moon icon to switch between dark and light modes

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── index.js
│   ├── ButtonWrapper/
│   │   ├── ButtonWrapper.jsx
│   │   └── index.js
│   └── Display/
│       ├── Display.jsx
│       └── index.js
├── App.jsx
├── index.css
└── main.jsx
```

## Development

This project uses:
- **Vite** for fast development and building
- **ESLint** for code linting (if configured)
- **Tailwind CSS** for styling
- **PostCSS** for CSS processing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

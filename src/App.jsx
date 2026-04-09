import { Moon, Sun } from "phosphor-react";
import { useState } from "react";
import ButtonWrapper from "./components/ButtonWrapper";
import Display from "./components/Display";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [expression, setExpression] = useState('');

  const handleNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setExpression(prev => prev + String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
      setExpression(prev => prev === '0' ? String(num) : prev + num);
    }
  };

  const handleOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
    setExpression(prev => prev + ' ' + nextOperation + ' ');
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case 'x':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '%':
        return firstValue % secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const result = calculate(previousValue, inputValue, operation);
      setDisplay(String(result));
      setExpression(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
    setExpression('');
  };

  const handleToggleSign = () => {
    const newValue = -parseFloat(display);
    setDisplay(String(newValue));
    setExpression(prev => {
      const parts = prev.trim().split(' ');
      if (parts.length > 0) {
        parts[parts.length - 1] = String(newValue);
        return parts.join(' ');
      }
      return String(newValue);
    });
  };

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setExpression(prev => prev + '0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
      setExpression(prev => prev + '.');
    }
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <main className={`flex justify-center items-center dark:bg-zinc-900`}>
        <div className="px-4 h-screen flex flex-col overflow-hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 ${
              darkMode ? "bg-gray-600" : "bg-gray-100"
            }  w-max rounded-xl`}
          >
            {darkMode ? (
              <Sun size={16} className="text-gray-100" weight="fill" />
            ) : (
              <Moon size={16} className="text-gray-400" weight="fill" />
            )}
          </button>
          <Display value={expression || display} />
          <ButtonWrapper
            onNumber={handleNumber}
            onOperation={handleOperation}
            onEquals={handleEquals}
            onClear={handleClear}
            onToggleSign={handleToggleSign}
            onDecimal={handleDecimal}
          />
        </div>
      </main>
    </div>
  );
}

export default App;

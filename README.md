# Expression Calculator

## Introduction

This application uses the JavaScript framework React. It contains a skeleton of a front-end calculator app for inline calculation. Your job is to complete the implementation of the React Components and a few functions responsible for the calculator's logic. Furthermore, you have to implement a second component to store and display a history of the executed calculations.

## Task Details
You will find three React components in `src/components/`. They render the application's visuals and control its behaviour.

The `ExpressionInput` component is responsible for receiving and handling user interactions.
Finally, the `Results` component should display the result of calculations and show a history of past results.
The `Calculator` component is the root component and orchestrates the interaction between the above components and classes.
The `Calculation` class under `src/logic` computes the results from user input after the user presses *Submit*.

### Implement the Calculation class
The `Calculation.calculate()` method should evaluate and calculate the entered input and return the result. If the given expression is wrong or malformed, return `undefined`. Please implement at least the following arithmetic operations: `+, -, *, /`. Unit tests in `calculation.test.js` cover these. Feel free to extend this set of operations on your own. Add support for grouping expressions with parentheses.

### Expression Input and Results
The `ExpressionInput` component should trigger a calculation based on the value of its `TextField`. The result of the computation should be displayed in the `Results` component. Hint: consult the [`TextField` documentation ](https://material-ui.com/components/text-fields/#uncontrolled-vs-controlled) to learn how to react to text input in React components.

If the given expression is wrong or malformed, return the 'Wrong input!' statement.
If the expression is correct, it should be displayed with its arguments and result separated by a space character. For example, the input *1.28+2.89*  should be rendered as *1.28 + 2.89 = 4.17*

### Show a History of Computations
Extend the application by adding a History component that displays the already calculated equations.  Hint: you can use the Material-UI [`List`-Component](https://material-ui.com/components/lists/#lists)

The results should be ordered with the newest entry as the first element. Additionally, it should be possible to clear the entire history using a clear button.

The following mock represents the expected result: <img width="1902" height="862" alt="image" src="https://github.com/user-attachments/assets/4349754c-1681-42f8-a908-872140c673c4" />


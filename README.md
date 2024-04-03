# Average Calculator Microservice (Question 1)

This project implements an Average Calculator microservice that exposes a REST API to calculate the average of numbers fetched from a third-party server. The microservice accepts qualified number IDs ('p' for prime, 'f' for Fibonacci, 'e' for even, and 'r' for random numbers) and maintains a window of numbers for calculating the average.

## Features

- Exposes a REST API endpoint to fetch numbers and calculate the average.
- Fetches numbers from a third-party server based on the provided number ID.
- Maintains a window of numbers with a configurable size.
- Calculates the average of numbers in the window.
- Responds with the previous and current window state, fetched numbers, and average.

## Technologies Used

- Node.js
- Express.js
- Axios

## Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
4. Start Server


## Usage

To use the microservice, make a GET request to the `/numbers/{numberId}` endpoint, where `{numberId}` is one of the qualified number IDs ('p', 'f', 'e', 'r').

Example:

- `windowPrevState`: Previous state of the number window.
- `windowCurrState`: Current state of the number window.
- `numbers`: Fetched numbers.
- `avg`: Average of numbers in the window.

## Snapshots (Output) 
<img width="383" alt="image" src="https://github.com/rithik-tiwari/RA2111003010339/assets/93036942/1d5e9e80-eb63-44d3-b4df-81f72489edff">
<img width="233" alt="image" src="https://github.com/rithik-tiwari/RA2111003010339/assets/93036942/9e97c07e-4316-486b-9e6a-e6402d99aaa0">
<img width="474" alt="image" src="https://github.com/rithik-tiwari/RA2111003010339/assets/93036942/1d0c2e81-1f1e-4336-890c-ba8c6b1c0519">
<img width="409" alt="image" src="https://github.com/rithik-tiwari/RA2111003010339/assets/93036942/f84ebee8-fce3-469f-8581-5211f76993de">



## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvement.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.




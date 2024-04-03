# Average Calculator Microservice

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

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvement.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.




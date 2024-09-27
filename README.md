# Ethereum RPC Benchmark

This Node.js application allows you to run a steady state RPS (Requests Per Second) test against an Ethereum RPC endpoint for the `eth_blockNumber` method. It measures the average response time in milliseconds and provides insights into the actual RPS achieved.

## Prerequisites

- Node.js (version 14 or later recommended)
- npm (comes with Node.js)

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies:

   ```
   npm install
   ```

## Configuration

Before running the benchmark, you need to update some parameters in the `index.js` file:

1. `rpcEndpoint`: Replace `"https://your-rpc-endpoint-here.com/rpc"` with your actual Ethereum RPC endpoint URL.
2. `targetRPS`: Set this to your desired Requests Per Second. Default is 100.
3. `duration`: Set the number of seconds you want the benchmark to run. Default is 10 seconds.
4. `method`: This is set to `"eth_blockNumber"` by default. You can change it to test other RPC methods if needed.

Example:

```
const rpcEndpoint = "https://your-rpc-endpoint-here.com/rpc";
const method = "eth_blockNumber";
const targetRPS = 50;
const duration = 30;
```

## Usage

To run the benchmark:

1. Make sure you've updated the configuration parameters as described above.
2. In your terminal, navigate to the project directory.
3. Run the following command:

   ```
   npm start
   ```

4. The benchmark will run for the specified duration and then display the results, including:
   - Average response time in milliseconds
   - Total number of requests sent
   - Actual RPS achieved

## Customizing the Test

- To test different RPC methods, update the `method` constant in `index.js`.
- To adjust the load, modify the `targetRPS` constant.
- For longer or shorter test runs, change the `duration` constant.

## Important Notes

- Ensure you have permission to perform high-volume requests on the RPC endpoint you're testing.
- Be aware of any rate limiting on the RPC endpoint, as it may affect your test results.
- For accurate results, run the test from a machine and network that can handle the desired RPS without bottlenecks.

## Troubleshooting

If you encounter any issues:

- Ensure all dependencies are correctly installed.
- Check that your Node.js version is up to date.
- Verify that the RPC endpoint URL is correct and accessible.

import fetch from "node-fetch";
import { performance } from "perf_hooks";

const rpcEndpoint = "https://your-rpc-endpoint-here.com/rpc"; // Replace with your RPC endpoint
const method = "eth_blockNumber";
const targetRPS = 100; // Adjust this value to set your desired RPS
const duration = 10; // How many seconds to run the benchmark for

class EthereumRPCBenchmark {
  constructor(rpcEndpoint, targetRPS) {
    this.rpcEndpoint = rpcEndpoint;
    this.targetRPS = targetRPS;
    this.responseTimes = [];
  }

  async sendRequest() {
    const startTime = performance.now();
    await fetch(this.rpcEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: method,
        params: [],
        id: 1,
      }),
    });
    const endTime = performance.now();
    this.responseTimes.push(endTime - startTime);
  }

  async runBenchmark(duration) {
    const startTime = performance.now();
    while (performance.now() - startTime < duration * 1000) {
      const batchPromises = [];
      for (let i = 0; i < this.targetRPS; i++) {
        batchPromises.push(this.sendRequest());
      }
      await Promise.all(batchPromises);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  printResults() {
    const avgResponseTime =
      this.responseTimes.reduce((a, b) => a + b, 0) / this.responseTimes.length;
    console.log(`Average response time: ${avgResponseTime.toFixed(2)} ms`);
    console.log(`Total requests sent: ${this.responseTimes.length}`);
    console.log(
      `Actual RPS: ${(
        this.responseTimes.length /
        (this.responseTimes.length / this.targetRPS)
      ).toFixed(2)}`
    );
  }
}

async function main() {
  const benchmark = new EthereumRPCBenchmark(rpcEndpoint, targetRPS);
  await benchmark.runBenchmark(duration);
  benchmark.printResults();
}

main().catch(console.error);

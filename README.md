# Node.js Server Crash on Large POST Requests

This repository demonstrates a common issue in Node.js servers: crashing due to large POST requests that exceed the default memory limit. The provided code shows the problem and its solution.

## Problem

The `bug.js` file contains a simple HTTP server that doesn't handle large POST requests effectively. When a request body exceeds the default memory limit, the server will crash without gracefully handling the large data. This is a crucial issue as it can lead to unexpected server outages.

## Solution

The solution is implemented in the `bugSolution.js` file. The solution leverages the `stream` module to handle large requests without loading the entire body into memory simultaneously. This prevents memory overflow errors and increases the server's robustness and reliability.

## How to run

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run the buggy code (`node bug.js`). Test with a large POST request to see the server crash.
4. Run the solution code (`node bugSolution.js`). This version will handle the same large request without crashing.
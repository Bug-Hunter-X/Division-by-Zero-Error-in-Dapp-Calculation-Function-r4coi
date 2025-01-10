# Division by Zero Error in Dapp Calculation Function

This repository demonstrates a common error in decentralized applications (dApps): division by zero.  The `div` function in `bug.js` lacks proper error handling, leading to unexpected crashes when the divisor is zero. The solution demonstrates secure coding practices to prevent this type of error.

## Bug Report

The bug is located in the `div` function within `bug.js`. The function does not check for a zero divisor, resulting in an error when the second argument (`b`) is 0. This error can lead to the failure of the entire dApp.
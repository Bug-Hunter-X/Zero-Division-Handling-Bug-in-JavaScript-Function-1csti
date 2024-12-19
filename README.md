# Zero Division Handling Bug in JavaScript Function

This repository demonstrates a common bug in JavaScript related to handling zero values in division operations. The `myFunction` initially fails to correctly address cases where either `a` or `b` is zero, resulting in unexpected behavior (e.g., `Infinity`, `NaN`, or an error).  The solution provides a corrected version which robustly handles these scenarios.

## Bug Description
The original `myFunction` incorrectly returns 0 when either input is 0.  A division by zero should ideally throw an error or return a defined value like NaN (Not a Number) for better error handling.

## Solution
The solution implements improved logic to explicitly check for zero values and handle them appropriately, either throwing an error or returning NaN for better clarity about the error condition.
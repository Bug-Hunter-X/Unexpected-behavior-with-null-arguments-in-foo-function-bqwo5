function foo(a, b) {
  a = a === null ? 0 : a; // or any appropriate default value
  b = b === null ? 0 : b; // or any appropriate default value
  // ... rest of the function logic that can now safely use a and b
  // Example: 
  return a + b; // Example operation
} 
// src/lib/utils/performance.js
export function measurePerformance(name, fn) {
  return async (...args) => {
    const start = performance.now();
    const result = await fn(...args);
    const end = performance.now();
    
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  };
}
// List of places to visit
const placesToVisit: string[] = [
    "Dubai",
    "Paris",
    "Sydney",
    "New York",
    "london"
  ];
  
  // Print the array in its original order
  console.log("Original Order:");
  console.log(placesToVisit);
  
  // Print the array in alphabetical order (without modifying the original list)
  console.log("\nAlphabetical Order (without modifying original list):");
  console.log([...placesToVisit].sort());
  
  // Confirm the original array is still in its original order
  console.log("\nOriginal Order (still unchanged):");
  console.log(placesToVisit);
  
  // Print the array in reverse alphabetical order (without modifying the original list)
  console.log("\nReverse Alphabetical Order (without modifying original list):");
  console.log([...placesToVisit].sort().reverse());
  
  // Confirm the original array is still in its original order
  console.log("\nOriginal Order (still unchanged):");
  console.log(placesToVisit);
  
  // Reverse the order of the list
  placesToVisit.reverse();
  console.log("\nReversed Order:");
  console.log(placesToVisit);
  
  // Reverse the order of the list again to return to the original order
  placesToVisit.reverse();
  console.log("\nOriginal Order (restored after reversing):");
  console.log(placesToVisit);
  
  // Sort the array in alphabetical order
  placesToVisit.sort();
  console.log("\nAlphabetical Order (sorted):");
  console.log(placesToVisit);
  
  // Sort the array in reverse alphabetical order
  placesToVisit.sort((a, b) => b.localeCompare(a));
  console.log("\nReverse Alphabetical Order (sorted in reverse):");
  console.log(placesToVisit);
  
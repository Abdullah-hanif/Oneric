// Utility function to truncate a string and add ".." if it exceeds the maxLength
function truncateString(str, maxLength) {
  return str.length > maxLength ? str.substring(0, maxLength) + ".." : str;
}

// Utility function to format a Unix timestamp into a readable date and/or time
const formatUnixTimestamp = (timestamp, options = {}) => {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

  // Default options to include all components
  const defaultOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  // Merge user-provided options with default options
  const mergedOptions = { ...defaultOptions, ...options };

  if (Object.keys(mergedOptions).length === 0) {
    // If no options provided, return the full formatted timestamp
    return date.toLocaleString("en-US", defaultOptions);
  }

  if (options.date && !options.time) {
    // If only date option is true, format as "Month Day, Year"
    const dateOnlyOptions = { month: "short", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", dateOnlyOptions);
  }

  if (options.time && !options.date) {
    // If only time option is true, format as "Hour:Minute AM/PM"
    const timeOnlyOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return date.toLocaleTimeString("en-US", timeOnlyOptions);
  }

  // If both date and time options are true, use merged options
  return date.toLocaleString("en-US", mergedOptions);
};

// Utility function to create a JSON reviver function to handle circular references
const createJsonReviver = () => {
  const visitedObjects = new WeakSet();

  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (visitedObjects.has(value)) {
        // Circular reference found, return a placeholder value
        return { __circular_reference__: true };
      }
      visitedObjects.add(value);
    }
    return value;
  };
};

// Export the truncateString and formatUnixTimestamp functions for use in other modules
export { truncateString, formatUnixTimestamp, createJsonReviver };

// Example usages
// console.log(truncateString("Hello, world!", 10)); // Output: "Hello, wo.."
// console.log(formatUnixTimestamp(1693042200)); // Output: "Aug 26, 2023, 2:30 AM"
// console.log(formatUnixTimestamp(1693042200, { date: true })); // Output: "Aug 26, 2023"
// console.log(formatUnixTimestamp(1693042200, { time: true })); // Output: "2:30 AM"
// console.log(formatUnixTimestamp(1693042200, { date: true, time: true })); // Output: "Aug 26, 2023, 2:30 AM"

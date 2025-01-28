// YouTube-like Count Formatter
export default function formatCount (count){
    if (count >= 1_000_000_000) {
      return (count / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B"; // Billions
    } else if (count >= 1_000_000) {
      return (count / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M"; // Millions
    } else if (count >= 1_000) {
      return (count / 1_000).toFixed(1).replace(/\.0$/, "") + "K"; // Thousands
    }
    return count.toString(); // Less than 1,000
  };
  
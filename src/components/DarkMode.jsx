export default function DarkMode(condition) {
  let bgColor = "";

  if (condition) {
    bgColor = "#121212";
  } else {
    bgColor = "white";
  }
  return bgColor;
}

import capitalize from "./capitalize";

function main() {
  console.log("Hello world!");
  const stringToCapitalize = "i will be capitalized";
  const capitalizedString = capitalize(stringToCapitalize);
  console.log({ capitalizedString });
  console.log("I am done?");
}

export default main;

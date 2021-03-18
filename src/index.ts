import capitalize from "./capitalize";

interface ColormanConfig {
  myFirstId: string;
  mySecondId: string;
}

const ColormanPrivate = {
  PRIVATE_CONSTANT: "Hi! This is a private constant.",
};

const ColormanPublic = {
  PUBLIC_CONSTANT: "I am a public constant.",
};

export default function Colorman(config: ColormanConfig) {
  const { myFirstId, mySecondId } = config;

  const somePrivateMethod = (): string => {
    return "I am Colorman.";
  };

  /**
   * Public function wrapping a private function
   */
  const hello = (): void => {
    console.log(`${somePrivateMethod()} ${ColormanPrivate.PRIVATE_CONSTANT}`);
  };

  /**
   * Capitalizes a string using a helper function
   * @param inputString
   * @returns {string}
   * @example
   *  const colorman = Colorman(config);
   *  colorman.wrapCapitalize('capitalize me');
   */
  const wrapCapitalize = (inputString: string): string => {
    return capitalize(`${inputString} (${ColormanPublic.PUBLIC_CONSTANT})`);
  };

  /**
   * Get config for Colorman object
   * @returns {ColormanConfig}
   * @example
   *  const colorman = Colorman(config);
   *  colorman.getLibraryConfig();
   */
  const getConfig = (): ColormanConfig => {
    return { myFirstId, mySecondId };
  };

  /**
   * Custom rendering
   * @param elId Element ID to draw something in
   */
  const renderSomethingNice = (elId: string) => {
    // Render something in a div
    const docToRenderIn = document.getElementById(elId);
    if (!docToRenderIn) throw new Error("Target element not found");
    const newDiv = document.createElement("div");
    newDiv.style.cssText =
      "background-color: yellow;font-family: monospace;padding: 10px 14px;border-radius: 5px;";
    newDiv.innerHTML = "I was created inside Colorman";
    docToRenderIn.appendChild(newDiv);
  };

  // public interface
  return {
    hello,
    getConfig,
    wrapCapitalize,
    renderSomethingNice,
  };
}

/** @memberof Colorman */
Colorman.PublicConstants = ColormanPublic;

export const capitelizeString = (val: string): string => {
  let arrVal = val.split(" ");
  if (arrVal.length > 1) {
    let newString = arrVal.map((v) => v.charAt(0).toUpperCase() + v.slice(1));
    return newString.join(" ");
  }
  return arrVal[0].toUpperCase() + arrVal[0].slice(1);
};

export const firstChar = (name: string) => {
  let arrName = name.split(" ");

  if (arrName.length > 1) {
    return (
      arrName[0].charAt(0).toUpperCase() + arrName[1].charAt(0).toUpperCase()
    );
  }

  return name.charAt(0).toUpperCase();
};

export const shortingText = (text: string, length: number) => {
  let arrText = text.split("");
  if (arrText.length > length) {
    return arrText.splice(0, length).join("") + "...";
  }
  return text;
};

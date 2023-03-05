// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
  return cats.push('Ralph');
};

function destructivelyPrependCat() {
  return cats.unshift('Bob');
};

function destructivelyRemoveLastCat() {
  return cats.pop();
};

function destructivelyRemoveFirstCat() {
  return cats.shift();
};

function appendCat() {
  const newAppendCats = [...cats, "Broom"];
  return newAppendCats;
};

function prependCat() {
  const newPrependCats = ["Arnold", ...cats];
  return newPrependCats;
};

function removeLastCat() {
  const lastCat = cats.slice(0, cats.length - 1);
  return lastCat;
};

function removeFirstCat() {
  const firstCat = cats.slice(1);
  return firstCat;
}; 

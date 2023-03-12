// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name);
};

function destructivelyPrependCat(name) {
  return cats.unshift(name);
};

function destructivelyRemoveLastCat() {
  return cats.pop();
};

function destructivelyRemoveFirstCat() {
  return cats.shift();
};

function appendCat(name) {
  const newAppendCats = [...cats, `${name}`];
  return newAppendCats;
};

function prependCat(name) {
  const newPrependCats = [`${name}`, ...cats];
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

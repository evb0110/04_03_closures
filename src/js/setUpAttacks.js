function setUpAttacks(items, shield = true) {
  return items.map((_, iAttacked, items) => {
    return loss => {
      const lossArray = makeLossArray(loss, iAttacked, items, shield);
      return applyLoss(items, lossArray);
    };
  });
}

function makeLossArray(loss, iAttacked, items, shield) {
  const aliveIndices = makeAliveIndices(items);
  const aliveNumber = aliveIndices.length;
  const lossShare = Math.floor(loss / aliveNumber);
  const lossRemainder = loss % aliveNumber;
  return items.map((_, i) => {
    if (!shield) {
      return i === iAttacked ? loss : 0;
    }
    if (aliveIndices.includes(i)) {
      return lossShare + (i === iAttacked ? lossRemainder : 0);
    }
    return 0;
  });
}

function positiveDifference(a, b) {
  return a - b > 0 ? a - b : 0;
}

function applyLoss(items, lossArray) {
  return items.map((item, i) => {
    const loss = lossArray[i];
    const currentHealth = item.health;
    const modifiedHealth = positiveDifference(currentHealth, loss);
    return {...item, health: modifiedHealth};
  });
}

function makeAliveIndices(items) {
  // Returns the indices of all the characters that are alive
  return items.reduce((acc, item, i) => {
    if (item.health > 0) return [...acc, i];
    return acc;
  }, []);
}

let characters = [
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
  { name: "мечник", health: 10 }
];

const attacks = setUpAttacks(characters);

characters = attacks[1](200); // атакуем лучника 9 баллами урона

console.log(characters);

export { makeLossArray, positiveDifference, applyLoss };

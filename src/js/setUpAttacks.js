function setUpAttacks(items, shield = true) {
  const aliveIndices = alive(items);
  const aliveNumber = aliveIndices.length;

  return items.map((item, i, items) => {
    return (loss) => {
      const lossShare = Math.floor(loss / aliveNumber);
      const lossRemainder = loss % aliveNumber;
      return items.reduce((acc, currentItem, idx) => {
        const resultantItem = {...currentItem};
        if (aliveIndices.includes(idx)) {
          const newHealth = currentItem.health - lossShare - (idx === i ? lossRemainder : 0);
          const resultantHealth = newHealth > 0 ? newHealth : 0;
          resultantItem.health = resultantHealth;
        }
        return [...acc, resultantItem];
      }, []);
    };
  });
}

function alive(items) {
  // Returns the indices of all the characters that are alive
  return items.reduce((acc, item, i) => {
    if (item.health > 0) return [...acc, i];
    return acc;
  }, []);
}

let characters = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]

const attacks = setUpAttacks(characters);

characters = attacks[1](200); // атакуем лучника 9 баллами урона

console.log(characters)

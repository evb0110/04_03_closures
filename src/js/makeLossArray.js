// this module contains makeLossArray and its dependency makeAliveIndices


function makeAliveIndices(items) {
  // Returns the indices of all the characters that are alive
  return items.reduce((acc, item, i) => {
    if (item.health > 0) return [...acc, i];
    return acc;
  }, []);
}

function makeLossArray(loss, iAttacked, items, shield) {
  if (!shield) {
    // without shield attacking only one character
    return items.map((_, i) => (i === iAttacked ? loss : 0));
  }

  const aliveIndices = makeAliveIndices(items);
  const aliveNumber = aliveIndices.length;
  const lossShare = Math.floor(loss / aliveNumber);
  const lossRemainder = loss % aliveNumber;
  return items.map((_, i) => {
    if (aliveIndices.includes(i)) {
      // attacking only characters that are alive
      return lossShare + (i === iAttacked ? lossRemainder : 0);
      // the initially attacked character takes not only the common lossShare,
      // but the remainder (if any) as well
    }
    return 0;
    // all the dead characters remain intact
  });
}

export { makeLossArray, makeAliveIndices };

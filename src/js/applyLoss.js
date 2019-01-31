// this module contains applyLoss and its dependency positiveDifference

function applyLoss(items, lossArray) {
  return items.map((item, i) => {
    const loss = lossArray[i];
    const currentHealth = item.health;
    const modifiedHealth = positiveDifference(currentHealth, loss);
    return { ...item,
      health: modifiedHealth
    };
  });
}


function positiveDifference(a, b) {
  return a - b > 0 ? a - b : 0;
}

export { applyLoss, positiveDifference };
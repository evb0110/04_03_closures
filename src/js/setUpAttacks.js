// this module contains the main program setUpAttack,
// that produces an array of function through a closure,
// so that they have access to item and shield variables

import { applyLoss } from './applyLoss.js';
import { makeLossArray } from './makeLossArray.js';

function setUpAttacks(items, shield = true) {
  return items.map((_, iAttacked, items) => {
    // for each item returns attack function
    return loss => {
      const lossArray = makeLossArray(loss, iAttacked, items, shield);
      return applyLoss(items, lossArray);
    };
  });
}

export default setUpAttacks;

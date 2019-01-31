// this module contains the main function setUpAttack,
// that produces an array of functions through a closure,
// so that they have access to item and shield variables

import { applyLoss } from './applyLoss';
import { makeLossArray } from './makeLossArray';

function setUpAttacks(items, shield = true) {
  return items.map((_, iAttacked, arr) => (loss) => {
    const lossArray = makeLossArray(loss, iAttacked, arr, shield);
    return applyLoss(items, lossArray);
  });
}

export default setUpAttacks;

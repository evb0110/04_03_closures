import { makeLossArray, positiveDifference, applyLoss } from "./setUpAttacks";

test("testing makeLossArray with simple data with shield", () => {
  const characters = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 }
  ];
  const loss = 9;
  const makeResult = () => makeLossArray(loss, 1, characters, true);
  expect(makeResult()).toEqual([3, 3, 3]);
});

test("testing makeLossArray with simple data without shield", () => {
  const characters = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 }
  ];
  const loss = 9;
  const makeResult = () => makeLossArray(loss, 1, characters, false);
  expect(makeResult()).toEqual([0, 9, 0]);
});

test("testing makeLossArray with complex data (one dead and lossRemainder != 0) with shield", () => {
  const characters = [
    { name: "маг", health: 0 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 }
  ];
  const loss = 41;
  const makeResult = () => makeLossArray(loss, 1, characters, true);
  expect(makeResult()).toEqual([0, 21, 20]);
});

test("testing positiveDifference with trivial data", () => {
  expect(positiveDifference(100, 58)).toBe(42);
});

test("testing positiveDifference with non-trivial data 1", () => {
  expect(positiveDifference(2, 10)).toBe(0);
});

test("testing positiveDifference with non-trivial data 2", () => {
  expect(positiveDifference(3, 3)).toBe(0);
});

test("testing applyLoss with trivial data", () => {
  const items = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 }
  ];
  const lossArray = [3,3,3]
  const makeResult = () => applyLoss(items, lossArray);
  const expected = [
    {name: 'маг', health: 97},
    {name: 'лучник', health: 77},
    {name: 'мечник', health: 7},
  ];
  expect(makeResult()).toEqual(expected);
});

test("testing applyLoss with non-trivial data", () => {
  const items = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 0 },
    { name: "мечник", health: 10 }
  ];
  const lossArray = [10,13,23]
  const makeResult = () => applyLoss(items, lossArray);
  const expected = [
    {name: 'маг', health: 90},
    {name: 'лучник', health: 0},
    {name: 'мечник', health: 0},
  ];
  expect(makeResult()).toEqual(expected);
});

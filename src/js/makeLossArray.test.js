import {
  makeLossArray,
  makeAliveIndices,
} from './makeLossArray';

describe('TESTING makeLossArray', () => {
  test('testing makeLossArray with simple data with shield', () => {
    const characters = [{
      name: 'маг',
      health: 100,
    },
    {
      name: 'лучник',
      health: 80,
    },
    {
      name: 'мечник',
      health: 10,
    },
    ];
    const loss = 9;
    const makeResult = () => makeLossArray(loss, 1, characters, true);
    expect(makeResult()).toEqual([3, 3, 3]);
  });

  test('testing makeLossArray with simple data without shield', () => {
    const characters = [{
      name: 'маг',
      health: 100,
    },
    {
      name: 'лучник',
      health: 80,
    },
    {
      name: 'мечник',
      health: 10,
    },
    ];
    const loss = 9;
    const makeResult = () => makeLossArray(loss, 1, characters, false);
    expect(makeResult()).toEqual([0, 9, 0]);
  });

  test('testing makeLossArray with complex data (one dead and lossRemainder != 0) with shield', () => {
    const characters = [{
      name: 'маг',
      health: 0,
    },
    {
      name: 'лучник',
      health: 80,
    },
    {
      name: 'мечник',
      health: 10,
    },
    ];
    const loss = 41;
    const makeResult = () => makeLossArray(loss, 1, characters, true);
    expect(makeResult()).toEqual([0, 21, 20]);
  });
});

describe('TESTING makeAliveIndices', () => {
  const characters = [{
    name: 'маг',
    health: 0,
  },
  {
    name: 'йог',
    health: 80,
  },
  {
    name: 'дух',
    health: 0,
  },
  {
    name: 'пух',
    health: 10,
  },
  {
    name: 'пих',
    health: 1000,
  },
  {
    name: 'чел',
    health: 0,
  },
  ];
  expect(makeAliveIndices(characters)).toEqual([1, 3, 4]);
});

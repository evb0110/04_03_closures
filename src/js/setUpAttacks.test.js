import setUpAttacks from './setUpAttacks';


describe('TESTING main function setUpAttacks', () => {
  test('testing with trivial data', () => {
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
    const attacks = setUpAttacks(characters);

    const result = attacks[1](9);
    const expected = [{
      name: 'маг',
      health: 97,
    },
    {
      name: 'лучник',
      health: 77,
    },
    {
      name: 'мечник',
      health: 7,
    },
    ];

    expect(result).toEqual(expected);
  });

  test('testing with non-trivial data', () => {
    const characters = [{
      name: 'маг',
      health: 0,
    },
    {
      name: 'лучник',
      health: 10,
    },
    {
      name: 'мечник',
      health: 15,
    },
    ];
    const attacks = setUpAttacks(characters);

    const result = attacks[2](25);
    const expected = [{
      name: 'маг',
      health: 0,
    },
    {
      name: 'лучник',
      health: 0,
    },
    {
      name: 'мечник',
      health: 2,
    },
    ];

    expect(result).toEqual(expected);
  });

  test('testing without shield', () => {
    const characters = [{
      name: 'маг',
      health: 20,
    },
    {
      name: 'лучник',
      health: 30,
    },
    {
      name: 'мечник',
      health: 45,
    },
    ];
    const attacks = setUpAttacks(characters, false);

    const result = attacks[1](31);
    const expected = [{
      name: 'маг',
      health: 20,
    },
    {
      name: 'лучник',
      health: 0,
    },
    {
      name: 'мечник',
      health: 45,
    },
    ];

    expect(result).toEqual(expected);
  });
});

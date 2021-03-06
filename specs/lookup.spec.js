const eno = require('../eno.js');

const sample = `
color: cyan
close:up
# notes
-- long
is
-- long
`.trim();

const scenarios = [
  {
    element: 'color', // 'o'
    index: [3],
    zone: 'name'
  },
  {
    element: 'color', // 'o'
    index: [0, 3],
    zone: 'name'
  },
  {
    element: 'color', // ' '
    index: [6],
    zone: 'nameOperator'
  },
  {
    element: 'color', // ' '
    index: [0, 6],
    zone: 'nameOperator'
  },
  {
    element: 'color', // 'c'
    index: [7],
    zone: 'value'
  },
  {
    element: 'color', // 'c'
    index: [0, 7],
    zone: 'value'
  },
  {
    element: 'close', // 'u'
    index: [18],
    zone: 'value'
  },
  {
    element: 'close', // 'u'
    index: [1, 6],
    zone: 'value'
  },
  {
    element: 'notes', // '#'
    index: [21],
    zone: 'sectionOperator'
  },
  {
    element: 'notes', // '#'
    index: [2, 0],
    zone: 'sectionOperator'
  },
  {
    element: 'notes', // 's'
    index: [27],
    zone: 'name'
  },
  {
    element: 'notes', // 's'
    index: [2, 6],
    zone: 'name'
  },
  {
    element: 'long', // 'i'
    index: [37],
    zone: 'content'
  },
  {
    element: 'long', // 'i'
    index: [4, 0],
    zone: 'content'
  },
  {
    element: 'long', // 'n'
    index: [45],
    zone: 'name'
  },
  {
    element: 'long', // 'n'
    index: [5, 5],
    zone: 'name'
  }
];

describe('Element/Token lookup', () => {
  const document = eno.parse(sample);

  for(let scenario of scenarios) {

    describe(`at (${scenario.index.join(', ')})`, () => {
      const lookup = document.lookup(...scenario.index);

      it(`looks up element '${scenario.element}'`, () => {
        expect(lookup.element.name).toEqual(scenario.element);
      });

      it(`looks up token '${scenario.zone}'`, () => {
        expect(lookup.zone).toEqual(scenario.zone);
      });
    });

  }
});

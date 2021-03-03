import { filterChampions, orderChampions, computeStats} from '../src/data.js';
import data from '../src/data/lol/lol.js';

describe('Filtrado de Campeones', () => {
  it('is a function', () => {
    expect(typeof filterChampions).toBe('function');
  });

  it('deberia retornar un Array de Objetos al filtrar por rol Mage', () => {
    expect(typeof filterChampions(Object.values(data.data), 'Mage')).toBe('object');
  });

  it('deberia retornar Array de Objetos', () => {
    expect(filterChampions([{name: 'abc', edad:10, tags: 'mage'}], 'mage')).toStrictEqual([{name: 'abc', edad:10, tags: 'mage'}]);
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => filterChampions()).toThrow(TypeError);
    expect(() => filterChampions(0)).toThrow(TypeError);
    expect(() => filterChampions(null, [])).toThrow(TypeError);
    expect(() => filterChampions(0, 0)).toThrow(TypeError);
  });
});


describe('Ordenar Campeones', () => {
  it('is a function', () => {
    expect(typeof orderChampions).toBe('function');
  });

  it('Debería retornar un array ordenado de la A a la Z de acuerdo a su nombre', () => {
    expect(orderChampions([{name: 'abc', edad:10, tags: 'Mage'}, {name: 'bca', edad:12, tags: 'Tank'},
    {name: 'cba', edad:14, tags: 'Marksman'}], 'name', 'aZ')).toStrictEqual([{name: 'abc', edad:10, tags: 'Mage'}, {name: 'bca', edad:12, tags: 'Tank'},
    {name: 'cba', edad:14, tags: 'Marksman'}]);
  });

  it('Debería retornar un array ordenado de la A a la Z, incluyendo valores repetidos', () => {
    expect(orderChampions([{name: 'cba'}, {name: 'cba'}, {name:'zas'},{name:'rty'}], 'name', 'aZ')).toStrictEqual([{name:'cba'}, {name: 'cba'}, {name:'rty'}, {name:'zas'}]);
  });

  it('Debería retornar un array ordenado de la Z a la A de acuerdo a su nombre', () => {
    expect(orderChampions([{name: 'cba', edad:14, tags: 'Marksman'}, {name: 'bca', edad:12, tags: 'Tank'},{name: 'abc', edad:10, tags: 'Mage'}
    ], 'name', 'zA')).toStrictEqual([{name: 'cba', edad:14, tags: 'Marksman'}, {name: 'bca', edad:12, tags: 'Tank'}, {name: 'abc', edad:10, tags: 'Mage'}
    ]);
  });

  it('Debería retornar un array ordenado de la Z a la A, incluyendo valores repetidos', () => {
    expect(orderChampions([{name: 'cba'}, {name: 'cba'}, {name:'zas'},{name:'rty'}], 'name', 'zA')).toStrictEqual([{name:'zas'}, {name:'rty'},{name: 'cba'}, {name: 'cba'}]); 
    
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => orderChampions()).toThrow(TypeError);
    expect(() => orderChampions(0)).toThrow(TypeError);
    expect(() => orderChampions(null, "", "")).toThrow(TypeError);
    expect(() => orderChampions(0, 0, 0)).toThrow(TypeError);
    
  });
});


describe('Valores min y max por stats' , () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  it('Debería retornar un array con valores mínimo y máximo', () => {
    expect(computeStats([12, 4, 6, 2])).toStrictEqual([2, 12]);
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => computeStats()).toThrow(TypeError);
    expect(() => computeStats(0)).toThrow(TypeError);
    expect(() => computeStats(null)).toThrow(TypeError);
    expect(() => computeStats(0, 0)).toThrow(TypeError);
  });
});
 
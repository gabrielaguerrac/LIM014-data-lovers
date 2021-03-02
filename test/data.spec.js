import { filterChampions, orderChampions, computeStats } from '../src/data.js';


describe('Filtrado de Campeones', () => {
  it('is a function', () => {
    expect(typeof filterChampions).toBe('function');
  });

  it('deberia retornar un objeto', () => {
    expect(typeof filterChampions(object, string)).toBe('object');//duda
  });

  // it('deberia retornar true ', () => {
  //   expect(filterChampions({name: 'abc', edad:10, tags: 'mage'}, 'mage')).toBe(true);
  // });//duda: 

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

  // it('returns `anotherExample`', () => {
  //   expect(anotherExample()).toBe('OMG');
  // });
});


describe('Valores min y max por stats' , () => {
  it('is a function', () => {
    expect(typeof computeStats).toBe('function');
  });

  // it('returns `anotherExample`', () => {
  //   expect(anotherExample()).toBe('OMG');
  // });
});
 
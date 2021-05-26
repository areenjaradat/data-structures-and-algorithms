'use strict';

const multiBracketValidation=require('../multi-bracket-validation');

describe('test multi-bracket-validation',()=>{
  it('testing ',()=>{
    expect(multiBracketValidation('{}')).toBeTruthy();
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
    expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();

    expect(multiBracketValidation('[({}]')).toBeFalsy();
    expect(multiBracketValidation('(](')).toBeFalsy();
  });
});

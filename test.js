import test from 'ava';
import regs from './';
import toType from 'to-type';

test('title', t => {
  t.is(toType(regs.yeoman()), 'regexp');
  t.is(regs.yeoman().exec('<% var1 %>')[1], 'var1');
  t.is(regs.yeoman().exec('<%= var1 %>')[1], 'var1');

  const myReg = regs.yeoman('g');
  t.is(myReg.exec('<% var1 %><% var2 %>')[1], 'var1');
  t.is(myReg.exec('<% var1 %><% var2 %>')[1], 'var2');
});

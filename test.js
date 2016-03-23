import test from 'ava';
import regs from './';
import toType from 'to-type';

test('yeoman', t => {
  t.is(toType(regs.yeoman()), 'regexp');
  t.is(regs.yeoman().exec('<% var1a %>')[1], 'var1a');
  t.is(regs.yeoman().exec('<%= var1b %>')[1], 'var1b');

  const myReg = regs.yeoman('g');
  t.is(myReg.exec('<% var2a %><% var2b %>')[1], 'var2a');
  t.is(myReg.exec('<% var2a %><% var2b %>')[1], 'var2b');
});

test('trim', t => {
  t.is(toType(regs.trim()), 'regexp');
  t.is(regs.trim().exec(' var1a ')[1], 'var1a');
  t.is(regs.trim().exec('var1b   ')[1], 'var1b');
});

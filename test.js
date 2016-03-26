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
  t.true(regs.trim().test(' a '));
  t.is(regs.trim().exec(' var1a ')[1], 'var1a');
});

test('email', t => {
  t.is(toType(regs.email()), 'regexp');
  t.true(regs.email().test('a@gmail.com'));
  t.same((regs.email().exec('hi@me.io')).slice(1, 4), ['hi', 'me', 'io']);
});

test('issue', t => {
  t.is(toType(regs.githubIssue()), 'regexp');
  t.true(regs.githubIssue().test('#4'));
  t.same(regs.githubIssue().exec('#100')[1], '100');

  const myReg = regs.githubIssue('g');
  t.is(myReg.exec('#98 #99')[1], '98');
  t.is(myReg.exec('#98 #99')[1], '99');
});

test('issue', t => {
  t.is(toType(regs.markdownHeader()), 'regexp');
  t.true(regs.markdownHeader(1).test('#header one'));
  t.false(regs.markdownHeader(2).test('#header one'));

  t.true(regs.markdownHeader(1, 'g').test('#header one'));
  t.same(regs.markdownHeader(2).exec('##header two')[1], 'header two');
  t.same(regs.markdownHeader(2, 'g').exec('## header two')[1], 'header two');

  const myReg = regs.markdownHeader(3, 'gm');
  t.is(myReg.exec('###header 3 #\n###   second header')[1], 'header 3 #');
  t.is(myReg.exec('###header 3 #\n###   second header')[1], 'second header');
});

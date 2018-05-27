import isStarting from 'draft-league-frontend-ember/utils/is-starting';
import { module, test } from 'qunit';

module('Unit | Utility | is starting');

const memberFull = {
  players: [
    {
      pos: 'GK'
    },
    {
      pos: 'DEF'
    },
    {
      pos: 'DEF'
    },
    {
      pos: 'DEF'
    },
    {
      pos: 'DEF'
    },
    {
      pos: 'MID'
    },
    {
      pos: 'MID'
    },
    {
      pos: 'MID'
    },
    {
      pos: 'MID'
    },
    {
      pos: 'ST'
    },
    {
      pos: 'ST'
    },
  ],
};

const memberSpace = {
  players: [
    {
      pos: 'DEF'
    },
    {
      pos: 'DEF'
    },
    {
      pos: 'DEF'
    },
    {
      pos: 'MID'
    },
    {
      pos: 'MID'
    },
    {
      pos: 'MID'
    },
    {
      pos: 'ST'
    },
  ],
};

const GK = {
  pos: 'GK'
};

const DEF = {
  pos: 'DEF'
};

const MID = {
  pos: 'MID'
};

const ST = {
  pos: 'ST'
};

test('GK position filled', function(assert) {
  let result = isStarting(memberFull, GK);
  assert.notOk(result);
});

test('DEF position filled', function(assert) {
  let result = isStarting(memberFull, DEF);
  assert.notOk(result);
});

test('MID position filled', function(assert) {
  let result = isStarting(memberFull, MID);
  assert.notOk(result);
});

test('ST position filled', function(assert) {
  let result = isStarting(memberFull, ST);
  assert.notOk(result);
});

test('GK position not filled', function(assert) {
  let result = isStarting(memberSpace, GK);
  assert.ok(result);
});

test('DEF position not filled', function(assert) {
  let result = isStarting(memberSpace, DEF);
  assert.ok(result);
});

test('MID position not filled', function(assert) {
  let result = isStarting(memberSpace, MID);
  assert.ok(result);
});

test('ST position not filled', function(assert) {
  let result = isStarting(memberSpace, ST);
  assert.ok(result);
});

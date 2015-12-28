import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('supportersplace functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('supportersplace main page shows up', function() {
  F('title').text('supportersplace', 'Title is set');
});

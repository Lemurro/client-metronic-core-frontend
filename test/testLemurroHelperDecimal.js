QUnit.test('lemurro.helper.decimal() return 0', function (assert) {
    assert.ok(lemurro.helper.decimal(null) === 0, 'lemurro.helper.decimal(null) === 0');
    assert.ok(lemurro.helper.decimal(undefined) === 0, 'lemurro.helper.decimal(undefined) === 0');
    assert.ok(lemurro.helper.decimal(NaN) === 0, 'lemurro.helper.decimal(NaN) === 0');
    assert.ok(lemurro.helper.decimal('') === 0, 'lemurro.helper.decimal("") === 0');
    assert.ok(lemurro.helper.decimal('    ') === 0, 'lemurro.helper.decimal("MANY-SPACES-HERE") === 0');
    assert.ok(lemurro.helper.decimal('{123,340}') === 0, 'lemurro.helper.decimal("{123,340}") === 0');
    assert.ok(lemurro.helper.decimal('[123.34]') === 0, 'lemurro.helper.decimal("[123.34]") === 0');
});

QUnit.test('lemurro.helper.decimal() without precision (default precision: 2)', function (assert) {
    assert.ok(lemurro.helper.decimal('123,340') === 123.34, 'lemurro.helper.decimal("123,340") === 123.34');
    assert.ok(lemurro.helper.decimal(' 1 230,340 ') === 1230.34, 'lemurro.helper.decimal(" 1 230,340 ") === 1230.34');
    assert.ok(lemurro.helper.decimal(123.34) === 123.34, 'lemurro.helper.decimal(123.34) === 123.34');
    assert.ok(lemurro.helper.decimal(123.3) === 123.3, 'lemurro.helper.decimal(123.3) === 123.3');
});

QUnit.test('lemurro.helper.decimal() usage wrong precision', function (assert) {
    assert.ok(lemurro.helper.decimal(123.345, null) === 123.34, 'lemurro.helper.decimal(123.345, null) === 123.34');
    assert.ok(lemurro.helper.decimal(123.345, undefined) === 123.34, 'lemurro.helper.decimal(123.345, undefined) === 123.34');
    assert.ok(lemurro.helper.decimal(123.345, NaN) === 123.34, 'lemurro.helper.decimal(123.345, NaN) === 123.34');
    assert.ok(lemurro.helper.decimal(123.345, '') === 123.34, 'lemurro.helper.decimal(123.345, "") === 123.34');
    assert.ok(lemurro.helper.decimal(123.345, '    ') === 123.34, 'lemurro.helper.decimal(123.345, "MANY-SPACES-HERE") === 123.34');
    assert.ok(lemurro.helper.decimal(123.345, '{123,340}') === 123.34, 'lemurro.helper.decimal(123.345, "{123,340}") === 123.34');
    assert.ok(lemurro.helper.decimal(123.345, '[123.34]') === 123.34, 'lemurro.helper.decimal(123.345, "[123.34]") === 123.34');
    assert.ok(lemurro.helper.decimal(123.345, '2.0') === 123.34, 'lemurro.helper.decimal(123.345, "2.0") === 123.34');
    assert.ok(lemurro.helper.decimal(123.345, '3') === 123.34, 'lemurro.helper.decimal(123.345, "3") === 123.34');
});

QUnit.test('lemurro.helper.decimal() usage precision', function (assert) {
    assert.ok(lemurro.helper.decimal(123.345, 2) === 123.34, 'lemurro.helper.decimal(123.345, 2) === 123.34');
    assert.ok(lemurro.helper.decimal(123.345, 5) === 123.345, 'lemurro.helper.decimal(123.345, 5) === 123.345');
    assert.ok(lemurro.helper.decimal(123.3455688, -1) === 123.3455688, 'lemurro.helper.decimal(123.3455688, -1) === 123.3455688');
});
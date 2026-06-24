import assert from 'node:assert/strict';
import test from 'node:test';
import { projects } from '../src/site.js';

test('portfolio project data includes three complete projects', () => {
  assert.equal(projects.length, 3);

  for (const project of projects) {
    assert.ok(project.title);
    assert.ok(project.description);
    assert.ok(project.tag);
  }
});

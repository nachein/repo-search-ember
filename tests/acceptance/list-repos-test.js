import { test } from 'qunit';
import moduleForAcceptance from 'github-repos/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should have search input', (assert) => {
  expect(2);
  visit('/');

  andThen(() => {
    assert.equal(this.$('.search-box').length, 1, "should see an input field");
    assert.equal(this.$('.search-action').length, 1, "should see a search button");
  });
});

test('should list user repos', (assert) => {
  expect(1);
  visit('/search?user=foo');

  andThen(() => {
    assert.equal(this.$('.repo').length, 2, "should see 2 repos listed");
  });
});

test('should redirect to github repo', (assert) => {
  expect(1);
  visit('/');
  fillIn('.search-box', 'nacho');
  click('a:contains("Search")');
  andThen(() => {
    assert.equal(currentURL(), '/search?user=nacho');
  });
});

test('should show no repos message', (assert) => {
  expect(2);
  visit('/search?user=norepos');
  andThen(() => {
    assert.equal(this.$('.repo').length, 0, "should not list any repos");
    assert.equal(this.$('.error-msg').text(), "User has no repositories", "should show no repos message");
  });
});

test('should handle service errors', (assert) => {
  
});

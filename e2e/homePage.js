import { Selector } from 'testcafe';

fixture `Getting Started`
  .page `http://localhost:3000`;

test('Should select button when click', async t => {
  const voteUpButton = Selector('[data-test-class="vote-up"]');
  await t.click(voteUpButton)
  const style = await voteUpButton.style;
  // Testcafe uses getComputedStyle for this reason cant get shorthand border property
  await t.expect(style['outline-color']).eql('rgb(255, 255, 255)');
});

test('Should show message after vote', async t => {
  const voteUpButton = Selector('[data-test-class="vote-up"]');
  const voteButton = Selector('[data-test-class="vote"]');
  await t.click(voteUpButton)
  await t.click(voteButton);
  await t.expect(Selector('[data-test-class="vote-confirmation"]').innerText).contains('Thank you for voting!');
});

// Jaime Restrepo
// 14 Waits
// Using a custom timeout instead of a manual timeout


import { Selector } from 'testcafe';

fixture('Without manual timeout example')
    .page('https://the-internet.herokuapp.com/dynamic_loading/1')
    .beforeEach(async t => console.log('The test have been started...'))
    .afterEach(async t => console.log('The test have been concluded'));

test('Wait after clicking a button', async t => {
    
    const button = Selector('div#start button');
    const loadedText = Selector('div#finish h4');
    
    await t.click(button);

    // Using a custom timeout instead of a manual timeout:
    await t.expect(loadedText.innerText).eql('Hello World!',{timeout: 5000});   
   }
);

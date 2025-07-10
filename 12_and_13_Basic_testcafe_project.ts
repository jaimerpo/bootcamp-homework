// Jaime Restrepo
// 12 and 13 TestCafe introduction
// Basic Testcafe project.


import { Selector } from 'testcafe';
fixture('Basic Tests')
    .page('https://the-internet.herokuapp.com/add_remove_elements/')
    .beforeEach(async t => console.log('The test have been started...'))
    .afterEach(async t => console.log('The test have been concluded'));

test('Test for add/remove buttons', async t => {
    
    const addElementButton = Selector('div.example button');
    const deleteElementButton = Selector('div#elements button');

    await t
        .expect(addElementButton.exists).ok()
        .click(addElementButton);

    await t
        .expect(deleteElementButton.exists).ok()
        .click(deleteElementButton)

    await t
        .expect(deleteElementButton.exists).notOk()
        .click(addElementButton)
        .click(addElementButton)

    await t.expect(deleteElementButton.count).eql(2);
   }
);

//
//testcafe chrome tests/suites/test_instagram.js

import ExamplePage from "../page_model/instagram_model";

const page = new ExamplePage();

fixture `Getting Started`
    .page `https://www.instagram.com/accounts/login/?`;

test("input name", async t => {
    const name = 'fofawam582@smlmail.com';
    const pass = 'GenericPassword1';
  await t
    .typeText(page.inputName, name)
    .typeText(page.inputPass, pass)
    //.wait(6000)
    .click(page.submitButton)
    .wait(10000);
/*
    .click(page.firstCheckBox)
    .click(page.secondCheckBox)
    .click(page.thirdCheckBox)
    .click(page.sixthCheckBox)
    .click(page.triedTestCafe)
    
    .typeText(
      page.comments,
      "REALIZANDO UN COMENTARIO CON TESTCAFE"
    )
    */

});
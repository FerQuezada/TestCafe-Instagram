import { Selector, t } from "testcafe";

export default class ExamplePage {
  constructor() {
    this.inputName = Selector("input[name=username]");
    this.inputPass = Selector("input[name=password]");
    //this.submitButton = Selector("button[class=sqdOP  L3NKy   y3zKF     ]");
    this.submitButton = Selector('div').withExactText('Iniciar sesión');
  }
}
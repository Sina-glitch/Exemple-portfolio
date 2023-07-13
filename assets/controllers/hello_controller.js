import { Controller } from '@hotwired/stimulus';

/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */

export default class extends Controller {
 // static targets = [ "name", "output" ]
  static targets = [ "val1",'val2', "output" ]
 
  greet() {
    this.outputTarget.textContent =
      `Hello, ${this.nameTarget.value}!`
  }
  maMethod() {
    let a = parseInt(this.val1Target.value);
    let b = parseInt(this.val2Target.value);
    
    this.outputTarget.textContent =
      `résultat =  ${a*b}`;
  }
   
}
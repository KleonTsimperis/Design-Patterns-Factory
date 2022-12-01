/*
 *** FACTORY - CREATIONAL ***
 *
 * Instead of using the new keyword to instantiate you use a function
 *
 */

class IOSButton {}
class AndroidButton {}

// Without Factory - using a bunch of conditional checking and new keywords, hard to maintain
const button1 = (os) => (os === 'ios' ? new IOSButton() : new AndroidButton());
const button2 = (os) => (os === 'ios' ? new IOSButton() : new AndroidButton());

// Instead create a subclass or function to determine which object to instantiate
class ButtonFactory {
  createButton(os) {
    if (os === 'ios') {
      return new IOSButton();
    } else {
      return new AndroidButton();
    }
  }
}

// With Factory
const factory = new ButtonFactory();
const bt1 = factory.createButton('ios');

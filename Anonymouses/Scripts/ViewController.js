/**
 * Created by haleyrequa on 2017-04-26.
 */
// class ViewController {


class View {
    Awake(){
        alert("View - Awake");
    }
    Awake1(){
        alert("View - Awake1");
    }
}

var viewStack = [
    new PhoneView(),
    new CallingView()
];

var currentView = viewStack[0];

/**
 * Bool
 */
var update;

function Open(view) {

    viewStack[0].Awake();
    viewStack[1].Awake();
    viewStack[0].Awake1();
    viewStack[1].Awake1();

    // if(currentView !== null)
    //     currentView.Close();
    //
    // currentView = viewStack[0];
    //
    // currentView.Awake();
    // currentView.Open ();
    //
    // Update();
}

function Update() {
    update = true;
    while(update) {
        currentView.Update();
    }
}
//
// function PhoneView() {
//     // $.'<img class="phone" onclick="ViewController.CallingView()" src="Images/phone.jpeg">';
// }
//
// function CallingView() {
//     return '<div></div>';
// }
// }
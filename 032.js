alert(a);

function bb() {
    a = 2;

}

function cc() {
    var a = 3;
}
bb();
alert(a);
cc();
alert(a);
alert(window.a);
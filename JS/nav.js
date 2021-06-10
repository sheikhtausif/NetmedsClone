let penEdit = document.getElementById('penEdit');
penEdit.addEventListener('click', function () {
    let editH4 = document.getElementById('editH4');
    editH4.contentEditable = "true";

    editH4.focus();

    // Creates range object
    var setPos = document.createRange();

    // Creates object for selection
    var set = window.getSelection();

    // Set start position of range
    setPos.setStart(editH4.childNodes[0], 6);

    // Collapse range within its boundary points
    // Returns boolean
    setPos.collapse(true);

    // Remove all ranges set
    set.removeAllRanges();

    // Add range with respect to range object.
    set.addRange(setPos);

});

// let navArrow = document.getElementsByClassName('navArrow');
// navArrow.addEventListener('mouseover', display);

// function display() {
//     let subNav = document.getElementsByClassName('subNav')

//     console.log("Hello")
// }
let medData = JSON.parse(localStorage.getItem('medData')) || []

let form = document.getElementById('booknow')
console.log(form)
form.addEventListener('click',FormData)

function FormData(e){
    e.preventDefault()
  let checkbox = document.getElementById('checkbox').checked;
  console.log(checkbox)
   let obj = {
       name:document.getElementById('name').value,
       mobile:document.getElementById('mobile').value,
       pin:document.getElementById('pin').value,
       package:document.getElementById('mySelect').value
   }
   document.getElementById('name').value = "";
   document.getElementById('mobile').value ="";
   document.getElementById('pin').value = "";
 
   console.log(obj)
   if(obj.name == "" || obj.mobile == "" || obj.pin == "" || obj.package == "Select" ){
       alert('Please Fill all the detail')
   }else if(checkbox == false){
        alert('Please Check on terms and conditions')
   }else{
    medData.push(obj)
    localStorage.setItem('medData',JSON.stringify(medData))
     setTimeout(() => {
        alert('Your Product will Deliverd Soon')
    },2000);
   }


}

// nav bar js

let penEdit = document.getElementById('penEdit');
penEdit.addEventListener('click', function () {
    let editH4 = document.getElementById('editH4');
    editH4.contentEditable = "true";

    editH4.focus();

    // Creates range object
    var setPos = document.createRange();

    // Creates object for selection
    var set = window.getSelection();
    console.log('set:', set)

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
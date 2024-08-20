// function Triangle(){
//     const Triangle_b = document.getElementById('Triangle-b').value;
//     const base = parseFloat(Triangle_b);

//     const Triangle_h = document.getElementById('Triangle-h').value;
//     const height = parseFloat(Triangle_h);

//     const total = 0.5 * base * height;
//     console.log(total);

//     const p = document.createElement('p');
//     p.innerText =`Triangle calculatio is: ${total}`;
//     document.getElementById('Area-Calculation').appendChild(p);
// }

// --------------------------------------Triangle----------------------------------
function Triangle(){
    caculate('Triangle-b','Triangle-h','Triangle');
}
// ---------------------------------------Rhombus-----------------------------------
function Rhombus(){
    caculate('Rhombus-d1','Rhombus-d2','Rhombus');
}
// ---------------------------------------Pentagon----------------------------------
function Pentagon(){
    caculate('Pentagon-p','Pentagon-b','Pentagon');
}


function caculate(i1,i2,iName){
    const input1 = inputField(i1);
    const input2 = inputField(i2);
    const itemName = iName;

    const total = 0.5 * input1 * input2;

    const p = document.createElement('p');
    p.innerText =`${itemName} calculation is: ${total}`;
    document.getElementById('Area-Calculation').appendChild(p);
}
function inputField(inputValue){
    const input = document.getElementById(inputValue);
    const inputField = input.value;
    const inputFloat = parseFloat(inputField);
    input.value='';
    return inputFloat;
}

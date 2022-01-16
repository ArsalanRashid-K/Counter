// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEL = document.getElementById("count-el");

//document.getElementById("count-el") has the id and we now put in in countEl connects html with javascript
// console.log(countEL)

let count = 0;
function increment() {
  count +=  1;
  countEL.textContent = count;
}
//the innerText ..forces the text into the id that is count. And count increases every time when i click so .. when i click on increment button ... onclick is used in which the function increment()  is called that already has a value of count[it doesnt matter if the value is 5 or anything]....
// console.log(count)

let saveEl = document.getElementById("save-el");
function save(){
    let countStr=count +'-'

    // saveEl.textContent +=countStr
    saveEl.textContenttStr
    
    countEL.innerText = 0;
    count=0

}


// QUESTION NO.1
function outerAddNum(outernum) {
    return function innerAddNum(innernum) {
        console.log(outernum + innernum);
    }
}
let innerAdd = outerAddNum(2);
innerAdd(6);




//QUESTION NO.2
let arr = [1, 2, 3, 4, 5, 79, 20];
let arrSize = arr.length;

function findElement(arr, arrSize, num) {
    if (arrSize < 0) {
        return false + "," + " element " + num + " is " + "not found";
    }
    else if (arr[arrSize] === num) {
        return true + "," + " element " + num + " is " + "found";
    }
    else {
        return findElement(arr, arrSize - 1, num);
    }
}
let elementFound = findElement(arr, arrSize, 7);
console.log(elementFound);






// QUESTION NO.3
let textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequuntur omnis placeat non aliquam veniam distinctio, modi ipsa recusandae quasi maiores porro aliquid quidem magnam fugiat nostrum temporibus sapiente accusamus! Nesciunt veritatis quae dolore iusto provident. Odio alias atque accusantium similique dignissimos velit sint temporibus maxime sapiente, cum optio autem iusto id ab iure reiciendis, at omnis corrupti necessitatibus nostrum corporis ut! Aliquam ipsa molestias animi illo quibusdam officia, maiores saepe et iste voluptatem ab temporibus quisquam ad fugit asperiores nemo rem. Perferendis libero dolor nemo non quae tenetur temporibus pariatur necessitatibus amet explicabo magnam modi voluptatibus nisi, sunt in.";
function addNewPara(textContent) {
    let newPara = document.createElement('p');
    document.body.append(newPara);
    newPara.innerText = textContent;
    newPara.id = "newpara";
    document.getElementById("newpara").style.position = "absolute";
    document.getElementById("newpara").style.bottom = "0px";

}
addNewPara(textContent);





// QUESTION NO.4

let newLiText = "Mango";
function addNewLiItem(newLiText) {
    let newLi = document.createElement('li');
    document.body.append(newLi);
    newLi.innerText = newLiText;
    document.querySelector('ul').appendChild(newLi);

}
addNewLiItem(newLiText);





// QUESTION NO.5
let elementRef = document.getElementById("firstpara");
let bgColor = "#00FFFF ";

function changeBg(elementRef, bgColor) {
    elementRef.style.backgroundColor = bgColor;
}
changeBg(elementRef, bgColor);


// QUESTION NO.6
let obj = {
    name: "izma",
    rollNo: "003",
    city: "karachi",
}

let key = "person";
function addObj(key, obj) {
    let newObj = JSON.stringify(obj)
    localStorage.setItem(key, newObj);
}
addObj(key, obj);



// QUESTION NO.7
function retrieveObj(key) {
    let previousData = localStorage.getItem(key);
    let returnedObj = JSON.parse(previousData);
    return returnedObj;
}
let retrievedObj = retrieveObj(key);
console.log(retrievedObj);




// QUESTION NO.8
let obj1 = {
    name: "izma",
    rollNo: 003,
    city: "karachi",
}
function saveAndRetreiveFromStorage(obj1) {
    for (let key in obj1) {
        localStorage.setItem(key, JSON.stringify(obj1[key]));
    }
    let newobj = {};
    for (let key in obj1) {
        newobj[key] = JSON.parse(localStorage.getItem(key));
    }
    return newobj;
}

let newobj = saveAndRetreiveFromStorage(obj1);
console.log(newobj);

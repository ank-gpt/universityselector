
const country = "india";
const input = document.querySelector(".input");
input.onkeyup = ()=>{ 
   university(input.value);
   console.log(input.value.length);
}
const suggest = document.querySelector(".suggest");
async function university(text){
    const response = await fetch(`http://universities.hipolabs.com/search?name=${text}&country=india`)
    const data = await response.json();
    arr = [];
    if(input.value.length){  
    arr = data;
    arr.forEach((element,index) => {
        ele = `<div onclick = fun(this)>${element.name}</div>`;
        arr[index] = ele;
    });
    suggest.innerHTML = arr ;
    document.getElementById("_suggest").style.display = "flex"; 
}else{
    suggest.innerHTML = "";
    document.getElementById("_suggest").style.display = "none";
}
}
function fun(var_){
    input.value = var_.innerHTML;
}
// const name = "";
// const country = "india";

// const input = document.querySelector(".input");
// input.onkeyup = ()=>{
//    university(input.value);
// }
// async function university(text){
//     const response = await fetch(`http://universities.hipolabs.com/search?name=${text}&country=india`)
//     const data = await response.json();
//     const suggest = document.querySelector(".suggest");
//     arr = [];
//     if(input.value){
//     arr = data;
//     newarr = arr.map((ele)=>{
//         return `<div onclick = fun(this)>${ele.name}</div>`
//     })
//     suggest.innerHTML = newarr ;
// }else{
//     suggest.innerHTML = '';
// }
// }
// function fun(var_){
//     input.value = var_.innerHTML;
// }
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
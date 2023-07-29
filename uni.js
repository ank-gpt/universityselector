const name = "";
const country = "india";

const input = document.querySelector(".input");
input.onkeyup = ()=>{
   university(input.value);
}
async function university(text){
    const response = await fetch(`http://universities.hipolabs.com/search?name=${text}&country=india`)
    const data = await response.json();
    const suggest = document.querySelector(".suggest");
    arr = [];
    if(input.value){
    arr = data;
    newarr = arr.map((ele)=>{
        return `<div onclick = fun(this)>${ele.name}</div>`
        // += is string that's why it wasn't working
    })
    suggest.innerHTML = newarr ;
}else{
    suggest.innerHTML = '';
}
}
function fun(var_){
    input.value = var_.innerHTML;
}
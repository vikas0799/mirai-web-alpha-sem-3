function addtodo() {
    let input = document.querySelector("input")

    if(input.value==""){
        alert("bhai value to enter kar de");
        return ;
    }
    let li = document.createElement("li");
    // li.innerHTML = `${input.value}.  <button onclick="remove(this)">delete</button>`;
    li.innerHTML = `  <button onclick="remove(this)">${input.value}</button>`;
    let ul = document.querySelector("ul");
    ul.prepend(li);
    input.value = "";
}


function remove(element){
    console.log("hi");
    console.log(element);
    element.parentElement.remove();
    // element.remove();
    
}
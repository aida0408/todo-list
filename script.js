const textInput = document.querySelector(".text-input")
const addBtn = document.querySelector(".add-btn")
const list = document.querySelector(".list")


addBtn.addEventListener("click", () => {
    if (textInput.value.trim()) {
       list.innerHTML += `<li>
                         <input type="checkbox">
                         ${textInput.value}
                         <button class="del-btn">Удалить</button>
                         </li>`
        textInput.value = ""
    }
})

list.addEventListener("click", (event) => {
   if (event.target.classList[0] === "del-btn"){
       event.target.parentNode.remove()
   }
})

textInput.addEventListener("keyup",(event) => {
    let key = event.keyCode
    if(textInput.value.trim() && key === 13){
        const temlate = `<li class="list-item">
                         <input type="checkbox" class="done">
                         ${textInput.value}
                         <button class="del-btn">delete</button>
                         </li>`
        list.innerHTML += template
        textInput.value = ""
    }
})


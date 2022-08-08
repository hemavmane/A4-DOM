let form = document.querySelector(".myform")
let input = document.querySelector(".newinput")
let tasks = document.querySelector(".middeltask")
let tasks1 = document.querySelector(".righttask")
let check = document.querySelector(".check")


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let task = input.value


    if(task.length>0){
        let task_element=document.createElement("div")
        task_element.classList.add("task_elements")
        
        tasks.append(task_element)

        let task_inputelement=document.createElement("button")
        task_inputelement.classList.add("check")

        task_element.append(task_inputelement)

        let checkbox=document.createElement("input")
        checkbox.type="checkbox"
        checkbox.classList.add("checkinput")

        task_inputelement.append(checkbox)

        let task_inputelement2=document.createElement("input")
        task_inputelement2.classList.add("task_input")

task_inputelement2.type="text"
task_inputelement2.value=task

task_inputelement2.setAttribute("readonly","readonly")
task_element.append(task_inputelement2)


let editbutton = document.createElement("button")

editbutton.classList.add("edit")
editbutton.innerText="\u{1F58A}"

task_element.append(editbutton)


let deletebutton = document.createElement("button")

deletebutton.classList.add("delete")
deletebutton.innerText="\u{1F5D1}"

task_element.append(deletebutton)


input.value=""

editbutton.addEventListener("click",()=>{
if(editbutton.innerText=="\u{1F58A}"){
    editbutton.innerText="\u{1F5AB}"
    task_inputelement2.removeAttribute("readonly")
}else{editbutton.innerText="\u{1F58A}"
task_inputelement2.removeAttribute("readonly",readonly)
}


})
deletebutton.addEventListener("click",()=>{

tasks.removeChild(task_element)

})

task_inputelement.addEventListener("click",()=>{
    tasks1.append(task_element)
})


deletebutton.addEventListener("click",()=>{

    tasks1.removeChild(task_element)
    
    })
    }
})
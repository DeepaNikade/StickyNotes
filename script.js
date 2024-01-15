const textareaContent=document.querySelector("#l1text");
const colorInput=document.querySelector("#liColor");
const l1Button=document.querySelector(".leftContainer > button");
const rightAllNotes=document.querySelector(".rightNotesContainer");
const emptyNotesMessage=document.querySelector("#emptyNotes");



l1Button.addEventListener("click",(e)=>{
    if(textareaContent.value === ""){
        alert("Please input a text");
        return;
    }else{
        if(!emptyNotesMessage.classList.contains("hidden")){
            emptyNotesMessage.classList.add("hidden");
        }


        // creation of note with text and color
        let div=document.createElement("div");
        div.innerHTML=`
        <p>${textareaContent.value}</p>
        <span class="closeBtn">X</span>
        `  
             

        div.classList.add("notes");
        div.style.backgroundColor=colorInput.value;

        // adding note to notes part on right
        rightAllNotes.appendChild(div);

        // restesting the text area empty
        textareaContent.value="";

    }
})

rightAllNotes.addEventListener("click",(e)=>{
    // removes notes if we click X
    if(e.target.innerText==="X"){
        e.target.parentNode.remove();
    }
    // again show empty message
    if(rightAllNotes.children.length<2){
        emptyNotesMessage.classList.remove("hidden");
    }
})
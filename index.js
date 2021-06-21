let buttonContainer = document.querySelector("#container")


buttonContainer.addEventListener("click",handleClick)

function handleClick(e){
    let target = e.target
    if (target.classList.contains("remove-button")){
        target.parentNode.parentNode.removeChild(target.parentNode)
    }
}
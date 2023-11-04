/************************************* Game *************************************/

function imageDragStart(event)
{
    let image = event.target;
    event.dataTransfer.setData('Text', image.id);
}

function preventDefault(event)
{
    event.preventDefault();
}

function imageDrop(event)
{
    let imageId = event.dataTransfer.getData('Text');
    let image = document.getElementById(imageId);
    let box = event.target;

    image.style.display = "none";
    box.innerHTML = '<img id="' + image.id.toString() + '"' + ' src="' + image.src.toString() + '" />'
}

function reloadWindow()
{
    window.location.reload();
}

let emptyBoxes=document.querySelectorAll(".game-empty-box");
let imageBoxes=document.querySelectorAll(".game-img-boxes img");
let resetButton = document.querySelector("#reset");

for(box of emptyBoxes)
{
    box.addEventListener('dragover', (event)=> { preventDefault(event) } );
    box.addEventListener('drop', (event)=> { imageDrop(event) } );
}

for(box of imageBoxes)
{
    box.addEventListener('dragstart', (event)=> { imageDragStart(event) } );
}

resetButton.addEventListener('click', reloadWindow);

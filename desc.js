const description = document.querySelector(".description")
document.addEventListener("mousemove", (e) => {
    rotateElement(e, description)
})
function rotateElement(event, element) {
    const x = event.clientX
    const y = event.clientY

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x - middleX) / middleX) * 20;
    const offsetY = ((y - middleY) / middleY) * 20;

    element.style.setProperty("--rotateX", -1 * offsetY + "deg")
    element.style.setProperty("--rotateY", offsetX + "deg")
}
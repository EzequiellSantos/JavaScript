function adequarImagens(tema) {// adequa as imagens ao tema

    toBack.src = `Imagens/icons-Direct/toHome-${tema}-96.png`
  
}

document.querySelectorAll('.glow-button').forEach((a) => {
    const gradientItem = document.createElement('div');
    gradientItem.classList.add("gradient");

    a.appendChild(gradientItem)

    a.addEventListener("pointermove", (e) => {
        const rect = a.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        gsap.to(button, {
            "--pointer-x": `${x}px`,
            "--pointer-y":`${y}px`,
            duration: 0.6,
        })
    })
})
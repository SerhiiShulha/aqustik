const animatedTextBlock = (text, container) => {
    let i = 0;

    const updateText = () => {
        if (i < text.length) {
            container.innerHTML += text[i];
            i++;
        } else {
            clearInterval(interval);
            container.nextElementSibling.classList.add("inactive");
        }
    };

    const interval = setInterval(updateText, 150);
};

export const textAnimationInit = (text, container) => {
    setTimeout(() => animatedTextBlock(text, container), 800)
};
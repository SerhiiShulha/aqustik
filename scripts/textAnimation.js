const asyncForEach = async (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        await fn(arr[i]);
    }
};

const delay = ms => new Promise(res => setTimeout(res, ms));

const finish = (intervalId, container, fn) => {
    clearInterval(intervalId);
    container.nextElementSibling.classList.add("inactive");
    fn();
};

const addText = async (text, container) => {
    return new Promise(res => {
        let i = 0;
        const intervalAdd = setInterval(() => {
            if (i < text.length) {
                container.innerHTML += text[i];
                i++;
            } else {
                finish(intervalAdd, container, res);
            }
        }, 150);
    });
};

const removeText = async (text, container) => {
    return new Promise (res => {
        let i = 0;
        const intervalRemove = setInterval(() => {
            if (i < text.length) {
                container.innerHTML = text.slice(0, -1 - i);
                i++;
            } else {
                finish(intervalRemove, container, res);
            }
        }, 80)
    });
};

const updateText = async (text, container) => {
    await delay(1000);
    await addText(text, container);
    await delay(2000);
    await removeText(text, container);
};

export const textAnimationInit = async (texts, container) => {
    while (true) {
        await asyncForEach(texts, async (str) => {
            await updateText(str, container);
        });
    }
};
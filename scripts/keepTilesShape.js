export const keepTilesShape = (items) => {
    items.forEach(item => {
        item.style.height = getComputedStyle(item).width
});
};

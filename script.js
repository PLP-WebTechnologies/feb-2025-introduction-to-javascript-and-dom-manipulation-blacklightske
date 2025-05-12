// 1. Change Text Content
const changeTextBtn = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextBtn.addEventListener('click', () => {
    dynamicText.textContent = '🎉 The text has been changed dynamically using JavaScript!';
});

// 2. Modify CSS Styles
const changeStyleBtn = document.getElementById('change-style-btn');
const styleDiv = document.getElementById('style-div');

changeStyleBtn.addEventListener('click', () => {
    styleDiv.style.backgroundColor = '#d4f1f9';
    styleDiv.style.border = '2px solid #0077cc';
    styleDiv.style.fontWeight = 'bold';
    styleDiv.style.color = '#004466';
});

// 3. Add or Remove Element
const addRemoveBtn = document.getElementById('add-remove-btn');
const elementContainer = document.getElementById('element-container');
let isPresent = true;

addRemoveBtn.addEventListener('click', () => {
    if (isPresent) {
        elementContainer.innerHTML = '';
        addRemoveBtn.textContent = 'Add Element';
        isPresent = false;
    } else {
        elementContainer.innerHTML = '<p>This paragraph can be removed or added.</p>';
        addRemoveBtn.textContent = 'Remove Element';
        isPresent = true;
    }
});

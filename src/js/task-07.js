const input = document.getElementById('font-size-control');

const text = document.getElementById('text');
text.style.fontSize = '16px'

input.addEventListener('input', changeTextSize);

function changeTextSize(event) {
    const value = event.currentTarget.value

    if (value) {
           text.style.fontSize = value + 'px';
    }

}


let hexInput = document.getElementById('hex-input');
let convertBtn = document.getElementById('convert-btn');
let resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    let hexCode = hexInput.value.trim(); //trim was used to remove any spaces from the ends of a string.
    if ( hexCode.startsWith('#') && hexCode.length === 7)  {
        let rgb = hexToRgb(hexCode);
        resultDiv.textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
    }else{
        resultDiv.textContent = 'Invalid hex code';
    }
});

function hexToRgb(hex) {
    let hexCode = hex.substring(1);
    let r = parseInt(hexCode.substring(0, 2), 16);
    let g = parseInt(hexCode.substring(2, 4), 16);
    let b = parseInt(hexCode.substring(4, 6), 16);
    return { r, g, b };
}
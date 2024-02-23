function calculateRectangleArea(){
    //get length
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLength = rectangleLengthInput.value;
    const length = parseFloat(rectangleLength);
    console.log(length);

    //get height
    const rectangleHeightInput = document.getElementById('rectangle-height');
    const rectangleHeight = rectangleHeightInput.value;
    const height = parseFloat(rectangleHeight);
    console.log(height);

    //area
    const area = length * height;
    console.log(area);

    //display rectangle-area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}
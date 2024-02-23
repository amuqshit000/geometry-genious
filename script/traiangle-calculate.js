/**
 * Steps
 * Objective: get base, height of a triangle. calculate the area by using the provided formula. and then display the area
 * step-1: get the base
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the input field
 * step-4: get value from the input field
 * step-5: convert the value to a number. use parseFloat
 */

function calculateTriangleArea() {
    //get base
    const triangleBaseInput = document.getElementById('traiangle-base');
    const triangleBase = triangleBaseInput.value;
    const base = parseFloat(triangleBase);
    console.log(base);

    //get height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeight = triangleHeightInput.value;
    const height = parseFloat(triangleHeight);
    console.log(height);

    //area
    const area = 0.5 * base * height;
    console.log(area);

    //display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}
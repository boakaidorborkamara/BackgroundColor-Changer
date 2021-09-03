let color_name = document.querySelector("span");
let website_body = document.querySelector("main");
let flip_color_btn = document.querySelector("button");


//an array containting avaliable colors
let color_arr = ["#dbdfe9","Red","DeepSkyBlue","Peru","SaddleBrown","Blue","Purple","Yellow"];

// apply fist color in the array to the background as defaul color 
website_body.style.backgroundColor = color_arr[0];
// display name of defalut bg color 
color_name.innerText = color_arr[0];


function getRandomColor(){
    let random_num = Math.floor(Math.random()*8);
    console.log(random_num);

    let random_color = color_arr[random_num];
    return random_color;
}

function applyBackgroundColor(){
    let selected_color = getRandomColor();

    // apply selected color to the background 
    website_body.style.backgroundColor = selected_color;
    // display name of selected bg color 
    color_name.innerText = selected_color;
    color_name.style.color = selected_color;
}

flip_color_btn.addEventListener("click", applyBackgroundColor);



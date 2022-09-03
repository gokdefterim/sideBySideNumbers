var style = document.createElement('style');
style.innerHTML = `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
    }
    `;
document.getElementsByTagName('head')[0].appendChild(style);

var div = document.createElement('div');
div.style.height = "100px";
div.style.color = "white";
div.style.display = "flex";
div.innerHTML = "<ul id='numbers'></ul>";
div.style.marginLeft = "0";
div.style.padding = "0";

document.getElementsByTagName('body')[0].appendChild(div);

var numbers = document.getElementById('numbers')
numbers.style.display = "flex";

for (let i = 1; i < 101; i++) {
    let  li = document.createElement('li');
    li.innerHTML = "<p>"+i+"</p>";
    document.getElementById('numbers').appendChild(li);

    li.style.listStyleType = "none";
    li.style.color = "#000";
    li.style.width = "50px";
    li.style.height = "50px";
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.justifyContent = "center"

    if(i%2==0){
        li.style.backgroundColor = "#00f";
    }
    else{
        li.style.backgroundColor = "#f00";
    }
  };

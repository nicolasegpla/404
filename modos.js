const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px'



select.addEventListener('change', () => {
 const choice = select.value;

 switch(choice) {
     case 'white':
     upDate('white','black');
     break;
     case 'purple':
     upDate('purple','white');
     break;
    
 }

});


function upDate (bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}
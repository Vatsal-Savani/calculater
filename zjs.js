let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenvalue = "";

screen.addEventListener('click',()=>{
  alert('enter only via key-board');   
})

for (item of buttons) {
    console.log(item)
    item.addEventListener('click', (e)=>{
        buttontext = e.target.innerText;
        console.log(buttontext);

        if (buttontext == 'X') {
            buttontext = '*';
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if (buttontext == 'C') {
            screenvalue = '';
            screen.value = screenvalue;
        }
        else if (buttontext == '=') {
            screenvalue = eval(screenvalue);
            screen.value = screenvalue;

        }
        else {
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
    });
}
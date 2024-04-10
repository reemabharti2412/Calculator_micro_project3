
 const displayScreen = document.getElementById("display");
function allKeys(value)
{  
    if(value == '+' || value == '-' || value =='*' || value =='/' )
    {
       let x = displayScreen.textContent.slice(-1);
        if (x == '+' || x == '-' || x == '*' || x == '/')
        {
            displayScreen.textContent =  displayScreen.textContent.slice(0,-1);
        }
    }
    if(displayScreen.textContent== '0')
    {
        if(value != '/' && value != '*')
        displayScreen.textContent = value;
    }
    else{
        displayScreen.textContent += value;
    }
  
}

function calculate()
{   
    let result = eval(displayScreen.textContent);
    result = parseFloat(result).toFixed(3);
    let decimalPoint = result.slice(-3)
    if(decimalPoint == "000")
    {
        result = result.slice(0,-4)
    }
    displayScreen.textContent= result;
    
}

function reset()
{
    displayScreen.textContent=0;
}

function deleteText()
{
displayScreen.textContent = displayScreen.textContent.slice(0, -1);

if(displayScreen.textContent == "")
{
    displayScreen.textContent=0;
}
}
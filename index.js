function cal(num)
{
    document.getElementById("inptext").value +=num;
}
function clr()
{
    document.getElementById("inptext").value="";
    document.getElementById("list").value="";
}
function calculate()
{
    let x = document.getElementById("inptext").value
    let y = eval(x)
    z = x+" = "+y
    list1 = document.getElementById("list")
    textnode = document.createTextNode(z)
    lis = document.createElement('div')
    lis.appendChild(textnode)
    list1.appendChild(lis);
    document.getElementById("inptext").value = y
}
function del(){
    var value = document.getElementById("inptext").value;
    document.getElementById("inptext").value = value.substr(0, value.length - 1);
}




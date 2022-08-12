// document.cookie = "remember=yes; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/";

function setCookie(cName, cValue, exday)
{
    const d = new Date();
    d.setTime(d.getTime() + (exday*24*60*60*1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cName+"="+cValue+";"+expires+"path=/";
    
}

function createMyCookie()
{
    let inputName = document.getElementById("name");
    let inputValue = document.getElementById("value");
    setCookie(inputName.value,inputValue.value,5);
    inputName.value = "";
    inputValue.value = "";
}

function getCookie(cName)
{
    let name = cName + "=";
    let decodedCookie = decodeURIComponent(document.cookie)
    let cArray = decodedCookie.split(";");
    for(let i = 0; i < cArray.length; i++)
    {
        let c = cArray[i];

        while(c.charAt(0) == ' ')
        {
            c = c.substring(1);//MyName = Amir Hosein
        }

        if(c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length);
        }
    }

}
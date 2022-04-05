function confirmar() {

    var select = document.getElementById("slc1")
    var tar = select.options[select.selectedIndex].text;
    var tar1 = document.getElementById("inp2").value
    var div1 = document.querySelector("div#div1")  
    var tarplus = tar1 - 250
    var tarlight = tar1 -275
    
    if (tar =="Plus") 
    {
        div1.innerHTML = ` O valor do Crédito será de ${tarplus}`
     
    }  

    if (tar =="Light") 
    {
        div1.innerHTML = ` O valor do Crédito será de ${tarlight}`
     
    }  

    if (tar =="Maxx") 
    {
        div1.innerHTML = `Tarifa Maxx não cobra multa para deixar o credito`
     
    }  
 

    }

    
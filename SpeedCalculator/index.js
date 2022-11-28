function myContent(){
    const message = document.getElementById("code");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try{
        if (x >= 81) throw " License suspended"
        if(x >= 80) throw " Points: 2";
        if(x <= 70) throw " Ok"
        if(x >= 50) throw " Ok"
        if(x <= 40) throw " Ok"
        //if (x >= 50) throw "Ok";
    }
    catch(err){
        message.innerHTML = "Speed" + err;
    }
    finally{
        document.getElementById("demo").value = "";
    }
}

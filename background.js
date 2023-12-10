window.addEventListener("load",function(){
    let gameobj={attempts:3,randint:Math.ceil(Math.random()*10)};
    document.getElementsByTagName("button")[0].addEventListener("click",function(){
        if(document.querySelector("button").innerText=="Play Again")
            window.location.reload();
        else
            play(gameobj);

    });
});
function play(gameobj){
    let inpt=parseInt(document.getElementsByTagName("input")[0].value);
    
    if(isNaN(inpt) || inpt>10 || inpt<1)
    {
        alert("Enter valid input");
        return;
    }
    gameobj.attempts--;
    console.log(gameobj.randint);
    console.log(gameobj.attempts);
    if(gameobj.randint==inpt)
    {
        document.querySelector("input").disabled=true;
        console.log("success")
        document.querySelector("input").style.outline="1px solid green";
        document.querySelector(".message").innerText="Correct Answer. YOU WIN !";
        document.querySelector(".message").style.color="green";
        document.querySelector("button").innerText="Play Again";
        
        console.log("done");
    }
    else if(gameobj.randint!=inpt && gameobj.attempts!=0)
    {
        console.log("fail");
        document.querySelector("input").style.outline="1px solid red";
        document.querySelector(".message").innerText= `${inpt} is not correct. You have ${gameobj.attempts} guesses left`;
        document.querySelector(".message").style.color="red";
        console.log("done1");
    }
    else
    {
        document.querySelector("input").disabled=true;
        document.querySelector("input").style.outline="1px solid red";
        document.querySelector(".message").innerText= `GAME LOST. The correct number was ${gameobj.randint}`;
        document.querySelector(".message").style.color="red";
        document.querySelector("button").innerText="Play Again";
    }
    document.querySelector("input").value="";

}
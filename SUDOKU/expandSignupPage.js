var expandButton=document.getElementById("expand_button");
const downShape="M48.8333 20.1667L25.8333 2.25L2.83331 20.1667M48.8333 45.25L25.8333 27.3333L2.83331 45.25";
const upShape="M2.16666 24.625L23 40.25L43.8333 24.625M2.16666 2.75L23 18.375L43.8333 2.75";
var playButton=document.getElementById("play");
anime({
    targets: expandButton,
    translateY: [0,20],
    duration: 1000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
});
var regisForm=document.getElementById("regis_form");
var expand=false;
expandButton.addEventListener("click",expandRegisForm);
function expandRegisForm(){
    if(expand==false)
    {
        var repeatPass=document.createElement("input");
        repeatPass.id="repeat_pass";
        repeatPass.type="text";
        repeatPass.placeholder="Repeat your password here";
        regisForm.insertBefore(repeatPass,regisForm.children[6]);
        playButton.textContent="Sign Up";
        anime({
            targets: regisForm,
            marginTop:'100px',
            height: ['30rem','52rem'],
            duration: 200,
            easing: 'easeInOutSine',
    
        });
        anime({
            targets: "#expand_button path",
            easing:"easeOutElastic",
            duration: 500,
            d:[{value: downShape}],
            
        });
        expand=true;
    }else{
        
        var repeatPass=document.getElementById("repeat_pass");
        regisForm.removeChild(repeatPass);
        playButton.textContent="P L A Y !";
        anime({
            targets: regisForm,
            marginTop:'-100px',
            height: ['52rem','30rem'],
            duration: 200,
            easing: 'easeInOutSine',
    
        });
        anime({
            targets: "#expand_button path",
            easing:"easeOutElastic",
            duration: 500,
            d:[{value: upShape}],
        
        });

        expand=false;
    }
    
}
console.log(regisForm);




function firstDoll(){

    let color1="brown";
    console.log(color1);
    function secondDoll(){
        let color2="white";
        console.log(color1,color2);
        return `${color1} "+" ${color2}`
    }
    secondDoll();

    
}

firstDoll();

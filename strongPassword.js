const input=require("prompt-sync")()
var a=input("enter password:-").split("")
var capital=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"]
var small=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var num=["0","1","2","3","4","5","6","7","8","9"]
var spcl=[",",":",";","?","+","&","!","@","#","$","%","^","*",".","(",")","_","+","=","{","}","[","]","-","|","<",">","`","~","'",'"',"/","\\"]
var b=""
if(a.length>=8){
    a.map((el)=>{
        
        if(capital.includes(el)){
            b+="a"
        }
        else if(small.includes(el)){
            b+="b"
        }
        else if(num.includes(el)){
            b+="c"
        }
        else if(spcl.includes(el)){
            b+="d"
        }
    })
    console.log(b);
    if(b.includes("a")&& b.includes("b") && b.includes("c") && b.includes("d") ){
        console.log("Strong password");
    }
    else{
        console.log("Weak password");
    }
}
// console.log(a);
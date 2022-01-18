
let result = document.getElementById("result");
let buttons=Array.from(document.getElementsByClassName("button"));

var full = "";
var con ="";
var clear="";
buttons.map( button =>{
    button.addEventListener("click" ,(e)=>{
        switch(e.target.innerText){
            case '=':
                console.log(`fullEXP : ${full}`)
                const value =logicfunction(full)
                result.innerText = value
                break;
            case 'C':
                result.innerText=""
                full ='';
                break;
            case 'con':
                result.innerText =con;
                full +=result.innerText;
                let cvalue;
                cvalue=e.target.innerText;
                console.log(cvalue);
                break;
            default:
                result.innerText +=e.target.innerText;
                full +=e.target.innerText;
                break;
        }
    })
});

function logicfunction (expression){
    // const exp=expression.split("");
    // console.log(`after convert to array exp : ${exp}`);
    // var count=0;
    // if(count==0){
    //     if(exp[0]=="/" || exp[0]=="*" || exp[0]=="+" || exp[0]=="-" || exp[0]=="%" || exp[0]=="+-"){
    //         exp.unshift(0);
    //         console.log(`after ading zero: ${exp}`)
    //     }
    
    //     else if(exp[exp.length-1]=="/" || exp[exp.length-1]=="*" || exp[exp.length-1]=="+" || exp[exp.length-1]=="-" || exp[exp.length-1]=="%" || exp[exp.length-1]=="+-"){
    //         exp.pop();
    //     console.log(`after remov endop: ${exp}`)
    //     }
    //     else if(isNaN=exp.value){
    //         console.log(`are you here`)
    //         return 0;
    //     }
    // }
    // else {
    //     console.log(`after if opt expression : ${expression}`)
    //     const inpExp=exp.toString();


        const numbers =expression.split(/\D/g);
        const opts = expression.split(/\d/g).filter(Boolean);
        console.log(`opts : ${opts}`);
        console.log(`numbers : ${numbers}`);
        var sum=0;
        var counter=0;
        var newValue=0;
        for(let i=0; i<opts.length;i++){   
            if(counter==0) {
                if(opts[i]=="/"){
                    sum =  parseInt(numbers[i] ) / parseInt(numbers[i+1]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i]=="*"){
                    sum =  parseInt(numbers[i] ) * parseInt(numbers[i]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i]=="+"){
                    sum =  parseInt(numbers[i] ) + parseInt(numbers[i+1]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i]=="-"){3
                    sum =  parseInt(numbers[i] ) - parseInt(numbers[i+1]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i]=="%"){
                    sum =  parseInt(numbers[i] ) % parseInt(numbers[i+1]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
            }
            else if(counter==1) {
                if(opts[i-1]=="/"){
                    sum =  parseInt(numbers[i-1] ) / parseInt(numbers[i]);     
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-1]=="*"){
                    sum =  parseInt(numbers[i-1] ) * parseInt(numbers[i]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-1]=="+"){
                    sum =  parseInt(numbers[i-1] ) + parseInt(numbers[i]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-1]=="-"){
                    sum =  parseInt(numbers[i-1] ) - parseInt(numbers[i]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-1]=="%"){
                    sum =  parseInt(numbers[i-1] ) % parseInt(numbers[i]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
            }  
            else if(counter==2) {
                if(opts[i-2]=="/"){
                    sum =  parseInt(numbers[i-2] ) / parseInt(numbers[i-1]);     ///   20/2 =10
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-2]=="*"){
                    sum =  parseInt(numbers[i-2] ) * parseInt(numbers[i-1]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-2]=="+"){
                    sum =  parseInt(numbers[i-2] ) + parseInt(numbers[i-1]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-2]=="-"){
                    sum =  parseInt(numbers[i-2] ) - parseInt(numbers[i-1]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-2]=="%"){
                    sum =  parseInt(numbers[i-2] ) % parseInt(numbers[i-1]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
            } 
            else if(counter==3) {
                if(opts[i-3]=="/"){
                    sum =  parseInt(numbers[i-3] ) / parseInt(numbers[i-2]);     ///   20/2 =10
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-3]=="*"){
                    sum =  parseInt(numbers[i-3] ) * parseInt(numbers[i-2]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-3]=="+"){
                    sum =  parseInt(numbers[i-3] ) + parseInt(numbers[i-2]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-3]=="-"){
                    sum =  parseInt(numbers[i-3] ) - parseInt(numbers[i-2]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-3]=="%"){
                    sum =  parseInt(numbers[i-3] ) % parseInt(numbers[i-2]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
            } 
            else if(counter==4) {
                if(opts[i-4]=="/"){
                    sum =  parseInt(numbers[i-4] ) / parseInt(numbers[i-3]);     ///   20/2 =10
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-4]=="*"){
                    sum =  parseInt(numbers[i-4] ) * parseInt(numbers[i-3]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-4]=="+"){
                    sum =  parseInt(numbers[i-4] ) + parseInt(numbers[i-3]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-4]=="-"){
                    sum =  parseInt(numbers[i-4] ) - parseInt(numbers[i-3]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-4]=="%"){
                    sum =  parseInt(numbers[i-4] ) % parseInt(numbers[i-3]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
            }
            else if(counter==5) {
                if(opts[i-5]=="/"){
                    sum =  parseInt(numbers[i-5] ) / parseInt(numbers[i-4]);     ///   20/2 =10
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-5]=="*"){
                    sum =  parseInt(numbers[i-5] ) * parseInt(numbers[i-4]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-5]=="+"){
                    sum =  parseInt(numbers[i-5] ) + parseInt(numbers[i-4]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-5]=="-"){
                    sum =  parseInt(numbers[i-5] ) - parseInt(numbers[i-4]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
                else if(opts[i-5]=="%"){
                    sum =  parseInt(numbers[i-5] ) % parseInt(numbers[i-4]);
                    opts.shift();     
                    numbers.shift();                                    
                    numbers.shift();
                    numbers.unshift(sum);                                   
                    // console.log(` newValue: ${newValue}`);
                }
            }
            counter+=1;
        }

        console.log(`endvalue : ${numbers}`)
        console.log(`result:  ${sum}`);
        return sum;
    }
    
// }
function conFunction(cons) {
    console.log(`console : ${cons}`);
}

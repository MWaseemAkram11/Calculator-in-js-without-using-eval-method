
let result = document.getElementById("result");
let buttons=Array.from(document.getElementsByClassName("button"));

var full = "";
buttons.map( button =>{
    button.addEventListener("click" ,(e)=>{
        switch(e.target.innerText){
            case '=':
                console.log(`fullEXP : ${full}`)
                const value =logicfunction(full)
                result.innerText = value
                break;
            case 'clear':
                value=""
                result.innerText =value;
                brake;
            default:
                result.innerText +=e.target.innerText;
                full +=e.target.innerText;
                break;
        }
    })
});

function logicfunction (expression){
    console.log(`exp : ${expression}`) // initial 
    // var newresult;
    // newresult +=e.target.innerText;
    // newresult =newresult.toString();
    // const result = newresult;
    // console.log(sum);
    // console.log(opts);
    
    const numbers =expression.split(/\D/g);
    const opts = expression.split(/\d/g).filter(Boolean);

    // console.log(`numbers  : ${numbers} `);
    // console.log(numbers[0]);
    // console.log(`opts : ${opts}`)
    var sum=0;

    for(let i=0; i<numbers.length;i++)
    if(opts[i]=="+"){
        
      sum +=  parseInt(numbers[i] )+parseInt(numbers[i+1]);
      console.log(`sum : ${sum}`)
    }
    else if(opts[i]=="*"){
        sum +=  parseInt(numbers[i] )*parseInt(numbers[i+1]);
    }
    else if(opts[i]=="-"){
     sum +=  parseInt(numbers[i] )-parseInt(numbers[i+1]);
    }
    else if(opts[i]=="/"){
     sum +=  parseInt(numbers[i] )/parseInt(numbers[i+1]);
    }
    return sum;
}
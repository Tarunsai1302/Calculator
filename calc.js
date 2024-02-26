let fn="";
let sn="";
let op="";

function appendNumber(n){
    if(op===""){
        if (fn=== "" && n === '.') {
            fn += "0.";
        } else {
            fn+= n;
        }
        document.getElementById("result").value = fn;
    }
    else{
        if (sn=== "" && n=== '.') {
            sn += "0.";
        } else {
            sn+= n;
        }
        document.getElementById("result").value = fn+ "" + op + "" + sn;
    
    }
}

function setOperator(opr){
    op=opr;
    document.getElementById("result").value=fn+""+op;
}

function Calc(){
    let result;
    switch(op)
    {
        case '+':
            result=parseFloat(fn)+parseFloat(sn);
            break;
        case '-':
            result=parseFloat(fn)-parseFloat(sn);
            break;
        case '*':
            result=parseFloat(fn)*parseFloat(sn);
            break;
        case '/':
            result=parseFloat(fn)/parseFloat(sn);
            break;
        case '^':
            result=Math.pow(parseFloat(fn), parseFloat(sn));
            break;
    }
    document.getElementById("result").value=result;
}

function Clr(){
    fn="";
    sn="";
    op="";
    document.getElementById("result").value="";

}
function deleteNumber(del){
    if(op===""){
        fn= fn.slice(0, -1);
        document.getElementById("result").value =fn;
    }
    else{
        if(sn.length > 0){
            sn = sn.slice(0, -1);
            document.getElementById("result").value = fn +""+op+""+ sn;
        }
        else{
            op= "";
            document.getElementById("result").value = fn;
        }
    }
}
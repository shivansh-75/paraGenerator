let input = document.getElementById("numofwords");
let container = document.querySelector(".container");
let numofwords; 
const generateword = (n)=>{
    let text ="";
     const random = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     for(let i=0;i<n;i++){
        const word = (Math.random()*25).toFixed(0);
        text += random[word];
     }
     
     return text;
}

const getdata = ()=>{
    numofwords = Number(input.value);

    const para = document.createElement("p");
    let data = "";
    for(let i=0;i<numofwords;i++){
        const randomnumber = (Math.random()*15).toFixed(0);
        data += generateword(randomnumber);
        data += " ";
    }
    para.innerText= data;
    para.setAttribute("class","para");
    container.append(para);
}; 
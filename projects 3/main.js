var textbox = document.getElementById("txt");


textbox.addEventListener('input',function(){
   let text=this.value;
//   console.log(text)
    let char=text.length;
    // console.log(char);

    document.getElementById("char").innerHTML=char;

    let newtext=text.trim()

    let words=newtext.split(" ");

    let cleanword=words.filter(function(elm){
        return elm!="";

    })
    document.getElementById("word").innerHTML=cleanword.length;

});


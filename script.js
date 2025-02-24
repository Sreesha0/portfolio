document.getElementById('contactform')
addEventListener('submit',function(event){
    event.preventDefault();
    let name =document.getElementById('name').value;
    let mail =document.getElementById('mail').value;
    let number =document.getElementById('num').value;
    let subject=document.getElementById('sub').value;
    if(!name|| !mail ||!number ||!subject){
    alert("please fill the data");
    return;
}
   alert('form submitted successfully!\nName:'+name +'\nmail:'+ mail +'\nnumber:'+number +'\nsubject'+subject);
   document.getElementById('contactform').reset();
}
)

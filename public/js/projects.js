
    console.log(document.getElementById('navigation').getBoundingClientRect().right)
    document.querySelector('.projectform').style.marginLeft=document.getElementById('navigation').getBoundingClientRect().right+'px';
    const imgupload=()=>{
   document.getElementById('imgupload').click();
    }
    document.getElementById('imgupload').addEventListener('change',(e)=>{
       document.getElementById('chosenfile').innerHTML=(e.target.value).split('\\').slice(-1)[0];
    })
   var demoimg= document.getElementById('demoimg');
        demoimg.ondragover=(e)=>{
            demoimg.style.borderColor="rgb(14, 228, 21)"
        e.preventDefault();
        }
        demoimg.ondragenter=(e)=>{
            demoimg.style.borderColor="rgb(14, 228, 21)"
        e.preventDefault();
        }
        demoimg.ondragleave=(e)=>{
             demoimg.style.borderColor="rgb(138, 138, 138)";
            e.preventDefault();
        }
        
    
    document.getElementById('demoimg').ondrop=(e)=>{
        e.preventDefault();
        console.log([...e.dataTransfer.files][0])
        var imgtit=e.dataTransfer.files[0].name;
        if(imgtit.includes('.jpg') || imgtit.includes('.png') || imgtit.includes('.jpeg') || imgtit.includes('.bmp')){
            document.getElementById('imgupload').files=e.dataTransfer.files;
            document.getElementById('chosenfile').innerHTML=e.dataTransfer.files[0].name;
        }
        else{
            document.getElementById('chosenfile').innerHTML="Please choose a valid Image";
            document.getElementById('chosenfile').className="text-danger"
        }
       
    }
var chosendomain;
    ['item1','item2','item3'].forEach(item=>{
        document.getElementById(item).addEventListener('click',(e)=>{
        chosendomain=e.target.innerHTML;
        console.log(e.target.innerHTML)
        document.getElementById('chosedomain').innerText=e.target.innerHTML;
        })
    })
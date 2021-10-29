/**setting the left margin of main div to right position of nav-bar since nav-bar's position is fixed */
    console.log(document.getElementById('navigation').getBoundingClientRect().right)
    document.querySelector('.projectform').style.marginLeft=document.getElementById('navigation').getBoundingClientRect().right+'px';
    document.querySelector('.projectstable').style.marginLeft=document.getElementById('navigation').getBoundingClientRect().right+'px';
    // document.querySelector('.table').style.marginLeft=document.getElementById('formm').getBoundingClientRect().left+'px';
    const imgupload=()=>{
   document.getElementById('imgupload').click();
    }
    document.getElementById('imgupload').addEventListener('change',(e)=>{
        /** resolving uploaded image's name from the entire path*/
       document.getElementById('chosenfile').innerHTML=(e.target.value).split('\\').slice(-1)[0];
    })
   var demoimg= document.getElementById('demoimg');
        /** represent when dragging is active 
         * disabling the open-in-new-tab and other default events
        */
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
        console.log(e.dataTransfer.files[0]) 
        /**getting the name to alert that image has been uploaded */
        var imgtit=e.dataTransfer.files[0].name;
        /**checking for image extensions */
        if(imgtit.includes('.jpg') || imgtit.includes('.png') || imgtit.includes('.jpeg') || imgtit.includes('.bmp')){
            /**giving the file to the hidden input */
            document.getElementById('imgupload').files=e.dataTransfer.files;
            /**you can access the file in backend using above  */
            document.getElementById('chosenfile').innerHTML=e.dataTransfer.files[0].name;
        }
        else{
            document.getElementById('chosenfile').innerHTML="Please choose a valid Image";
            document.getElementById('chosenfile').className="text-danger"
        }
    }
var chosendomain;
        /**listening for click event of multiple options */
    ['item1','item2','item3'].forEach(item=>{
        document.getElementById(item).addEventListener('click',(e)=>{
        chosendomain=e.target.innerHTML;
        /**displaying the selected option */
        document.getElementById('chosedomain').innerText=e.target.innerHTML;
        })
    })
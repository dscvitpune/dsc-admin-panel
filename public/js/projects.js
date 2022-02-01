let imginput =document.getElementById('imgupload')
/**setting the left margin of main div to right position of nav-bar since nav-bar's position is fixed */
    if(document.querySelector('.projectform')!==null && document.getElementById('navigation')!==null ){
        console.log(document.getElementById('navigation').getBoundingClientRect().right)

        document.querySelector('.projectform').style.marginLeft=document.getElementById('navigation').getBoundingClientRect().right+'px';
    }
    // document.querySelector('.table').style.marginLeft=document.getElementById('formm').getBoundingClientRect().left+'px';
    const imgupload=()=>{
        imginput.click();
    }
    imginput.addEventListener('change',(e)=>{
        /** resolving uploaded image's name from the entire path*/
        /**do any one of the following */
        if(document.getElementById('chosenfile')){
            document.getElementById('chosenfile').innerHTML=(e.target.value).split('\\').slice(-1)[0];

        }
       let img=e.target.files;
       imginput.files=img
       displayimg(img[0])
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
            /**giving the file to the hidden input to send the file to backend*/
            imginput.files=e.dataTransfer.files;
            if(document.getElementById('chosenfile')){
            document.getElementById('chosenfile').innerHTML=imginput.files[0].name
            }
            displayimg(imginput.files[0])

        }
        else{
            if(document.getElementById('chosenfile')){
            document.getElementById('chosenfile').innerHTML="Please choose a valid Image";
            document.getElementById('chosenfile').className="text-danger"
            }
        }
    }
    const displayimg=(f)=>{
        let fileReader = new FileReader(); 
        fileReader.onload = ()=>{
          let URI = fileReader.result; 
          let imgelement = `<img class="displayimg" src="${URI}" alt="image">`; 
          demoimg.querySelector(".uploadimg").innerHTML = imgelement; 
        }
        fileReader.readAsDataURL(f);
    }

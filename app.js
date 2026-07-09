const video = document.getElementById("video");
const loader = document.getElementById("loader");
const statusText = document.getElementById("status");
const cameraContainer = document.getElementById("cameraContainer");

async function startCamera(){

    try{

        statusText.innerHTML="Requesting Camera Permission...";

        const stream = await navigator.mediaDevices.getUserMedia({

            video:{
                facingMode:"environment"
            },

            audio:false

        });

        video.srcObject=stream;

        await video.play();

        loader.style.display="none";

        cameraContainer.style.display="block";

    }

    catch(err){

        console.error(err);

        statusText.innerHTML=err.name+"<br>"+err.message;

    }

}

window.onload=startCamera;

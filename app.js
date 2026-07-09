const video = document.getElementById("video");
const loader = document.getElementById("loader");
const statusText = document.getElementById("status");
const cameraContainer = document.getElementById("cameraContainer");

let stream = null;

async function startCamera() {

    try {

        statusText.innerHTML = "Opening Front Camera...";

        try {

            stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: { ideal: "user" },
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: false
            });

        } catch (e) {

            // अगर Front Camera न मिले
            stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            });

        }

        video.srcObject = stream;

        await new Promise(resolve => {
            video.onloadedmetadata = resolve;
        });

        await video.play();

        loader.style.display = "none";
        cameraContainer.style.display = "block";

        console.log("Camera Started");

    } catch (err) {

        console.error(err);

        statusText.innerHTML =
            err.name + "<br>" + err.message;

    }

}

window.addEventListener("load", startCamera);

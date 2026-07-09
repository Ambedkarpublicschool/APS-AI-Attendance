// ======================================
// APS AI Attendance V2
// Camera Engine
// ======================================
import { initAI } from "./ai.js";
let video;
let overlay;
let loader;
let statusText;
let studentCard;

let stream = null;

// Future AI Hook
let detector = null;

// ======================================
// App Start
// ======================================

window.addEventListener("load", initApp);

async function initApp() {

    video = document.getElementById("video");
    overlay = document.getElementById("overlay");
    loader = document.getElementById("loader");
    statusText = document.getElementById("status");
    studentCard = document.getElementById("studentCard");

    try {

        updateStatus("Opening Camera...");

        await startCamera();

        updateStatus("Camera Ready");

        loader.style.display = "none";

        document
            .getElementById("cameraContainer")
            .style.display = "block";

        // AI Future Hook
        // await initAI();

    }

    catch (err) {

        console.error(err);

        updateStatus(err.message);

    }

}

// ======================================
// Camera
// ======================================

async function startCamera() {

    stopCamera();

    const constraints = {

        audio: false,

        video: {

            facingMode: {
                ideal: "user"
            },

            width: {
                ideal: 1280
            },

            height: {
                ideal: 720
            }

        }

    };

    try {

        stream =
        await navigator
        .mediaDevices
        .getUserMedia(constraints);

    }

    catch {

        stream =
        await navigator
        .mediaDevices
        .getUserMedia({

            video: true,
            audio: false

        });

    }

    video.srcObject = stream;

    await video.play();

    await waitVideoReady();

    resizeCanvas();

}

// ======================================
// Stop Camera
// ======================================

function stopCamera() {

    if (!stream) return;

    stream
        .getTracks()
        .forEach(track => track.stop());

}

// ======================================
// Wait
// ======================================

function waitVideoReady() {

    return new Promise(resolve => {

        video.onloadedmetadata = () => {

            resolve();

        };

    });

}

// ======================================
// Canvas
// ======================================

function resizeCanvas() {

    overlay.width = video.videoWidth;

    overlay.height = video.videoHeight;

}

// ======================================
// Status
// ======================================

function updateStatus(text) {

    console.log(text);

    statusText.innerHTML = text;

}

// ======================================
// Orientation
// ======================================

window.addEventListener("resize", resizeCanvas);

window.addEventListener("orientationchange", resizeCanvas);

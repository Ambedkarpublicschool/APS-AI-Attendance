// =====================================
// APS AI Attendance V2
// AI Engine
// =====================================

import { CONFIG } from "./config.js";

let vision = null;
let faceDetector = null;

// -------------------------------------
// Initialize AI
// -------------------------------------

export async function initAI() {

    console.log("Initializing AI...");

    updateLoader("Loading AI Engine...");

    const {

        FilesetResolver,

        FaceDetector

    } = await import(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"
    );

    vision =
        await FilesetResolver.forVisionTasks(

            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"

        );

    faceDetector =
        await FaceDetector.createFromOptions(

            vision,

            {

                baseOptions: {

                    modelAssetPath:
                    CONFIG.AI.MODEL

                },

                runningMode: "VIDEO",

                minDetectionConfidence:
                CONFIG.AI.MIN_CONFIDENCE

            }

        );

    console.log("AI Ready");

    updateLoader("AI Ready");

}

// -------------------------------------
// Return Detector
// -------------------------------------

export function getDetector() {

    return faceDetector;

}

// -------------------------------------

function updateLoader(text){

    const status =
    document.getElementById("status");

    if(status){

        status.innerHTML=text;

    }

}

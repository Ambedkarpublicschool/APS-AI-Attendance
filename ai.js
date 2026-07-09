import { CONFIG } from "./config.js";

let vision;
let detector;

export async function initAI() {

    console.log("Loading MediaPipe...");

    const {

        FilesetResolver,

        FaceDetector

    } = window;

    vision =
    await FilesetResolver.forVisionTasks(

        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"

    );

    detector =
    await FaceDetector.createFromOptions(

        vision,

        {

            baseOptions:{

                modelAssetPath:
                CONFIG.MODEL_URL

            },

            runningMode:"VIDEO",

            minDetectionConfidence:0.60

        }

    );

    console.log("AI READY");

    return detector;

}

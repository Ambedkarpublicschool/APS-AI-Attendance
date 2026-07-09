import { CONFIG } from "./config.js";

let detector;

export async function initAI(){

    console.log("Loading AI...");

    const vision =
    await FilesetResolver.forVisionTasks(

        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"

    );

    detector =
    await FaceDetector.createFromOptions(

        vision,

        {

            baseOptions:{

                modelAssetPath:CONFIG.MODEL_URL

            },

            runningMode:CONFIG.runningMode,

            minDetectionConfidence:
            CONFIG.scoreThreshold

        }

    );

    console.log("AI Ready");

}

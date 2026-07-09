// ======================================
// APS AI Attendance V2
// Configuration
// ======================================

export const CONFIG = {

    // ===============================
    // Application
    // ===============================

    APP_NAME: "APS AI Attendance",

    VERSION: "2.0",

    DEBUG: true,

    // ===============================
    // Camera
    // ===============================

    CAMERA: {

        facingMode: "user",

        width: 1280,

        height: 720

    },

    // ===============================
    // AI
    // ===============================

    AI: {

        MODEL: "models/blaze_face_short_range.task",

        MAX_FACES: 1,

        MIN_CONFIDENCE: 0.60,

        RECOGNITION_THRESHOLD: 0.45,

        SCAN_INTERVAL: 150

    },

    // ===============================
    // Attendance
    // ===============================

    ATTENDANCE: {

        FREEZE_TIME: 3500,

        DUPLICATE_DELAY: 30000

    },

    // ===============================
    // API
    // ===============================

    API: {

        URL: "",

        PHOTOS: "?action=photos",

        ATTENDANCE: "?action=attendance",

        PING: "?action=ping"

    }

};

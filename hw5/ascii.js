{
    const defaultAnimationInterval = 250;
    const FRAME_SEPERATOR = "=====\n"
    let animationInterval = defaultAnimationInterval;
    let lastTimeOut = null;
    let isRunning = false;
    let fullText = null;
    let stageDisplay = txt => document.getElementById("text-area").value = txt;
    function stop() {
        isRunning = false;
        makeAnimationOrDisplaytext(fullText, stageDisplay);

    }

    function start() {
        isRunning = true;
        makeAnimationOrDisplaytext(document.getElementById("text-area").value, stageDisplay);
        alert("Animation Started!");
    }
    window.onload = function() {

        document.getElementById("start").addEventListener("click", function(event) {
            this.disabled = true;
            document.getElementById("stop").disabled = false;
            document.getElementById("animation").disabled = true;
            start();
        });
        document.getElementById("stop").addEventListener("click", function(event) {
            this.disabled = true;
            document.getElementById("start").disabled = false;
            document.getElementById("animation").disabled = false;
            stop();
        });
        document.getElementById("animation").addEventListener("change", function(event) {
            makeAnimationOrDisplaytext(ANIMATIONS[event.target.value], stageDisplay);
        });
        document.getElementById("turbo").addEventListener("change", function(event) {
            animationInterval = event.target.checked ? 50 : defaultAnimationInterval;
            console.log("interval is " + animationInterval);
        });
        //Tiny (7pt), Small (10pt), Medium (12pt), Large (16pt), Extra Large (24pt), XXL (32pt)
        const FONT_MAPPING = {
            "Tiny": "7pt",
            "Small": "10pt",
            "Medium": "12pt",
            "Large": "16pt",
            "Extra Large": "24pt",
            "XXL": "32pt"
        }

        document.getElementById("fontsize").addEventListener("change", function(event) {
            document.getElementById("text-area").style.fontSize = FONT_MAPPING[event.target.value];
        });
    }

    function makeAnimationOrDisplaytext(text, stagePlay) {
        // clear the previous timeout
        if (lastTimeOut !== null) {
            clearTimeout(lastTimeOut);
        }

        fullText = text;
        if (!text) {
            stagePlay(null);
            return;
        }
        if (!isRunning) {
            stagePlay(fullText);
            return;
        }
        const frames = text.split(FRAME_SEPERATOR);
        let frame = function(startIdx) {
            if (startIdx >= frames.length) {
                startIdx = 0;
            }
            stagePlay(frames[startIdx]);
            lastTimeOut = setTimeout(frame, animationInterval, startIdx + 1);

        }
        lastTimeOut = setTimeout(frame, animationInterval, 0);
    }
}
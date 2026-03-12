let audioContext; //define the audio context as a universal variable
let samples;
const startCtxBtn = document.querySelector(".start");
const setUpSamplesBtn = document.querySelector(".setup-samples");
const playHihatBtn = document.querySelector(".play-hihat");
const playKickBtn = document.querySelector(".play-kick");
const playSnareBtn = document.querySelector(".play-snare");

const samplePaths = ["./audio/hihat.mp3", "./audio/kick.mp3", "./audio/snare.mp3"]

startCtxBtn.addEventListener("click", () => { //need user interaction to start the audio context.
    audioContext = new AudioContext(); //create the audio context
    console.log("Audio Context Started");
});

// ONSCREEN BUTTONS
setUpSamplesBtn.addEventListener("click", () => {
    setupSamples(samplePaths).then((response) => {
        samples = response;
        console.log(samples);
        
        playHihatBtn.addEventListener("click", () => { //event listener for playing the hihat
            const playing = playSample(samples[0], 0);
            //console.log(playing);
        });

        playKickBtn.addEventListener("click", () => { //event listener for playing the kick
            const playing = playSample(samples[1], 0);
            //console.log(playing);
        });

        playSnareBtn.addEventListener("click", () => { //event listener for playing the kick
            const playing = playSample(samples[2], 0);
            //console.log(playing);
        });
    });
});

// KEYDOWNS
document.addEventListener("keydown", function(event){
    const key = event.key.toLowerCase();
    switch(key){
        case "q":
            playSample(samples[0], 0);
            break;
        case "w":
            playSample(samples[1],0);
            break;
        case "e":
            playSample(samples[2],0);
            break;
        default:
            break;
    };
});

async function getFile(filePath){
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer
}

async function setupSamples(paths){
    console.log("setting up samples");
    const audioBuffers = [];

    for(const path of paths){
        const sample = await getFile(path);
        audioBuffers.push(sample);//pushing all audio files from the "sample" variable into the audio buffers array
    }

    console.log("setting up done");
    return audioBuffers;
}

function playSample(audioBuffer, time){
    const sampleSource = audioContext.createBufferSource();
    sampleSource.buffer = audioBuffer;
    sampleSource.connect(audioContext.destination);
    sampleSource.start(time);
    return sampleSource;
}
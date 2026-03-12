/* TO-DO
1.) load 2 more loops in
2.) figure out how to pause them
3.) assign loops to buttons
4.) style SetUp buttons
4a.) make the buttons grow when pressed
5.) Audio Credits
*/

(function(){
    "use strict";
    console.log("reading js");

    let audioContext; //defining the audio context as a universal variable
    let samples;
    const startCtxBtn = document.querySelector(".start");
    const setUpSamplesBtn = document.querySelector(".setup-samples");

    const mainTag = document.querySelector("main");
    const footerTag = document.querySelector("footer");
    const initialize = document.querySelector(".initialize");

    //Creating button variables
    //Drum Pad
    const playHihatBtn = document.querySelector("#hihat");
    const playCowbellBtn = document.querySelector("#cowbell");
    const playCrashBtn = document.querySelector("#crash");
    const playClapBtn = document.querySelector("#clap");
    const playSnareBtn = document.querySelector("#snare");
    const playChimesBtn = document.querySelector("#chimes");
    const playTomBtn = document.querySelector("#tom");
    const playKickBtn = document.querySelector("#kick");
    const playPipesBtn = document.querySelector("#pipe");

    //Quick Sampler
    const playSample10Btn = document.querySelector("#sample-10");
    const playSample11Btn = document.querySelector("#sample-11");
    const playSample12Btn = document.querySelector("#sample-12");
    const playSample13Btn = document.querySelector("#sample-13");
    const playSample14Btn = document.querySelector("#sample-14");
    const playSample15Btn = document.querySelector("#sample-15");

    //Loops
    const playLoop16Btn = document.querySelector("#loop-16");
    const playLoop17Btn = document.querySelector("#loop-17");
    const playLoop18Btn = document.querySelector("#loop-18");
    const playLoop19Btn = document.querySelector("#loop-19");

    // Not using WAAPI for loops - too complicated + not as much need for instant playback
    const loop16 = new Audio("./audio/loop-16.mp3");
        loop16.loop=true;
    const loop17 = new Audio("./audio/loop-17.mp3");
        loop17.loop=true;
    const loop18 = new Audio("./audio/loop-18.mp3");
        loop18.loop=true;
    const loop19 = new Audio("./audio/loop-19.mp3");
        loop19.loop=true;

    //Button Click
    const click = new Audio('./audio/click.wav');

    const samplePaths = ["./audio/hihat.mp3", "./audio/cowbell.mp3", "./audio/crash.wav", "./audio/clap.mp3", "./audio/snare.mp3", "./audio/chimes.mp3", "./audio/tom.wav", "./audio/kick.mp3", "./audio/pipe.mp3", "./audio/sample-10.wav", "./audio/sample-11.wav", "./audio/sample-12.wav", "./audio/sample-13.wav", "./audio/sample-14.wav", "./audio/sample-15.wav"]

    startCtxBtn.addEventListener("click", function() { //need user interaction to create the audio context.
        audioContext = new AudioContext(); //create the audio context
        console.log("Audio Context Started");//check!

        click.play();
        startCtxBtn.className="green";
    });

    setUpSamplesBtn.addEventListener("click", function(){
        setupSamples(samplePaths).then(function(response) {
            samples = response;
            console.log(samples);

            mainTag.removeAttribute("class");
            footerTag.removeAttribute("class");
            initialize.className = "dark";
            
            // ONSCREEN BUTTON TRIGGERS
            //Drum Pad
            playHihatBtn.addEventListener("click", function(){ //event listener for playing each one-shot
                const playing = playSample(samples[0], 0);
                //console.log(playing);
            });
            playCowbellBtn.addEventListener("click", function(){
                const playing = playSample(samples[1], 0);
            });
            playCrashBtn.addEventListener("click", function(){
                const playing = playSample(samples[2], 0);
            });
            playClapBtn.addEventListener("click", function(){
                const playing = playSample(samples[3], 0);
            });
            playSnareBtn.addEventListener("click", function(){
                const playing = playSample(samples[4], 0);
            });
            playChimesBtn.addEventListener("click", function(){
                const playing = playSample(samples[5], 0);
            });
            playTomBtn.addEventListener("click", function() {
                const playing = playSample(samples[6], 0);
            });
            playKickBtn.addEventListener("click", function() {
                const playing = playSample(samples[7], 0);
            });
            playPipesBtn.addEventListener("click", function(){
                const playing = playSample(samples[8], 0);
            });

            //Sample Chops
            playSample10Btn.addEventListener("click", function(){
                const playing = playSample(samples[9], 0);
            });
            playSample11Btn.addEventListener("click", function(){
                const playing = playSample(samples[10], 0);
            });
            playSample12Btn.addEventListener("click", function(){
                const playing = playSample(samples[11], 0);
            });
            playSample13Btn.addEventListener("click", function(){
                const playing = playSample(samples[12], 0);
            });
            playSample14Btn.addEventListener("click", function(){
                const playing = playSample(samples[13], 0);
            });
            playSample15Btn.addEventListener("click", function(){
                const playing = playSample(samples[14], 0);
            });

            //Loops
            //Play and pause buttons use the same method that I used in my Every Picture Project.
            let loop16Playing = false;
            playLoop16Btn.addEventListener("click", function(){
                if(!loop16Playing){
                    loop16.play();
                    playLoop16Btn.innerHTML = "<i class='fas fa-pause'></i><p>1</p>"
                    loop16Playing=true;
                }

                else{
                    loop16.pause();
                    playLoop16Btn.innerHTML = "<i class='fas fa-play'></i><p>1</p>"
                    loop16Playing=false;
                }
            });

            let loop17Playing = false;
            playLoop17Btn.addEventListener("click", function(){
                if(!loop17Playing){
                    loop17.play();
                    playLoop17Btn.innerHTML = "<i class='fas fa-pause'></i><p>2</p>"
                    loop17Playing=true;
                }

                else{
                    loop17.pause();
                    playLoop17Btn.innerHTML = "<i class='fas fa-play'></i><p>2</p>"
                    loop17Playing=false;
                }
            });

            let loop18Playing = false;
            playLoop18Btn.addEventListener("click", function(){
                if(!loop18Playing){
                    loop18.play();
                    playLoop18Btn.innerHTML = "<i class='fas fa-pause'></i><p>3</p>"
                    loop18Playing=true;
                }

                else{
                    loop18.pause();
                    playLoop18Btn.innerHTML = "<i class='fas fa-play'></i><p>3</p>"
                    loop18Playing=false;
                }
            });

            let loop19Playing = false;
            playLoop19Btn.addEventListener("click", function(){
                if(!loop19Playing){
                    loop19.play();
                    playLoop19Btn.innerHTML = "<i class='fas fa-pause'></i><p>4</p>"
                    loop19Playing=true;
                }

                else{
                    loop19.pause();
                    playLoop19Btn.innerHTML = "<i class='fas fa-play'></i><p>4</p>"
                    loop19Playing=false;
                }
            });
            
        });

        click.play();
        setUpSamplesBtn.className = "green";
    });

    // KEYDOWNS
    document.addEventListener("keydown", function(event){
        const key = event.key.toLowerCase();
        switch(key){
            // Drum Pad
            case "i":
                playSample(samples[0], 0);
                playHihatBtn.className =+ "grow";
                break;
            case "o":
                playSample(samples[1], 0);
                break;
            case "p":
                playSample(samples[2], 0);
                break;
            case "j":
                playSample(samples[3], 0);
                break;
            case "k":
                playSample(samples[4], 0);
                break;
            case "l":
                playSample(samples[5], 0);
                break;
            case "n":
                playSample(samples[6], 0);
                break;
            case "m":
                playSample(samples[7], 0);
                break;
            case ",":
                playSample(samples[8], 0);
                break;

            // Sample Chops
            case "q":
                playSample(samples[9], 0);
                break;
            case "w":
                playSample(samples[10], 0);
                break;
            case "e":
                playSample(samples[11], 0);
                break;
            case "a":
                playSample(samples[12], 0);
                break;
            case "s":
                playSample(samples[13], 0);
                break;
            case "d":
                playSample(samples[14], 0);
                break;

            // Loops
            
            case "1":
                let loop16Playing = false;
                if(!loop16Playing){
                    loop16.play();
                    playLoop16Btn.innerHTML = "<i class='fas fa-pause'></i><p>1</p>"
                    loop16Playing=true;
                }
                else{
                    loop16.pause();
                    playLoop16Btn.innerHTML = "<i class='fas fa-play'></i><p>1</p>"
                    loop16Playing=false;
                }
                break;

            case "2":
                let loop17Playing = false;
                if(!loop17Playing){
                    loop17.play();
                    playLoop17Btn.innerHTML = "<i class='fas fa-pause'></i><p>2</p>"
                    loop17Playing=true;
                }

                else{
                    loop17.pause();
                    playLoop17Btn.innerHTML = "<i class='fas fa-play'></i><p>2</p>"
                    loop17Playing=false;
                }
                break;

            case "3":
                let loop18Playing = false;
                if(!loop18Playing){
                    loop18.play();
                    playLoop18Btn.innerHTML = "<i class='fas fa-pause'></i><p>3</p>"
                    loop18Playing=true;
                }

                else{
                    loop18.pause();
                    playLoop18Btn.innerHTML = "<i class='fas fa-play'></i><p>3</p>"
                    loop18Playing=false;
                }
                break;

            case "4":
                let loop19Playing = false;
                if(!loop19Playing){
                    loop19.play();
                    playLoop19Btn.innerHTML = "<i class='fas fa-pause'></i><p>4</p>"
                    loop19Playing=true;
                }

                else{
                    loop19.pause();
                    playLoop19Btn.innerHTML = "<i class='fas fa-play'></i><p>4</p>"
                    loop19Playing=false;
                }
                break;
                
            default:
                break;
        };
    });

    //ASYNCRHONOUS FUNCTIONS - Setting up sample file paths so I can access them from the audio buffer

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

    //ROUTING
    function playSample(audioBuffer, time, loop=false){//the vars passed into this function show why all of my playSamples are written in this format: playSample(samples[15], 0, true)
        const sampleSource = audioContext.createBufferSource();
        sampleSource.buffer = audioBuffer;
        sampleSource.connect(audioContext.destination);
        sampleSource.loop = loop;
        sampleSource.start(time);
        return sampleSource;
    }
})();


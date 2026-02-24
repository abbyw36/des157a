(function(){
    "use strict";
    console.log("reading js");

    const playButton = document.querySelector(".play");
    
    const windSound = new Audio('sounds/wind.mp3');
    const leavesSound = new Audio('sounds/leaves.mp3');
    const shipSound = new Audio('sounds/ship.mp3');
    const oceanSound = new Audio('sounds/ocean.mp3');
    const songSound = new Audio('sounds/song.mp3');

    windSound.loop=true;
    leavesSound.loop=true;
    shipSound.loop=true;
    oceanSound.loop=true;
    songSound.loop=true;

    windSound.volume = 0;
    leavesSound.volume = 0;
    shipSound.volume = 0;
    oceanSound.volume = 0;

    let isPlaying = false; //i open the site with nothing playing.

    playButton.addEventListener('click', function(){
        if(!isPlaying){ //if nothing's playing, then the "play" button is visible.
            songSound.play();
            windSound.play();
            shipSound.play();
            leavesSound.play();
            oceanSound.play();

            playButton.innerHTML = "<i class='fas fa-pause'></i> Pause";
            isPlaying = true;
        }

        else{ //if something is playing, i.e. isPlaying = true, then the "pause" button would be visible instead.
            songSound.pause();
            windSound.pause();
            shipSound.pause();
            leavesSound.pause();
            oceanSound.pause();
        
            playButton.innerHTML = "<i class='fas fa-play'></i> Listen";
            isPlaying = false;
        }
    });

    window.addEventListener('load', function(){
        const description = document.querySelectorAll("section");
        let descriptionTop = [];
        let pageTop;
        let counter = 1;
        let prevCounter = 1;
        let doneResizing;

        resetPagePosition();

        window.addEventListener('scroll', function(){
            pageTop = window.pageYOffset + 400;

            if(pageTop > descriptionTop[counter]){
                counter ++;
                console.log(`scrolling down ${counter}`);
            }

            else if(counter > 1 && pageTop < descriptionTop[counter - 1]){
                counter --;
                console.log(`scrolling up ${counter}`);
            }

            if(counter != prevCounter){
                document.querySelector("figure img").className = 'sect' + counter;
                prevCounter = counter;
            }

            // sounds
            if (counter>1){
                windSound.volume = 1.0;
            }
                else{
                    windSound.volume = 0;
                }

            if (counter>2){
                shipSound.volume = 1.0;
            }
                else{
                    shipSound.volume = 0;
                }

            if(counter>3){
                leavesSound.volume = 1.0;
            }
                else{
                    leavesSound.volume = 0;
                }

            if(counter > 4){
                oceanSound.volume = 1.0;
            }
                else{
                    oceanSound.volume = 0;
                }
        });

        window.addEventListener('resize', function () {

            clearTimeout(doneResizing);
            doneResizing = setTimeout(function () {

                resetPagePosition();

            }, 500);
        });

        function resetPagePosition() {
            descriptionTop = [];
            description.forEach(function (description) {
                descriptionTop.push(Math.floor(description.getBoundingClientRect().top) + window.pageYOffset);
            });

            const pagePosition = window.pageYOffset + 300;
            counter = 0;

            descriptionTop.forEach(function (description) { if (pagePosition > description) { counter++; } });

        }
    });
})();


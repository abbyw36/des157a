(function(){
    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("form");
    const madLib1 = document.querySelector("#madlib-1");
    const madLib2 = document.querySelector("#madlib-2");

    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        const one = document.querySelector("#one").value;
        const two = document.querySelector("#two").value;
        const three = document.querySelector("#three").value;
        const four = document.querySelector("#four").value;
        const five = document.querySelector("#five").value;
        const six = document.querySelector("#six").value;
        const seven = document.querySelector("#seven").value;
        const eight = document.querySelector("#eight").value;
        const nine = document.querySelector("#nine").value;
        const ten = document.querySelector("#ten").value;
        const eleven = document.querySelector("#eleven").value;
        const twelve = document.querySelector("#twelve").value;
        const thirteen = document.querySelector("#thirteen").value;
        const fourteen = document.querySelector("#fourteen").value;
        const fifteen = document.querySelector("#fifteen").value;
        

        let myText1;
        let myText2;

        document.querySelector("#overlay").className = "showing";
       

        if(one == "" || two == "" || three == "" || four == "" || five == ""|| six == "" || seven == "" || eight == "" || nine == "" || ten == "" || eleven == "" || twelve == "" || thirteen == "" || fourteen == "" || fifteen == ""){
            myText1 = "Please fill in all words!";
            myText2 = "";
        }

        else{
            myText1 = `<strong>Your Story:</strong><br>On a <strong>${one}</strong> and <strong>${two} ${three}</strong>, <strong>${four}</strong> was <strong>${five}</strong> through <strong>${six}</strong>’s <strong>${seven}</strong> party. <strong>${four}</strong> picked up a drink—a <strong>${eight}</strong> cocktail to be precise—on their way up the grand staircase. Sipping lightly, they struck up a conversation with <strong>${six}</strong>, but quickly their speech began to slur and they started to sway, struggling to keep their balance. They collapsed to the ground, tumbling down the staircase to their death.`;

            myText2 = `While their death was at first believed to be a result of alcohol poisoning, an autopsy revealed startling amounts of <strong>${nine}tyl</strong> <strong>${ten}line</strong> <strong>${eleven}ase</strong>, an enzyme found in the potent venom extracted from the hind <strong>${twelve}</strong> of the rare <strong>${thirteen} ${fourteen}</strong>. It was clear: <strong>${four}</strong> was <strong>${fifteen}</strong> murdered. And although the venom’s identification revealed the truth of the “how-dunnit”, the real mystery remains: <br><em>Whodunnit?<em>`;

            document.querySelector("#one").value = "";
            document.querySelector("#two").value = "";
            document.querySelector("#three").value = "";
            document.querySelector("#four").value = "";
            document.querySelector("#five").value = "";
            document.querySelector("#six").value = "";
            document.querySelector("#seven").value = "";
            document.querySelector("#eight").value = "";
            document.querySelector("#nine").value = "";
            document.querySelector("#ten").value = "";
            document.querySelector("#eleven").value = "";
            document.querySelector("#twelve").value = "";
            document.querySelector("#thirteen").value = "";
            document.querySelector("#fourteen").value = "";
            document.querySelector("#fifteen").value = "";
    };

        madLib1.innerHTML = myText1;
        madLib2.innerHTML = myText2;

        

    });
    document.querySelector(".close").addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector("#overlay").className = "hidden";
    })
    document.addEventListener('keydown', function(event){
        if (event.key === "Escape"){
            document.querySelector("#overlay").className = "hidden";
        }
    })

}())
alert("Hello User")
            //Hello User! This is an alert I added on start up.
            var countdown = 10;

            firstName = prompt("first name: ");
            while(firstName.length < 3){
                firstName =prompt("Please enter a longer first name.(At least 3 characters)")
            }

            lastName = prompt("last name ");
            while(lastName.length < 3){
                lastName = prompt("Please enter a longer last name.(At least 3 characters)")
            }

            aFewLetters = firstName.trim().substring(0, 20);
            aFewMoreLetters = lastName.trim().substring(0, 20);
            CombinedLetters = aFewLetters + aFewMoreLetters

            while(CombinedLetters.length > 20){
                CombinedLetters = prompt("Please re-enter a name with 20 characters or less")
            }

            if(aFewLetters.includes("a")){
                alert("true")
            }

            alert("a few letters: " + aFewLetters.toUpperCase() + " :");
            alert("a few more letters: " + aFewMoreLetters.toLowerCase() + " :");

            alert(aFewLetters + " " + aFewMoreLetters);

            BadgeNum = prompt("Badge number: ");
            while(BadgeNum.length < 3){
                BadgeNum = prompt("Please enter a longer Badge number.(At least 3 digits)")
            }

            function myAlert(){ //This is the start of my function and the name. I can use this to call on it later so I won't have to repeat code so much.
            for(countdown = 10; countdown > -1; countdown--){ //This particular part identifies the start, end and which way the countdown will go for.
            document.getElementById("DisplayCountdown").innerHTML = countdown; //This brings the countdown to the screen as it continuously updates.
            countdown = countdown - 1; //This tells the countdown how much to go down by.
            }    
            if(countdown < 6){
                document.getElementById("DisplayCountdown").innerHTML = "Warning Less than ½ way to launch, time left =";
            }
            document.getElementById("DisplayCountdown").innerHTML = "Blastoff!";//This is the end message which only happend after the for loop.
            }
            
            function StartFunc() { //For the buttons to work as intended they would have to be seperate. This is why these two functions seem the same and yet are slightly different.
                document.getElementById("demo").innerHTML = "Starting!"//This line calls to the "demo" line and writes out the phrase when clicked.
                document.getElementById("startbutton").disabled = true//This will simply disable the start button.
                document.getElementById("stopbutton").disabled = false//And this is what enables the stop button.
                }
                function stopFunc() {
                    document.getElementById("demo").innerHTML = "Stopped!"
                    document.getElementById("stopbutton").disabled = true//Start and stop buttons have to disable themselves in order to allow the other button to be pressed.
                    document.getElementById("startbutton").disabled = false//Had the code been reversed then there would only be one button active until the page is reloaded.
                }

            //This is the write function on javascript. Even the comment method changes between languages.

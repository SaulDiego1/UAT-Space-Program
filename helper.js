alert("Hello User")
            //Hello User! This is an alert I added on start up.
            var countdown = 10;

            function myAlert(){ //This is the start of my function and the name. I can use this to call on it later so I won't have to repeat code so much.
            for(countdown = 10; countdown > -1; countdown--){ //This particular part identifies the start, end and which way the countdown will go for.
            document.getElementById("DisplayCountdown").innerHTML = countdown; //This brings the countdown to the screen as it continuously updates.
            countdown = countdown - 1; //This tells the countdown how much to go down by.
            }
            document.getElementById("DisplayCountdown").innerHTML = "Blastoff!";//This is the end message which only happend after the for loop.
            }


            //This is the write function on javascript. Even the comment method changes between languages.

var song = "samba.ogg";


function preload(){

    //music, sfx
    song = loadSound('assets/sounds/samba.ogg');
    
    }
    

    function setup() {
      
        //bg music
        song.play();
        song.setVolume(5);
        song.loop();
      
      }
      
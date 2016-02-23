app.controller('MusicController', function($scope, $interval, $timeout){
    $scope.test = "Music";
    var recording = false;
    var record = [];
       
    $scope.boxes = [
        {note: "A", wave: "/assets/sounds/scale-001.mp3"},
        {note: "A#", wave: "/assets/sounds/scale-002.mp3"},
        {note: "B", wave: "/assets/sounds/scale-003.mp3"},
        {note: "C", wave: "/assets/sounds/scale-004.mp3"},
        {note: "C#", wave: "/assets/sounds/scale-005.mp3"},
        {note: "D", wave: "/assets/sounds/scale-006.mp3"},
        {note: "D#", wave: "/assets/sounds/scale-007.mp3"},
        {note: "E", wave: "/assets/sounds/scale-008.mp3"},
        {note: "F", wave: "/assets/sounds/scale-009.mp3"},
        {note: "F#", wave: "/assets/sounds/scale-010.mp3"},
        {note: "G", wave: "/assets/sounds/scale-011.mp3"},
        {note: "G#", wave: "/assets/sounds/scale-012.mp3"},
        {note: "rest", wave: ""}];
      
      
     $scope.playNote = function(box){
         var wave = document.getElementById(box.note);
         wave.currentTime = 0;
         wave.play();
         if (recording){
             record.push(box)
         }     
     }  
     
     $scope.record = function(){
         recording = !recording;
     }
      
     
     $scope.playRecorded = function(){
         if (recording){
             recording = false
         }
        
		var i = 0;
		var interval = $interval(function() {
			if(i > 0){
                record[i-1].lightUp = false;
            }
            record[i].lightUp = true;
            $scope.playNote(record[i]);
	        i++;
	        if (i >= record.length) {
                $timeout(function(){
                    record[i-1].lightUp = false;
                }, 600)
                $interval.cancel(interval);
	        }
	   }, 600);
     }
})

function whatToDo(dayOfWeek, weather) {
    //Create a compound conditional statement below. 
    

    //These three lines will have to be used in the conditional statement. Feel free to re-arrange.
    $("#result").html("I'll go for a bike ride.");
    $("#result").html("I'll go binge watch Netflix.");
    $("#result").html("I'll go to the park.");

} 

$("button").click(function(){
    var dayOfWeek = $("#dayOfWeek").val();
    var weather = $("#weather").val();
   
    whatToDo(dayOfWeek, weather);  
    
var day = dayOfWeek;
var weather2=weather;

    if(day === "saturday"){
        
        }else if(weather2==="sunny"){}
      
 $("#result").html("I'll go for a bike ride.");
     
    if(day==="saturday"){
        
        }else if(weather2==="cloudy"){}
        
$("#result").html("I'll go binge watch Netflix.");

    if(day==="sunday"){
        
        }else if(weather2==="sunny"){}
        
$("#result").html("I'll go to the park.");

    if(day==="sundau"){
        
        }else if(weather2==="cloudy"){}

$("#result").html("I'll go binge watch Netflix.");











});
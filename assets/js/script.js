function startTime() {
    var currentDay = moment().format("LLLL");
    $("#currentDay").append(currentDay);

    

const d = new Date();
let currentHour = d.getHours() +1;
    for (var i = 9; i< 18; i++)
        if(i < currentHour){
            $('#9am').addClass("past");
        } else if ( i == currentHour){
            $('#9am').addClass("present");
        } else if ( i > currentHour){
            $('#9am').addClass("future");
        }
        if(i < currentHour){
            $('#10am').addClass("past");
        } else if ( i == currentHour){
            $('#10am').addClass("present");
        } else if ( i > currentHour) {
            $('#10am').addClass("future");
        }
        if(i < currentHour){
            $('#11am').addClass("past");
        } else if ( i == currentHour){
            $('#11am').addClass("present");
        } else if ( i > currentHour) {
            $('#11am').addClass("future");
        }
        if(i < currentHour){
            $('#12pm').addClass("past");
        } else if ( i == currentHour){
            $('#12pm').addClass("present");
        } else if ( i > currentHour) {
            $('#12pm').addClass("future");
        }
        if(i < currentHour){
            $('#1pm').addClass("past");
        } else if ( i == currentHour){
            $('#1pm').addClass("present");
        } else if ( i > currentHour) {
            $('#1pm').addClass("future");
        }
        if(i < currentHour){
            $('#2pm').addClass("past");
        } else if ( i == currentHour){
            $('#2pm').addClass("present");
        } else if ( i > currentHour) {
            $('#2pm').addClass("future");
        }
        if(i < currentHour){
            $('#3pm').addClass("past");
        } else if ( i == currentHour){
            $('#3pm').addClass("present");
        } else if ( i > currentHour) {
            $('#3pm').addClass("future");
        }
        if(i < currentHour){
            $('#4pm').addClass("past");
        } else if ( i == currentHour){
            $('#4pm').addClass("present");
        } else if ( i > currentHour) {
            $('#4pm').addClass("future");
        }
        if(i < currentHour){
            $('#5pm').addClass("past");
        } else if ( i == currentHour){
            $('#5pm').addClass("present");
        } else if ( i > currentHour) {
            $('#5pm').addClass("future");
        }
        if(i < currentHour){
            $('#6pm').addClass("past");
        } else if ( i == currentHour){
            $('#6pm').addClass("present");
        } else if ( i > currentHour) {
            $('#6pm').addClass("future");
        }
        
    

};





$(".saveBtn").on("click", function() {
    var task =$(this).siblings('.time').text();
    var work = $(this).siblings('.description').val()

    localStorage.setItem(task,work);
});

function showTask(){
    $('.time-block').each(function(){
        var show = $(this).children(".time").text();
        var workStored= localStorage.getItem(show);
        if(workStored !== null){
            $(this).children(".description").val(workStored);
        }
        if (workStored === null){
            $(this).children(".description").attr("placeholder", "Free Time!")
        }
        if (workStored === ''){
            $(this).children(".description").attr("placeholder", "Free Time!")
        }
    })
}
showTask()
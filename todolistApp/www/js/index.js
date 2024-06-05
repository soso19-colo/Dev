function ajouterTask() {
    const task = document.getElementById('task');
    const taskListInProgress = document.getElementById('taskListInProgress');
    
    if (task.value) {
        let newItem = document.createElement('li');
        newItem.innerHTML = task.value;
        taskListInProgress.appendChild(newItem);
        
        $(newItem).on('swiperight', function() {
            $(this).toggleClass('done');
            $(this).appendTo('#taskListCompleted');
            $(taskListInProgress).listview('refresh');
            $(taskListCompleted).listview('refresh');
        });

        $(newItem).on('swipeleft', function() {
            $(this).hide('slow', function() {
                $(this).remove();
            });
            $(taskListInProgress).listview('refresh');
        });

        $(taskListInProgress).listview('refresh');
    }
    task.value = '';
    task.focus();
}

function reinitialiserList() {
    const task = document.getElementById('task');
    const taskListInProgress = document.getElementById('taskListInProgress');
    const taskListCompleted = document.getElementById('taskListCompleted');
    
    task.value = '';
    taskListInProgress.innerHTML = '';
    taskListCompleted.innerHTML = '';
    task.focus();
}

$(document).on("pagecreate", function() {
    $(document).on("swipeleft", "#taskListInProgress li", function() {
        $(this).remove();
    });

    $(document).ready(function() {
        $(document).on("swiperight", "#taskListInProgress li", function(event) {
            event.preventDefault(); 
            $(this).toggleClass("done");
            $(this).appendTo('#taskListCompleted');
            $('#taskListInProgress').listview('refresh');
            $('#taskListCompleted').listview('refresh');
        });

        $(document).on("swipeleft", "#taskListCompleted li", function() {
            $(this).remove();
        });
    });
});

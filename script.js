// add
$('button').on('click', () => {
    let newToDo = document.querySelector('input').value;

    $('.task-container').last().after('<div class="task-container">'+'<div class="todo-text">'+newToDo+'</div>'
        + '<img class="delete" src="\delete_icon.svg" alt="delete">'
        + '<img class="done" src="\done_icon.svg" alt="done">'
    );
});

// delete
$('.tasks-container').on('click', '.delete', (event) => {
    console.log('deleted');
    event.target.parentNode.remove();
});


// done
$('.tasks-container').on('click', '.done', (event) => {
    event.target.parentNode.style = 'text-decoration: line-through';
});
// add
$('button').on('click', () => {
    let newToDo = document.querySelector('input').value;

    $('.task-container').last().after('<div class="task-container">'+'<div class="todo-text">'+newToDo+'</div>'
        + '<img class="delete" src="\delete_icon.svg" alt="delete" onclick="">'
        + '<img class="done" src="\done_icon.svg" alt="done" onclick="">'
    );
});

// // delete
$('.tasks-container').on('click', '.delete', (event) => {
    console.log('deleted');
    event.target.parentNode.remove();
    // console.log(this);
    // $('.tasks-container').delete;
    // $(event.target).
    // text('This img was clicked.');
});

// $('.done').on('click', () => {
//     $('ul').append('<li onclick= "lineThrough(this)">' + newToDo + '</li>');
// });

// done
$('.tasks-container').on('click', '.done', (event) => {
    event.target.parentNode.style = 'text-decoration: line-through';
    // console.log($(event.target));
    // // ('.todo-text').style = 'text-decoration: line-through';
    // // console.log($('.todo-text'));
    // // console.log('done');
    // // // $(event.target).
    // // $(event.target).text('This img was clicked.');
});
// add
$('button').on('click', () => {
    let newToDo = document.querySelector('input').value;
    // console.log(input.value);

    $('.task-container').after('<div class="task-container">'+'<div class="todo-text">'+newToDo+'</div>'
        + '<img class="delete" src="\delete_icon.svg" alt="delete" onclick="">'
        + '<img class="done" src="\done_icon.svg" alt="done" onclick="lineThrough(this)">'
    );
    console.log('i have been clicked');
    // +'<img class="delete" src="\delete_icon.svg" alt="delete"><img class="done" src="\done_icon.svg" alt="done" onclick= "lineThrough(this)">'
});

// done
// $('.done').on('click', () => {
//     $('ul').append('<li onclick= "lineThrough(this)">' + newToDo + '</li>');
// });

// delete


function lineThrough(li) {
    p.style = 'text-decoration: line-through';
}
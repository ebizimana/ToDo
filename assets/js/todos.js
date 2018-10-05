//Check off specific Todos By Clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed")
})

//Click on the X to delete a todo
$("ul").on("click", "span", function(event){
  event.stopPropagation(); // stop the event from bobling up
  // Retrive the li that was clicked on
  $(this).parent().fadeOut(500,function(){
    $(this).remove()
  })
})

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // Grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("")
    // create a new li and add to ul
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>")
  }
})

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle()
})

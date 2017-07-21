$(document).ready(function(){
  submitForm()
});

function submitForm(){
  $('form').on("submit", function(event){
    let item = this.item.value
    $('#list ol').append(`<li>${item}</li>`)
    event.preventDefault()
  })
}

// document.querySelector('input[type="color"]').value = '#0000ff'
$( "#first" ).on('click', (function() {
    console.log( 'Yeah, you clicked me' );
  }));

$( "#second" ).on('click', (function() {
    $('#first').text('New Text');
}));


/* $( "#third" ).on('click', (function() {
    let backgroundColor = $('button').css('background-color', '#value');
})); */

// $('.red').css('background-color', 'blue');

/* $( "#third" ).on('click', (function(){
    $('input').change(function(){
       $(this).addClass('changed');
    })
})); */
$(document).ready(function(){
  $(document).on('keydown',function(e,word){
//    e.preventDefault();
    if(e.keyCode == 40){
    animSequence.seqNumb += 1;
    $wordEndChange(hablar, $('.second'));

    $('.second').addClass('animated bounceInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

      $('.second').removeClass('animated bounceInDown');
    });
  }else if(e.keyCode == 38){
    animSequence.seqNumb -= 1;
    $wordEndChange(hablar,$('.second'));
    $('.second').addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

      $('.second').removeClass('animated bounce');
    });
  }
  console.log(animSequence.seqNumb);
});

animSequence = {
  seqNumb: 0

}

function $wordEndChange(word,$targetSelector){
   $targetSelector.html(word.endings[animSequence.seqNumb]);
  if(animSequence.seqNumb < 0){animSequence.seqNumb = 0}
}



function SpanWord(initial, endings){
    this.initial = initial;
    this.endings = endings;
  }

  var hablar = new SpanWord('habl',['o','a','amos','an','eis',]);

  var comer = new SpanWord('com',['o','e','emos','en']);

  $('.btn').click(function(){
    $wordEndChange(comer,$('.second'))

  });


  animSequence = {
    seqNumb: 0

  }


});

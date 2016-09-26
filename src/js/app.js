$(function(){
frostedGlass();

  $(window).resize(function(){
    frostedGlass();
  });
});

function frostedGlass(){
  var element = $('[data-action=frostedGlassInit]');
  var len = element.length;
  for(let i=0; i<len; i++){
    var obj = $(element[i]);
    var objProp = {
      width: obj.width(),
      height: obj.height(),
      leftPos: obj.offset().left,
      topPos: obj.offset().top
    },
    imageSrc = obj.data('imagesrc'),
    blur = obj.find('.image--blur'),
    mask = obj.find('.mask'),
    maskLeftPos = mask.offset().left,
    difference = objProp.leftPos -  maskLeftPos;

    obj.css({
      "background-image": `url('${imageSrc}')`
    })
    blur.css({
      "background-image": `url('${imageSrc}')`,
      left: `${difference}px`,
      width: obj.width(),
      height: obj.height()
    });
  };
};

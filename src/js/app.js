$(function(){
frostedGlass();
  $(window).resize(function(){
    frostedGlass();
  });
});

function frostedGlass(){
  let element = $('[data-action=init]'),
  elementProp = {
    width: element.width(),
    height: element.height(),
    leftPos: element.offset().left,
    topPos: element.offset().top
  },
  blur = element.find('.image--blur'),
  mask = element.find('.mask'),
  maskLeftPos = mask.offset().left,
  difference = elementProp.leftPos -  maskLeftPos;

  blur.css({
    left: `${difference}px`,
    top: `${elementProp.topPos - 15}px`,
    width: element.width()
  });
};

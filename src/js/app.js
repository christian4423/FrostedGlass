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
    leftPos: element.position().left,
    topPos: element.position().top
  },
  blur = element.find('.image--blur'),
  mask = element.find('.contentContainer'),
  maskLeftPos = mask.position().left,
  difference = elementProp.leftPos -  maskLeftPos;

  blur.css({
    left: `${difference}px`,
    top: `${elementProp.topPos - 15}px`,
  });
  blur.width(element.width());
}

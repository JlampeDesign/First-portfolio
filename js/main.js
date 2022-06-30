const slider = document.querySelector('.carousel');

var sectionIndex = 0;

//fullscreen carousel

document.querySelectorAll('.control .row1 li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function(){
        sectionIndex = ind;
        document.querySelector('.control .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translate(' + (ind) * -20 + '%)';
    });
});

//medium sized screen carousel

document.querySelectorAll('.control .row2 li').forEach(function(indicator, ind) {
  indicator.addEventListener('click', function(){
      sectionIndex = ind;
      document.querySelector('.control .selected').classList.remove('selected');
      indicator.classList.add('selected');
      slider.style.transform = 'translate(' + (ind) * -20 + '%)';
  });
});

// phone sized screen carousel

document.querySelectorAll('.control .row3 li').forEach(function(indicator, ind) {
  indicator.addEventListener('click', function(){
      sectionIndex = ind;
      document.querySelector('.control .selected').classList.remove('selected');
      indicator.classList.add('selected');
      slider.style.transform = 'translate(' + (ind) * -20 + '%)';
  });
});





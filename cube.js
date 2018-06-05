/* CREATE CUBE DOM STRUCTURE IN JS */

//<div class="cube">
//  <div class="cube-side left"></div>
//  <div class="cube-side right"></div>
//  <div class="cube-side top"></div>
//  <div class="cube-side bottom"></div>
//  <div class="cube-side front"></div>
//  <div class="cube-side back"></div>
//</div>

function Cube (){
  
  var cube = document.createElement('div');
  cube.classList.add('cube');
  
  var sides = ['left', 'right', 'top', 'bottom', 'front', 'back'];
  for(let i = 0; i < sides.length; i++){
    var side = document.createElement('div');
    side.classList.add('cube-side');
    side.classList.add(sides[i]);
    cube.appendChild(side);
  }

  return cube;
  
};

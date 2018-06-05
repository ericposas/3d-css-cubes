/*
  var cube1 = new Cube();
  document.body.appendChild(cube1);
  cube1.id = 'cube1';
  TweenLite.set('#cube1', {scale:0,x:100,y:100});
  TweenLite.to('#cube1', .5, {scale: 1});
  TweenLite.to('#cube1', 2, {
    x: 100,
    y: 200,
    rotationX: 360,
    rotationY: 360,
    transformOrigin: '1em 1em',
    onComplete: right
  });
  
  var cube2 = new Cube();
  document.body.appendChild(cube2);
  cube2.id = 'cube2';
  T.set(cube2, { x:450, y:0, z:50 });
  T.set('#cube2 .cube-side', { css:{ backgroundColor:'blue', opacity:.5 } });
  
  
  var cube3 = new Cube();
  document.body.appendChild(cube3);
  cube3.id = 'cube3';
  T.set(cube3, {x:800, y:750, z:-500});
  T.set('#cube3 .cube-side', { css:{ backgroundColor:'red', opacity:.5 } });
  */
  
  /* CUBE 1 ANIMATION(S) */
  /*
  function right (){
    T.to('#cube1 .cube-side', .25, { css:{ backgroundColor: 'red', opacity: .5 } });
    T.to('#cube1', 1.5, { x: 500, ease: Back.easeOut, onComplete: down });
  }
  
  function down (){
    T.to('#cube1 .cube-side', .25, { css:{ backgroundColor: 'aqua' } });
    T.to('#cube1', 1.5, { y: 500, ease: Back.easeOut, onComplete: left });
  }
  
  function left (){
    T.to('#cube1 .cube-side', .25, { css:{ backgroundColor: 'blue' } });
    T.to('#cube1', 1.5, { x: 100, ease: Back.easeOut, onComplete: up });
  }
  
  function up (){
    T.to('#cube1 .cube-side', .25, { css:{ backgroundColor: 'cyan' } });
    T.to('#cube1', 1.5, { y: 100, ease: Back.easeOut, onComplete: center });
  }
  
  function center (){
    T.to('#cube1 .cube-side', .25, { css:{ backgroundColor: 'red' } });
    T.to('#cube1', 1.5, { rotation:360, x: 340, y: 300, ease: Back.easeOut, onComplete: flip });
  }
  
  function flip (){
    T.to('#cube1 .cube-side', 3, { css:{ backgroundColor: 'none', opacity: .75 } });
    T.to('#cube1', 3, { x: 50, y: 50, rotationX: 1080, rotationY:720, ease:Power2.easeInOut });
  }
  */
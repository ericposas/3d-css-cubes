function init(){
  
  var T = TweenLite;
  var log = console.log;
  
  /* GENERATE RANDOM CUBES */
  for(let i = 0; i < 20; i++){
    let cube = new Cube();
    document.body.appendChild(cube);
    cube.id = `cube0${i}`;
    T.set(cube, { x:getRandomInt(0, innerWidth), y:getRandomInt(0, innerHeight), z:getRandomInt(-1000, 200) });
    random_movement(cube);
  }
  
  function random_movement(cube) {
    T.to(cube, getRandomInt(1, 3), {
      x: getRandomInt(0, innerWidth),
      y: getRandomInt(0, innerHeight),
      z: getRandomInt(-1000, 200),
      rotationX: getRandomInt(-360, 360),
      rotationY: getRandomInt(-360, 360),
      transformOrigin: '1em 1em',
      onComplete: random_movement,
      onCompleteParams: [cube]
    });
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
}

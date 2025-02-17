$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();
     

    // TODO 2 - Create Platforms
    createPlatform(450, 540, 500, 50, "pink");
    createPlatform(650, 450, 450, 50, "purple");
    createPlatform(300, 650, 400, 35, "green");
    createPlatform(800, 350, 500, 40, "blue");
    createPlatform(1250, 250, 50, 150, "orange");

    // TODO 3 - Create Collectables
    createCollectable("steve", 1200, 250);
createCollectable("diamond", 800, 200, 0.8, 0.9);
createCollectable("diamond", 500, 170, 0.6, 0.7);


    
    // TODO 4 - Create Cannons
    createCannon("top", 350, 1100);
    createCannon("right", 350, 1100);
    createCannon("left", 450, 1200)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

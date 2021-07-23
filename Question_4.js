const length = 10;
 const height = 20;
 function findcuboid(width){
   let cuboid = length*width*height;
   return cuboid
 };
 document.getElementById("cuboid").innerHTML = "The cuboid value is : " + " " +findcuboid(4);

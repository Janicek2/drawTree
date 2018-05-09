
function drawTree(k) {
    for (var i = 0; i <= k; i++) {
      var star = "*";
      var space = " ";
  
      for (var j = 0; j < k - i ; j++) {
        star += "**";
      }
     for (var s = 0; s <= i + 1; s++) {
        space += " ";
     }
  
      console.log(space + star);
    }
  }
  
  drawTree(8);
  

function devicemotionHandler(event){
      // 加速度X軸
      var x = event.acceleration.x;
      // 加速度Y軸
      var y = event.acceleration.y;
      // 加速度Z軸
      var z = event.acceleration.z;
      //ジャイロX軸
      var beta = event.beta;
      // ジャイロY軸
      var gamma = event.gamma;
      // ジャイロZ軸
      var alpha = event.alpha;

      var html = "";
      html += "X回転 : " + x + "<br>";
      html += "Y回転 : " + y + "<br>";
      html += 'Z回転 : ' + z;
      $("#accelero").html(html);
      html += "BETA : " + beta + "<br>";
      html += "GAMMA : " + gamma + "<br>";
      html += 'ALPHA : ' + alpha;
      $("#gyro").html(html);
}

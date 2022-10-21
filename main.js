

// *Bai 1
document.getElementById("btnCount").onclick = function () {
  var tienluong1ngay = document.getElementById("tienluong1ngay").value * 1;
  var songaylam = document.getElementById("songaylam").value * 1;
  
  // xu ly
  console.log(tienluong1ngay, songaylam);
  var total = tienluong1ngay * songaylam;
  var result = "Tong tien";
  result += "<br />";
  result += total + "VND";

  // in ket qua

  document.getElementById("infocount").innerHTML = result;

}


// Bai 2
// 
document.getElementById("btncount").onclick = function () {
  var number1 = document.getElementById("number1").value * 1;
  var number2 = document.getElementById("number2").value * 1;
  var number3 = document.getElementById("number3").value * 1;
  var number4 = document.getElementById("number4").value * 1;
  var number5 = document.getElementById("number5").value * 1;


  // xu ly
  console.log(number1, number2, number3, number4, number5);
  var total = (number1 + number2 + number3 + number4 + number5) / 5;
  
  
  
  // in ket qua
  document.getElementById("infotrungbinh").innerHTML = total;

}



// Bai 3

document.getElementById("btnquydoi").onclick = function(){
  var usd = document.getElementById("usd").value * 1;
  




  console.log(usd, );
  var total = usd * 23000;
  
  total += "VND";

  document.getElementById("quydoi").innerHTML = total;
}



// bai 4
document.getElementById("btntinh").onclick = function(){
  var chieudai = document.getElementById("chieudai").value * 1;
  var chieurong = document.getElementById("chieurong").value * 1;

// xu ly

  var total = chieudai * chieurong;
  var total2 = (chieudai + chieurong) * 2;

  var result = "Dien tich";
  var result2 = "Chu vi";

  result += total 
  result2 += total2  

// in ket qua
  document.getElementById("tinh").innerHTML = result
  document.getElementById("tinh2").innerHTML = result2
  
}



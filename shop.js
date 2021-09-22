let count = 0;
let buypdprice = [];
let finalprice = [];
let today = new Date();
let showprice;

$(document).ready(function () {
  initial();
  calcpric();
  $(".card").click(function () {
    let alreadybuy = false;
    let img = $(this).find("img").attr("src");
    let pname = $(this).find(".pname").text();
    let code = $(this).find(".pcode").text();
    let price = $(this).find(".price").text();

    let items = $(".item");

    for (let index = 0; index < items.length; index++) {
      let exist = items[index].childNodes[1].childNodes[1].innerText;
      if (exist == code) {
        alreadybuy = true;
        alert("Do you want to buy more ?");
      }
    }

    if (!alreadybuy) {
      buypdprice.push(Number(price));
      $(".calculationproducts").append(
        '<div class="item">' +
          '<img src="' +
          img +
          '"class="imga"/>' +
          '<div class="iteminfo">' +
          '<p id="pname">' +
          pname +
          "</p>" +
          '<p id="pcode">' +
          code +
          "</p>" +
          "</div>" +
          '<input type="text" value="" class="quantities" />' +
          '<div id="' +
          count +
          '" class="delete">' +
          '<ion-icon name="trash-outline"></ion-icon>' +
          "</div>" +
          "</div>"
      );
      count++;
      console.log(buypdprice);
    }
    calcpric();
    $(".amount").text(showprice);
  });

  $(document).on("click", ".delete", function () {
    buypdprice[$(this).id] = 0;
    $(this).closest(".item").remove();
  });

  let usename = $(".userinfo").text();
  let phone = $(".userphone").text();
  let address = $(".useraddress").text();
  $(".order").click(function () {
    // if (usename == "" && phone == "" && address == "") {
    //   alert("Input Filed cant be empty");
    // } else {
    $(".orderdetail").append(
      "<p>Thank you" +
        usename +
        "</br>" +
        "Your order is confirmed</br>Your order will be deliver to" +
        address +
        "within this week</p>"
    );
    // }
  });
});

let cc = $(".quantities").text();
function initial() {
  $("#distitle").hide();
  $("#disprice").hide();
  checkday();

  //   let totalprice = $(".amount").innerText;

  //   totalprice =
}

function checkday() {
  if (today.getDay() == 3 || time.getDay() == 6) {
    if (Number(today.getHours()) >= 9 && Number(today.getHours()) <= 16) {
      $("#distitle").show();
      $("#disprice").show();
    }
  }
}

function calcpric() {
  let items = $(".item");
  for (let index = 0; index < items.length; index++) {
    currentvalue[index] = items[index].childNodes[1].childNodes[1].innerText;
  }
  for (let index = 0; index < buypdprice.length; index++) {
    finalprice[index] = currentvalue[index] * buypdprice[index];
  }

  for (let index = 0; index < finalPrice.length; index++) {
    showprice += Number(finalPrice[index]);
  }
}

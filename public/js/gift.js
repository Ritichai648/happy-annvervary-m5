//function SendGift() {
//Swal.fire({
   //     title: "เก็บมันไว้ดีๆนะค้าบ",
   //    icon: "success",
//     text: "Iwillloveyouforever@gmail.com",
        color: //"#fdfdfd",
//background: "linear-gradient(#ffaad9,#fffdfe)",
   //     confirmButtonColor: '#f5788a', // optional for button styling
   //     confirmButtonText: 'รับของขวัญ',
     // });
//}

function SendGift() {
  document.getElementById('alert-box').style.display = 'block';
  document.getElementById('alert-message').textContent = 'เก็บมันไว้ดีๆนะค้าบ\nIwillloveyouforever@gmail.com';
}

function hideAlert() {
  document.getElementById('alert-box').style.display = 'none';
}

function updatePage(){
    const pageElement = document.getElementById('page');
    const timeElement = document.getElementById('time');
    const secondsElement = document.querySelector('.seconds span');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  //  Phải khởi tạo giá trị cho Const 
  //  Không được khai báo lại trong cùng block


  let page = '';
  let className = '';
  //Let : không cần phải khởi tạo khi khai báo  và không được khai báo lại trong cùng một block

  if (currentHour >= 5 && currentHour < 12){
    page = 'Chao buoi sang ';
    className = 'morning';
  }
  else if (currentHour >= 12 && currentHour < 18){
    page = "chao buoi chieu";
    className = 'afternoon';
  }
  else{
    page = "chao buoi toi";
    className = "evening";
  }

  pageElement.textContent = page //Thay doi noi dung
  pageElement.className = className // thay doi css

  const timeString = `Bay gio la : ${currentTime.getHours()}:${String(currentTime.getMinutes()).padStart(2, '0')}:${String(currentTime.getSeconds()).padStart(2, '0')}`;
  const timeContent = `Bay gio la : ${currentTime}`;
  timeElement.textContent = timeString;
  // timeElement.textContent = timeContent;

  secondsElement.textContent = currentTime.getSeconds();
}


//Goi ham cap nhap moi ngay 
setInterval(updatePage, 1000);

// cap nhat lan dau khi tai trang 
updatePage();


function changeColor(){
  const textElement = document.getElementById('text')
  const currentColor = textElement.style.color;

  if (currentColor === 'blue'){
    textElement.style.color = 'red';
  }else{
    textElement.style.color = 'blue';
  }
}

//Goi ham thay doi au moi giay 
setInterval(changeColor, 1000);
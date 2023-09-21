     //  ************************start of saba js part ***************************
 // part1 
    // slider 
    let _slider = document.querySelectorAll('.slider>.slider-child')
    let _circle = document.querySelectorAll('.slider>span')
    let _img = document.getElementsByClassName('img ')
    let flag1 = 0
    let _left1 = parseInt((_slider[0].computedStyleMap().get('left')).value)
    let _left2 = parseInt((_slider[1].computedStyleMap().get('left')).value)
    let _left3 = parseInt((_slider[2].computedStyleMap().get('left')).value)
    let _txt = document.getElementById('txt')
    _circle[1].addEventListener('click', () => {
        _left1 = _left1 - 85
        _left2 = _left2 - 85
        _left3 = _left3 - 85
        console.log(_left1);
        console.log(_left2);
        console.log(_left3);
        _slider[0].style.left = _left1 + '%'
        _slider[1].style.left = _left2 + '%'
        _slider[2].style.left = _left3 + '%'
        if (_left3 == 10) {
            _circle[1].style.visibility = 'hidden'
        } else {
            _circle[1].style.visibility = 'visible'
        }
        if (_left1 == 10) {
            _circle[0].style.visibility = 'hidden'
        } else {
            _circle[0].style.visibility = 'visible'
        }
        if (_left1 == 10) {
            _img[0].style.display = 'flex'
            _img[1].style.display = 'none'
            _img[2].style.display = 'none'
            _txt.innerHTML = 'sofa'
        }
        if (_left2 == 10) {
            _img[0].style.display = 'none'
            _img[1].style.display = 'flex'
            _img[2].style.display = 'none'
            _txt.innerHTML = 'chair'
        }
        if (_left3 == 10) {
            _img[0].style.display = 'none'
            _img[1].style.display = 'none'
            _img[2].style.display = 'flex'
            _txt.innerHTML = 'lamps'
        }
    })
    _circle[0].addEventListener('click', () => {
        _left1 = _left1 + 85
        _left2 = _left2 + 85
        _left3 = _left3 + 85
        console.log(_left1);
        console.log(_left2);
        console.log(_left3);
        _slider[0].style.left = _left1 + '%'
        _slider[1].style.left = _left2 + '%'
        _slider[2].style.left = _left3 + '%'
        if (_left1 == 10) {
            _circle[0].style.visibility = 'hidden'
        } else {
            _circle[0].style.visibility = 'visible'
        }
        if (_left3 == 10) {
            _circle[1].style.visibility = 'hidden'
        } else {
            _circle[1].style.visibility = 'visible'
        }
        if (_left1 == 10) {
            _img[0].style.display = 'flex'
            _img[1].style.display = 'none'
            _img[2].style.display = 'none'
            _txt.innerHTML = 'sofa'
        }
        if (_left2 == 10) {
            _img[0].style.display = 'none'
            _img[1].style.display = 'flex'
            _img[2].style.display = 'none'
            _txt.innerHTML = 'chair'
        }
        if (_left3 == 10) {
            _img[0].style.display = 'none'
            _img[1].style.display = 'none'
            _img[2].style.display = 'flex'
            _txt.innerHTML = 'lamps'
        }
    })
    // menu 
    let _menu = document.getElementsByClassName('bigMenu')[0]
    let _svg = document.querySelectorAll('#menu>svg')
    _svg[0].addEventListener('click', () => {
        _menu.style.width = '150vw'
        _menu.style.height = '150vh'
        _svg[0].style.display = 'none'
        _svg[1].style.display = 'flex'
    })
    _svg[1].addEventListener('click', () => {
        _menu.style.width = '0'
        _menu.style.height = '0'
        _svg[1].style.display = 'none'
        _svg[0].style.display = 'flex'
    })
    // part2 
    let _h2 = document.getElementById('part2').clientHeight
    let _h1 = document.getElementsByTagName('nav')[0].clientHeight
    let _h3 = document.getElementsByClassName('part3')[0].clientHeight
    let old = 0
    console.log(_h1);
    window.addEventListener('scroll', () => {
        let x = window.scrollY
        if ((_h1 / 2) < x) {
            document.getElementsByClassName('menu')[0].style.background = '#fff'
            document.getElementById('m1').style.color = '#000'
            document.getElementById('m2').style.color = '#000'
            document.getElementById('m3').style.color = '#000'
            document.getElementById('menu').style.color = '#000'
            console.log('ok');
        } else {
            document.getElementsByClassName('menu')[0].style.background = 'rgba(0, 0, 0, 0)'
            document.getElementById('m1').style.color = '#fff'
            document.getElementById('m2').style.color = '#fff'
            document.getElementById('m3').style.color = '#fff'
            document.getElementById('menu').style.color = '#fff'
        }
        if(x>(_h1-300)){
            document.getElementsByClassName('right')[0].style.transform = 'translateY(0px)'
        }else{
            document.getElementsByClassName('right')[0].style.transform = 'translateY(70px)'
        }
        if(x>((3*_h3)/4)-200){
            document.getElementById('img').style.left = '-100%'
        }else{
            document.getElementById('img').style.left = '0%'
        }
        if(x>((3*_h3)/4)+100){
            document.getElementById('img1').style.left = '0%'
        }else{
            document.getElementById('img1').style.left = '-100%'
        }
        if(x>((3*_h3)/4)+400){
            document.getElementById('img2').style.left = '-100%'
        }else{
            document.getElementById('img2').style.left = '0%'
        }
        // old = x
        // console.log('old:'+old);
        console.log(_h1-300);
        console.log(x);
    })
    //  ************************finish of saba js part ***************************
    //  ************************start of mobina js part ***************************
  document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x , y);
    document.getElementById("mspan").style.left = x + "px";
    document.getElementById("mspan").style.top = y + "px";
  });
  let wso = 0;
  document.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    let wsn = window.scrollY;
    if ((wsn-300) > wso) {
      mslide.style.transform = "translateX(-300px)";
      mdiv1.style.transform = 'rotate(10deg) translate3d(800px, 0px, 0px)'
      mdiv2.style.transform = 'rotate(10deg) translate3d(-800px, 0px, 0px)'
      mdiv3.style.transform = 'rotate(10deg) translate3d(800px, 0px, 0px)'
      mfig1.style.transform = "translateX("+ (50)+"%)";
      mdiv4.style.transform = 'rotate(-5deg) translateX('+ wsn/200 +'px)'
   
    } else {
      mslide.style.transform = "translateX(-200px)";
      mdiv1.style.transform = 'rotate(10deg) translate3d(-800px, 0px, 0px)'
      mdiv2.style.transform = 'rotate(10deg) translate3d(800px, 0px, 0px)'
      mdiv3.style.transform = 'rotate(10deg) translate3d(-800px, 0px, 0px)'
      mfig1.style.transform = "translateX("+ (0)+"%)";
      mdiv4.style.transform = 'rotate(-5deg) translateX('+ -(wsn/44) +'px)'
    }

  if ((wsn-300) > wso) {
    mslide.style.transform = "translateX(-300px)";
    mdiv1.style.transform = 'rotate(10deg) translate3d(800px, 0px, 0px)'
    mdiv2.style.transform = 'rotate(10deg) translate3d(-800px, 0px, 0px)'
    mdiv3.style.transform = 'rotate(10deg) translate3d(800px, 0px, 0px)'
    mfig2.style.transform = "translateX("+ (50)+"%)";
    mdiv4.style.transform = 'rotate(-5deg) translateX('+ wsn/200 +'px)'
    
  } else {
    mslide.style.transform = "translateX(-200px)";
    mdiv1.style.transform = 'rotate(10deg) translate3d(-800px, 0px, 0px)'
    mdiv2.style.transform = 'rotate(10deg) translate3d(800px, 0px, 0px)'
    mdiv3.style.transform = 'rotate(10deg) translate3d(-800px, 0px, 0px)'
    mfig2.style.transform = "translateX("+ (0)+"%)";
    mdiv4.style.transform = 'rotate(-5deg) translateX('+ -(wsn/44) +'px)'
  }

if ((wsn-300) > wso) {
    mslide.style.transform = "translateX(-300px)";
    mdiv1.style.transform = 'rotate(10deg) translate3d(800px, 0px, 0px)'
    mdiv2.style.transform = 'rotate(10deg) translate3d(-800px, 0px, 0px)'
    mdiv3.style.transform = 'rotate(10deg) translate3d(800px, 0px, 0px)'
    mfig3.style.transform = "translateX("+ (50)+"%)";
    mdiv4.style.transform = 'rotate(-5deg) translateX('+ wsn/200 +'px)'
    
  } else {
    mslide.style.transform = "translateX(-200px)";
    mdiv1.style.transform = 'rotate(10deg) translate3d(-800px, 0px, 0px)'
    mdiv2.style.transform = 'rotate(10deg) translate3d(800px, 0px, 0px)'
    mdiv3.style.transform = 'rotate(10deg) translate3d(-800px, 0px, 0px)'
    mfig3.style.transform = "translateX("+ (0)+"%)";
    mdiv4.style.transform = 'rotate(-5deg) translateX('+ -(wsn/44) +'px)'
  }
  wso = wsn;
});
  //  ************************finish of mobina js part ***************************

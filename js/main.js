const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
if (scroll > 1000 && logo.classList.contains("dark-mode")) {
    header.style.position = 'fixed';
    header.style.top = 0;
} else {
    logo.src = "./img/logo.png";
	header.style.position = 'fixed';
    header.style.top = 0;
}

window.addEventListener('scroll', function () {
		
    target_position = document.querySelector('.title').getBoundingClientRect().top;
    
        if (target_position <= window.innerHeight) {
            this.document.querySelector(".history").style.overflow = "unset";
        }
});
window.addEventListener('scroll', function () {
		
		target_position = document.querySelector('.h1940').getBoundingClientRect().top;
		
			if (target_position <= window.innerHeight) {
				this.document.querySelector(".history").style.overflow = "auto";
			}
});
window.addEventListener('scroll', function () {
		
		target_position = document.querySelector('.introduction').getBoundingClientRect().top;
		
			if (target_position <= window.innerHeight) {
				this.document.querySelector(".history").style.overflow = "unset";
			}
});

document.addEventListener('DOMContentLoaded', function() {
	var settingLink = document.querySelector('.setting');
	var box = document.querySelector('.setting_box');
	var cover = document.querySelector('.setting_cover');
  
	settingLink.addEventListener('click', function(e) {
	  e.preventDefault();
	  box.classList.toggle('active');
	  cover.classList.toggle('block');
	  
	  // ボックスが表示された場合にスクロールを無効にする
	  if (box.classList.contains('active')) {
		document.body.style.overflow = 'hidden';
	  } else {
		document.body.style.overflow = '';
	  }
	});
});
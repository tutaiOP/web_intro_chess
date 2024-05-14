const listImage = document.querySelector('.list-images');
const imgs = document.getElementsByClassName('list-images-image');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const indexItems = document.querySelectorAll('.index-item');
const length = imgs.length;
let current = 0;

const updateImageSize = () => {
    const width = listImage.offsetWidth;
    Array.from(imgs).forEach((img) => {
      img.style.width = `${width}px`;
    });
    listImage.style.transform = `translateX(${width * -1 * current}px)`;
  };

const handleChangeSlide = () => {
  if (current === length - 1) {
    current = 0;
  } else {
    current++;
  }

  updateImageSize();
  updateActiveIndex();
};

const updateActiveIndex = () => {
  document.querySelector('.active').classList.remove('active');
  indexItems[current].classList.add('active');
};

let handleEventChangeSlide = setInterval(handleChangeSlide, 4000);

btnRight.addEventListener('click', () => {
  clearInterval(handleEventChangeSlide);
  handleChangeSlide();
  handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
});

btnLeft.addEventListener('click', () => {
  clearInterval(handleEventChangeSlide);
  if (current === 0) {
    current = length - 1;
  } else {
    current--;
  }

  updateImageSize();
  updateActiveIndex();
  handleEventChangeSlide = setInterval(handleChangeSlide, 4000);
});

// Cập nhật kích thước khi thay đổi kích thước màn hình
window.addEventListener('resize', updateImageSize);

function redirectToWebsite() {
  window.location.href = 'https://github.com/quang90111/chess';
}

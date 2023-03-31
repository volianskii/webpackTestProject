import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';//need to install css-loader and style-loader from npm to import styles

const slider = document.querySelector('.slider');
const sliderIndicator = document.querySelector('span');


noUiSlider.create(slider, {
  start: 60,
  connect: 'lower',//the color indicator is to the left
  range: {
    'min': 0,
    'max': 100
  },
  step: 10,
  tooltips: [true]
});

/* const sliderValue =  slider.noUiSlider.get(true);

async function sliderChange() {
  sliderValue.addEventListener('change', () => {
    alert('hello!');
    sliderIndicator.innerHTML = slider.noUiSlider.get(true);
    console.log(slider.value);
  });
};

sliderChange(); */

slider.noUiSlider.on('update', (_, handle, unencoded) => {
  sliderIndicator.innerHTML = unencoded[handle];
  console.log(unencoded);
  console.log(handle);
})
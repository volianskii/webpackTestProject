/* This module renders html code inside of index.html file using functions and DOM ElementInternals. */

const createAdditionalContent = () => {//function that returns html code
  return (
      `<div>
        <h3>Additional content</h3>
        <button>Additional button</button>
      </div>`
  );
};

const render = (container, template, place = 'beforeend') => {//requires a container, a template with html and a place 
  //where this html code is supposed to be added inside the container
  container.insertAdjacentHTML(place, template);//insert the code inside the container
}

const siteAdditionalSection = document.querySelector('.additional-content');//create container DOM element in index.html file 
render(siteAdditionalSection, createAdditionalContent());

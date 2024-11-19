const accordionElement = document.getElementById('accordion');

const toggleAccordionText = event => {
  event.target.classList.toggle('accordion-item-show');
};

accordionElement.addEventListener('click', toggleAccordionText);

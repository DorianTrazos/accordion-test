const accordionElement = document.getElementById('accordion');
const allAccordionTexts = document.querySelectorAll('.accordion-text');

const toggleAccordionText = event => {
  console.log(event.target);
  // for (const accordionText of allAccordionTexts) {
  //   accordionText.classList.remove('accordion-text-show');
  // }

  event.target.children[0].children[1].classList.toggle('accordion-text-show');
};

accordionElement.addEventListener('click', toggleAccordionText);

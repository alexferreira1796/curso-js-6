export default function initTooltip() {

  const tooltips = document.querySelectorAll('[data-tooltip]'); // Selecionado todos os tooltips

  if(tooltips) {
    function onMouseOver(event) {
      const tooltipBox = createBox(this);
      tooltipBox.style.top = event.pageY + 'px'; // Posicionado na posição do mouse
      tooltipBox.style.left = event.pageX + 'px'; // Posicionado na posição do mouse
    
      onMouseMove.tooltipBox = tooltipBox;
      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;
      onMouseMove.element = this;
      this.addEventListener('mouseleave', onMouseLeave);
      this.addEventListener('mousemove', onMouseMove);
    }
    
    // Passando o mouse
    const onMouseLeave = {
      tooltipBox: '',
      element: '',
      handleEvent: function() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
      } 
    }
    
    // Passando o mouse e acompanhando o cursor
    const onMouseMove = {
      tooltipBox: '',
      element: '',
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + 'px';
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
        this.element.removeEventListener('mousemove', onMouseLeave);
      }
    }
    
    tooltips.forEach(item => {
      item.addEventListener('mouseover', onMouseOver)
    });
    
    // Criando uma box tooltip
    function createBox(element) {
      const tooltipBox = document.createElement('div');
      const text = element.getAttribute('aria-label');
      tooltipBox.classList.add('tooltip');
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }
  }
}

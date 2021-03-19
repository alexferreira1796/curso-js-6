// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.
const addAttribute = () => {
  const sections = document.querySelectorAll('.animais-descricao > section');
  sections.forEach((item, index) => {
    item.dataset.anime = index % 2 == 0 ? 'show-right' : 'show-down'
  });
}

export default addAttribute;
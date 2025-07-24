// Section 3: Accordion list of products
document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.products-accordion');
  
  accordions.forEach(accordion => {
    const header = accordion.querySelector('.products-header');
    const content = accordion.querySelector('.products-content');
    
    header.addEventListener('click', function() {
      // Check if this accordion is already open
      const isOpen = content.classList.contains('open');
      
      // Close all accordions first
      document.querySelectorAll('.products-content').forEach(c => c.classList.remove('open'));
      document.querySelectorAll('.products-header').forEach(h => h.classList.remove('active'));
      
      // If this wasn't open, open it
      if (!isOpen) {
        content.classList.add('open');
        header.classList.add('active');
      }
    });
  });
});
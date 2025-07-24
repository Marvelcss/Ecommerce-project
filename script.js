// products dropdown 
const productsItems = document.querySelectorAll(".products-item");
      const dropdownContainer = document.querySelector(".dropdown-container");
      const dropdownSections = document.querySelectorAll(".dropdown-section");

      let isHoveringDropdown = false;
        let dropdownOpen = false;

      productsItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          const targetId = item.getAttribute("data-target");
          dropdownSections.forEach((dds) => {
            if (dds.id === targetId) {
              dds.classList.add("active");
            } else {
              dds.classList.remove("active");
            }
          });
          dropdownContainer.style.height = "100vh";
          dropdownOpen = true;
        });
        item.addEventListener("mouseleave", () => {
          setTimeout(() => {
            if (!isHoveringDropdown) {
              dropdownContainer.style.height = "0";
              dropdownSections.forEach((dds) => dds.classList.remove("active"));
            }
          }, 100);
        });
      });

      dropdownContainer.addEventListener("mouseenter", () => {
        isHoveringDropdown = true;
      });

      dropdownContainer.addEventListener("mouseleave", () => {
        isHoveringDropdown = false;
        dropdownContainer.style.height = "0";
        dropdownSections.forEach((dds) => dds.classList.remove("active"));
        dropdownOpen = false;
      });

      const dropdownLinks = document.querySelectorAll(".dropdown-link");
      dropdownLinks.forEach((link) => {
        link.addEventListener("click", () => {
          dropdownContainer.style.height = "0";
          dropdownSections.forEach((dds) => dds.classList.remove("active"));
        });
      });

      document.addEventListener('click', (event) => {
  const isClickInsideHeader = event.target.closest('.products-header');
  const isClickInsideDropdown = event.target.closest('.dropdown-container');

  if (!isClickInsideHeader && !isClickInsideDropdown && dropdownOpen) {
    dropdownContainer.style.height = '0';
    dropdownSections.forEach(dds => dds.classList.remove('active'));
    dropdownOpen = false;
  }
});

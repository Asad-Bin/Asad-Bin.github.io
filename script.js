document.addEventListener("DOMContentLoaded", function() {
    // Get all the list items in the header navigation
    const navItems = document.querySelectorAll("header nav ul li");
  
    // Get all the info sections
    const infoSections = document.querySelectorAll(".info-section");
  
    // Get the home section and home text element
    const homeText = document.querySelector("#home .text-overlay");
  
    // Attach click event listeners to each list item
    navItems.forEach((item, index) => {
        item.addEventListener("click", function(e) {
          e.preventDefault();

          homeText.style.display = "none";
          
          infoSections.forEach(section => {
            section.style.display = "none";
          });
          
          // Show the selected info section
          const targetId = item.firstChild.getAttribute("href");
          const targetSection = document.querySelector(targetId);
          targetSection.style.display = "block";
        });
    });
});
  
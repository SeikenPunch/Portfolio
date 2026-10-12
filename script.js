fetch("navbar.html")
   .then(response => response.text())
   .then(data => {
      document.getElementById("navbar").innerHTML = data;

      const currentPage = window.location.pathname.split("/").pop() || "index.html";
      
      document.querySelectorAll(".nav-link").forEach(link => {
         if(link.getAttribute("href") === currentPage){
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
         }
      });
   });
// !function(){var e;["scroll","resize"].forEach((t=>{document.addEventListener(t,(t=>{clearTimeout(e),e=setTimeout((function(){!function(e){"resize"===e.type&&(document.body.classList.remove("navbar-dropdown-open"),document.querySelector(".navbar-dropdown").querySelector(".navbar-collapse").classList.remove("show"),document.querySelector(".navbar-dropdown").classList.remove("opened"),Array.from(document.querySelector(".navbar-dropdown").querySelectorAll('.navbar-toggler[aria-expanded="true"]')).forEach((e=>{let t=e.querySelector(e.getAttribute("data-target"));t&&(t.classList.remove("in"),t.setAttribute("aria-expanded","false"),e.setAttribute("aria-expanded","false"))})));let t=document.documentElement.scrollTop;Array.from(document.querySelectorAll(".navbar-dropdown")).forEach((e=>{e.matches(".navbar-fixed-top")&&(e.matches(".transparent")&&!e.classList.contains("opened")&&(t>0?e.classList.remove("bg-color"):e.classList.add("bg-color")),t>0?e.classList.add("navbar-short"):e.classList.remove("navbar-short"))}))}(t)}),10)}))}));["show.bs.collapse","hide.bs.collapse"].forEach((e=>{document.addEventListener(e,(({target:t})=>{const o=t.closest(".navbar-dropdown");o&&("show.bs.collapse"===e?(document.body.classList.add("navbar-dropdown-open"),o.classList.add("opened")):(document.body.classList.remove("navbar-dropdown-open"),o.classList.remove("opened"),window.dispatchEvent(new Event("scroll.bs.navbar-dropdown.data-api")),o.dispatchEvent(new Event("collapse.bs.navbar-dropdown"))))}))}));document.querySelector("html").classList.contains("is-builder")||document.addEventListener("click",(function(e){const t=e.target;if(t.classList.contains("nav-link")||t.parentNode.classList.contains("nav-link"))return;const o=document.querySelector("#navbarSupportedContent"),a=document.querySelector(".navbar-dropdown"),n=o.classList.contains("show"),r=t.closest(".nav-item a:not(.dropdown-toggle)"),s=a.classList.contains("collapsed");(window.matchMedia("(max-width: 991px)").matches||s)&&(n&&!t.closest(".navbar-collapse")||r)&&new bootstrap.Collapse(o)})),document.addEventListener("collapse.bs.nav-dropdown",(e=>{let t=e.relatedTarget.closest(".navbar-dropdown");if(t){let e=t.querySelector('.navbar-toggler[aria-expanded="true"]');e&&e.dispatchEvent(new Event("click"))}}));document.querySelectorAll(".nav-link.dropdown-toggle").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),e.target.parentNode.classList.toggle("open")}))}))}();

!function() {
    var e;
    ["scroll", "resize"].forEach((t => {
        document.addEventListener(t, (t => {
            clearTimeout(e),
            e = setTimeout((function() {
                !function(e) {
                    // Check if navbar-dropdown exists before accessing its elements
                    const navbarDropdown = document.querySelector(".navbar-dropdown");
                    if (!navbarDropdown) return; // Exit if the element doesn't exist

                    if ("resize" === e.type) {
                        document.body.classList.remove("navbar-dropdown-open");
                        const navbarCollapse = navbarDropdown.querySelector(".navbar-collapse");
                        if (navbarCollapse) {
                            navbarCollapse.classList.remove("show");
                        }
                        navbarDropdown.classList.remove("opened");

                        Array.from(navbarDropdown.querySelectorAll('.navbar-toggler[aria-expanded="true"]')).forEach((toggle) => {
                            let targetElement = document.querySelector(toggle.getAttribute("data-target"));
                            if (targetElement) {
                                targetElement.classList.remove("in");
                                targetElement.setAttribute("aria-expanded", "false");
                                toggle.setAttribute("aria-expanded", "false");
                            }
                        });
                    }

                    let scrollTop = document.documentElement.scrollTop;
                    Array.from(document.querySelectorAll(".navbar-dropdown")).forEach((navbar) => {
                        if (navbar.matches(".navbar-fixed-top")) {
                            if (navbar.matches(".transparent") && !navbar.classList.contains("opened")) {
                                if (scrollTop > 0) {
                                    navbar.classList.remove("bg-color");
                                } else {
                                    navbar.classList.add("bg-color");
                                }
                            }
                            if (scrollTop > 0) {
                                navbar.classList.add("navbar-short");
                            } else {
                                navbar.classList.remove("navbar-short");
                            }
                        }
                    });
                }(t);
            }), 10);
        }));
    }));

    ["show.bs.collapse", "hide.bs.collapse"].forEach((event) => {
        document.addEventListener(event, ({ target }) => {
            const navbarDropdown = target.closest(".navbar-dropdown");
            if (navbarDropdown) {
                if (event === "show.bs.collapse") {
                    document.body.classList.add("navbar-dropdown-open");
                    navbarDropdown.classList.add("opened");
                } else {
                    document.body.classList.remove("navbar-dropdown-open");
                    navbarDropdown.classList.remove("opened");
                    window.dispatchEvent(new Event("scroll.bs.navbar-dropdown.data-api"));
                    navbarDropdown.dispatchEvent(new Event("collapse.bs.navbar-dropdown"));
                }
            }
        });
    });

    document.querySelector("html").classList.contains("is-builder") || document.addEventListener("click", function(e) {
        const target = e.target;
        if (target.classList.contains("nav-link") || target.parentNode.classList.contains("nav-link")) return;

        const navbarSupportedContent = document.querySelector("#navbarSupportedContent");
        const navbarDropdown = document.querySelector(".navbar-dropdown");
        const isNavbarShown = navbarSupportedContent && navbarSupportedContent.classList.contains("show");
        const navItemLink = target.closest(".nav-item a:not(.dropdown-toggle)");
        const isCollapsed = navbarDropdown && navbarDropdown.classList.contains("collapsed");

        if ((window.matchMedia("(max-width: 991px)").matches || isCollapsed) && (isNavbarShown && !target.closest(".navbar-collapse") || navItemLink)) {
            if (navbarSupportedContent) {
                new bootstrap.Collapse(navbarSupportedContent);
            }
        }
    });

    document.addEventListener("collapse.bs.nav-dropdown", (e) => {
        const navbarDropdown = e.relatedTarget ? e.relatedTarget.closest(".navbar-dropdown") : null;
        if (navbarDropdown) {
            const toggler = navbarDropdown.querySelector('.navbar-toggler[aria-expanded="true"]');
            if (toggler) {
                toggler.dispatchEvent(new Event("click"));
            }
        }
    });

    document.querySelectorAll(".nav-link.dropdown-toggle").forEach((dropdownToggle) => {
        dropdownToggle.addEventListener("click", (e) => {
            e.preventDefault();
            e.target.parentNode.classList.toggle("open");
        });
    });
}();

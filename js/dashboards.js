function openViewer(folio, titulo, url) {
    document.getElementById("listView").classList.remove("active");
    document.getElementById("viewerView").classList.add("active");

    document.getElementById("viewerFolio").innerText = folio;
    document.getElementById("viewerTitle").innerText = titulo;
    document.getElementById("dashboardFrame").src = url;
}

function showList() {
    document.getElementById("viewerView").classList.remove("active");
    document.getElementById("listView").classList.add("active");
    document.getElementById("dashboardFrame").src = "";
}

function filtrarDashboards() {
    const texto = document.getElementById("buscador").value.toLowerCase();
    const items = document.querySelectorAll(".dashboard-item");

    items.forEach(item => {
        const folio = item.querySelector(".folio-badge").innerText.toLowerCase();
        const titulo = item.querySelector(".dashboard-title").innerText.toLowerCase();

        if (folio.includes(texto) || titulo.includes(texto)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}

function openViewer(folio, titulo, url) {
    document.getElementById("listView").classList.remove("active");
    document.getElementById("viewerView").classList.add("active");

    document.getElementById("viewerFolio").innerText = folio;
    document.getElementById("viewerTitle").innerText = titulo;
    document.getElementById("dashboardFrame").src = url;

    // Pasar folio al reporte
    document.getElementById("btnReportar").href =
        `reporte-error.html?folio=${encodeURIComponent(folio)}`;
}

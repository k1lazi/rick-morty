let currentPage = 1;
let currentStatus = 'all';


async function fetchData() {
    try {
        let url = `https://rickandmortyapi.com/api/character?page=${currentPage}`;
        if (currentStatus !== 'all') {
            url += `&status=${currentStatus}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error! ${response.status}`);
        }

        const data = await response.json();
        populateTable(data.results, data.info);
    }
    catch (error) {
        console.error("Błąd podczas pobierania danych z API", error);
    }
}


function populateTable(characters, info) {
    const tableBody = document.querySelector("#data-table tbody");

    tableBody.innerHTML = "";

    characters.forEach(character => {
        const row = document.createElement("tr");

        const imageCell = document.createElement("td");
        const img = document.createElement("img");
        img.src = character.image;
        img.alt = character.name;
        img.style.width = "150px";
        imageCell.appendChild(img);
        row.appendChild(imageCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = character.name;
        row.appendChild(nameCell);

        const statusCell = document.createElement("td");
        statusCell.textContent = character.status;
        row.appendChild(statusCell);

        tableBody.appendChild(row);
    });


    document.querySelector(".prevPage").disabled = currentPage === 1;
    document.querySelector(".nextPage").disabled = !info.next;
}


function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        fetchData();
    }
}

function nextPage() {
    currentPage++;
    fetchData();
}

document.getElementById('statusSelect').addEventListener('change', function() {
    currentStatus = this.value;
    currentPage = 1;
    fetchData();
});

document.querySelector(".prevPage").addEventListener("click", prevPage);
document.querySelector(".nextPage").addEventListener("click", nextPage);

document.addEventListener('DOMContentLoaded', () => fetchData());

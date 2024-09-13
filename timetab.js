document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table');

    if (table) {
        const headers = table.querySelectorAll('th');
        headers.forEach((header, index) => {
            header.addEventListener('click', () => {
                const rows = Array.from(table.querySelectorAll('tbody tr'));
                const isAscending = header.classList.contains('sorted-asc');
                
                rows.sort((a, b) => {
                    const aText = a.children[index].textContent.trim();
                    const bText = b.children[index].textContent.trim();
                    return isAscending 
                        ? aText.localeCompare(bText) 
                        : bText.localeCompare(aText);
                });

                rows.forEach(row => table.querySelector('tbody').appendChild(row));
                
                headers.forEach(h => h.classList.remove('sorted-asc', 'sorted-desc'));
                header.classList.toggle('sorted-asc', !isAscending);
                header.classList.toggle('sorted-desc', isAscending);
            });
        });
    }
});

function addEntry() {
    const day = document.getElementById('day').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const activity = document.getElementById('activity').value;

    if (!day || !startTime || !endTime || !activity) {
        alert('Please fill in all fields.');
        return;
    }

    const timetableDiv = document.getElementById('timetable');
    let table = timetableDiv.querySelector('table');

    if (!table) {
        table = document.createElement('table');
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `
            <th>Day</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Activity</th>
        `;
        thead.appendChild(headerRow);
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);
        timetableDiv.appendChild(table);
    }

    const tbody = table.querySelector('tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${day}</td>
        <td>${startTime}</td>
        <td>${endTime}</td>
        <td>${activity}</td>
    `;
    tbody.appendChild(newRow);

    // Clear input fields
    document.getElementById('timetable-form').reset();
}

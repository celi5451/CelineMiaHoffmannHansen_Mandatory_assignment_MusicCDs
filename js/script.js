// Select form and table elements
const cdForm = document.getElementById('cd-form');
const cdTableBody = document.getElementById('cd-table').querySelector('tbody');

// Handle form submission to add a new CD
cdForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const artist = document.getElementById('artist').value;
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;

    // Create a new row using a template literal
    const newRow = `
        <tr>
            <td>${artist}</td>
            <td>${title}</td>
            <td>${year}</td>
            <td><span class="delete-btn"><i class="fas fa-trash"></i></span></td>
        </tr>
    `;

    // Insert the new row into the table body
    cdTableBody.insertAdjacentHTML('beforeend', newRow);

    // Clear form inputs
    cdForm.reset();
});

// Use event delegation to handle delete button clicks
cdTableBody.addEventListener('click', function(event) {
    if (event.target.closest('.delete-btn')) {
        // Remove the CD row
        const row = event.target.closest('tr');
        row.remove();
    }
});

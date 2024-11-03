Create an in-memory front-end application where the user can add music CDs to a table and delete them from it.

No permanent data structure is necessary. The data will be simply stored in the table, thus disappearing upon reload.
The following alternatives to add elements to the DOM could be explored:

createElement()
innerHTML with template literals
cloneNode()

Explanation of the JavaScript Code:
    1 Form Submission Handling:
    When the form is submitted, the code retrieves the values of the CD attributes (title, artist, genre) from the input fields.
    Using a template literal, it creates a new row in HTML with the provided data and an inline “Delete” button.
    This row is then added to the table body (<tbody>) using insertAdjacentHTML.
    
    2 Event Delegation for Deleting Rows:
    Instead of attaching individual event listeners to each delete button, event delegation is used. An event listener on the table body detects clicks on any “Delete” button.
    When a click occurs on an element with the delete-btn class, the code finds the corresponding table row and removes it from the table.

    Why This Works Well:
    - Efficiency: Using event delegation minimizes the need for multiple event listeners.
    - Minimal Code: Template literals and inline HTML keep the code concise.
    - Maintainability: The clear separation of functions (add and delete) and the use of reset to clear inputs after submission keep things tidy.

Celine Mia Hoffmann Hansen
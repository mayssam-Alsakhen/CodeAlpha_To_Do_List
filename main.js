// show and hide the form
function openForm() {
    let form = document.getElementById('form');
    if (form.classList.contains("show")) {
        form.classList.remove("show");
    } else {
        form.classList.add("show");
    }
}

function addTask(event) {
    event.preventDefault();
    let id = document.getElementById('id').value;
    let title = document.getElementById('title').value;
    let deadline = document.getElementById('deadline').value;
    let des = document.getElementById('des').value;

    if (!id || !title || !deadline || !des) {
        alert("All fields are required!");
        return;
    }
    let newCard = document.createElement('div');
    newCard.classList.add('card');

    newCard.innerHTML = `
        <p class="card_id">#${id}</p>
        <h3 class="card_title">${title}</h3>
        <p class="card_date">${deadline}</p>
        <p class="card_des">${des}</p>
        <div class="card_footer">
            <label class="done">
                <input type="checkbox" onchange="toggleDone(this)"> Done
            </label>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    let taskContainer = document.getElementById('taskContainer');
    taskContainer.appendChild(newCard);

    document.getElementById('id').value = '';
    document.getElementById('title').value = '';
    document.getElementById('deadline').value = '';
    document.getElementById('des').value = '';
    document.getElementById('form').classList.remove('show');
}

function toggleDone(checkbox) {
    var card = checkbox.closest('.card');
    if (checkbox.checked) {
        card.classList.add('checked');
    } else {
        card.classList.remove('checked');
    }
}

function deleteTask(button) {
    let card = button.closest('.card');
    
    if (card) {
        let confirmed = confirm("Are you sure you want to delete this task?")
        if(confirmed){
        let taskContainer = document.getElementById('taskContainer');
        taskContainer.removeChild(card);
        }
    } else {
        console.log('Parent .card element not found.');
    }
}

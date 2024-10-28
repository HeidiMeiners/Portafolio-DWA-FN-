function addToSchedule() {
    const date = document.getElementById("date").value;
    const timeStart = document.getElementById("timeStart").value;
    const timeEnd = document.getElementById("timeEnd").value;
    const activity = document.getElementById("activity").value;
    const place = document.getElementById("place").value;
    const notes = document.getElementById("notes").value;

    const table = document.getElementById("scheduleTable");

    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = date;
    newRow.insertCell(1).textContent = timeStart;
    newRow.insertCell(2).textContent = timeEnd;
    newRow.insertCell(3).textContent = place;
    newRow.insertCell(4).textContent = activity;
    newRow.insertCell(5).textContent = notes;

    document.getElementById("date").value = '';
    document.getElementById("timeStart").value = '';
    document.getElementById("timeEnd").value = '';
    document.getElementById("activity").value = '';
    document.getElementById("place").value = '';
    document.getElementById("notes").value = '';
}
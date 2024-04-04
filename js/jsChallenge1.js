function challenge1(checkbox) {
    var emailDiv = document.getElementById('emailDiv');
    if (checkbox.checked) {
        emailDiv.style.display = 'block';
    } else {
        emailDiv.style.display = 'none';
    }
}
document.addEventListener('click', function () {
    var currentDate = new Date();
    alert('Current Time: ' + currentDate.toLocaleTimeString());
});


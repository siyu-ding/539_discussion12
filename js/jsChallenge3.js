document.getElementById('ch3form').onsubmit = function () {
    var standing = document.querySelector('input[name="standing"]:checked');
    var gradDate = document.querySelector('input[name="gradDate"]:checked');

    if (!standing || !gradDate) {
        alert('Please select both your current class standing and anticipated graduation date.');
        return false;
    }

    return true;
};
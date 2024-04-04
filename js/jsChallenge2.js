document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('emailDiv').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
    var billingAddress = document.getElementById('bill');
    var homeAddress = document.getElementById('home');
    var sameAddressCheckbox = document.getElementById('sameAddress');

    sameAddressCheckbox.addEventListener('change', function () {
        if (this.checked) {
            homeAddress.value = billingAddress.value;
            homeAddress.disabled = true;
        } else {
            homeAddress.disabled = false;
        }
    });
});
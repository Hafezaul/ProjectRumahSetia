document.getElementById('expandableButton').addEventListener('click', function() {
    this.classList.toggle('expanded');
    document.getElementById('hamburger').classList.toggle('cross');
});
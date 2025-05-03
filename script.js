document.getElementById('keyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let key = document.getElementById('key').value.trim();
    let resultDiv = document.getElementById('result');

    fetch('http://localhost:3000/check-key', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key: key })
    })
    .then(response => response.json())
    .then(data => {
        resultDiv.textContent = data.text;
    })
    .catch(error => {
        resultDiv.textContent = 'Có lỗi xảy ra. Vui lòng thử lại.';
    });
});

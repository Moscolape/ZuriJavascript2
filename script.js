function printResult() {
    let username = document.getElementById('moniker').value;
    let height = document.getElementById('height').value;
    let country = document.getElementById('nationality').value;
    let Paragraph = document.getElementById('print-result');
    
    let cm = 'cm';
    let heightInCm = height.concat(cm);
    
    let button = document.getElementById('print');

    button.addEventListener('click', () => {
        Paragraph.textContent = `My name is ${username}, I am ${heightInCm} tall, and I reside in ${country}.`;
    })

}

document.addEventListener('click', (id) => {
    id = id.toElement
    if (id.id == 'error') {
        let i = document.getElementById('ipj')
        let i2 = document.getElementById('ipj2')
        let phd = document.getElementById('hdp')
        phd.style.display = 'block'
        i.style.color = 'red'; i2.style.color = 'red';
        i.style.boxShadow = "0 0 0 0"; i2.style.boxShadow = "0 0 0 0";
        i.style.borderColor = 'red'; i2.style.borderColor = 'red';
        setTimeout(function(){
            i.style.color = 'black'; i2.style.color = 'black';
            i.style.boxShadow = "0 0 0 0"; i2.style.boxShadow = "0 0 0 0";
            i.style.borderColor = 'black'; i2.style.borderColor = 'black';
        }, 5000)
    }
})
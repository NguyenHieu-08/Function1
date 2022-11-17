let text = prompt('Nhập tên ngôi sao: ');

function printStarName(nameStart) {
    let star = ['Polaris','Aldebaran','Deneb','Vega','Altair','Dubhe','Regulus'];
    let constellation = ['Ursa Minor','Tarurus','Cygnus','Lyra','Aquila','Ursa Major','Leo'];
    let result = '';

    for(let i=0; i < star.length; i++) {
        if (nameStart === star[i]) {
            result = constellation[i];
        }
    }

    return result;
}

document.getElementById('result').innerHTML = printStarName(text);
let name = "";
while(name.length < 6) {
    name = prompt("Введите имя любимого героя")
    if(name.length  >= 6) {
        alert("ups имя вашего героя содержит шесть или более букв")
        break
    }
    alert(`Имя вашего любимого героя ${name}`)
}
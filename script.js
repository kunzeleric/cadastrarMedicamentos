
var meds = []

function adicionarMed(){
    event.preventDefault()
    let med = {
        "nomeMedicamento": document.getElementById('fmedicamento').value,
        "qtdMedicamento": document.getElementById('fquantidade').value,
        "classeMedicamento": document.getElementById('fclasse').value
    }

    document.getElementById('fmedicamento').value = ""
    document.getElementById('fquantidade').value = ""
    document.getElementById('fclasse').value = ""

    meds.push(med)

    renderizarTabela()
}

function removerMed(index){
    meds.splice(index, 1)
    renderizarTabela()

}

function renderizarTabela(){
    let table = document.getElementById('dataTable')
    table.innerHTML =  `
    <tr>
        <th>ID</th>
        <th>Medicamento</th>
        <th>Quantidade</th>
        <th>Classe de Medicamento</th>
        <th>Remover</th>
    </tr>`

    for(let i = 0; i < meds.length; i++){
        table.innerHTML = table.innerHTML + ` 
        <tr>
            <td>${i+1}</td>
            <td>${meds[i].nomeMedicamento}</td>
            <td>${meds[i].qtdMedicamento}</td>
            <td>${meds[i].classeMedicamento}</td>
            <td><img src="remove.svg" width="25px" height="25px" onclick="removerMed(${i})"></td>
        </tr>`

    }

}
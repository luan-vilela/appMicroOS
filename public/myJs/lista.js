    var qtdNumero = 0
    var qtd = document.getElementById('qtdPeca');
    var peca = document.getElementById('peca');
    var listaPeca = document.getElementById('addPeca');
    var lista = [];
    var inputLista = document.getElementById('listaPeca')
    peca.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            add();
            event.preventDefault();
            return false

        }
        return false

    });

    // gera tag peças
    for (item in lista) {
        listaPeca.innerHTML += addElement(item);
        qtdNumero++;
    }
    // renderiza
    renderQtd();

    function renderQtd() {
        qtd.innerText = qtdNumero;
        inputLista.value = lista.toString()
    }

    function renderElement() {
        listaPeca.innerHTML += addElement(lista.length - 1)
        renderQtd();
        
    }

    function addElement(item) {
        return element = `<span class="badge badge-primary mr-2" id="itemCompra${item}" onclick="return remove(${item})">${lista[item]}</span>`;
    }

    function add() {
        if (peca.value.length < 3) {
            alert("Nome de peça inválida!")
        }
        else {
            let novasPecas = (peca.value).split(',')
            for(i in novasPecas){
                lista.push(novasPecas[i])

                qtdNumero++;
                peca.value = '';
                peca.focus();
                renderElement();
            }
        }
    }

    function remove(id) {

        let item = document.getElementById('itemCompra' + id)
        let nomeItem = item.innerText;
        if (window.confirm("Deseja remover " + nomeItem + "?")) {
            if (listaPeca.parentNode) {
                listaPeca.removeChild(item)
                lista[Number(id)] = '';
                qtdNumero--;

            }
        }
        renderQtd();
        return false
    }
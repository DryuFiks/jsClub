const inp = document.getElementById('title')
const createBtn = document.getElementById('create')
const list = document.getElementById('list')

const notes = [{
        title: 'Some task ToDo',
        comleted: false,
    },
    {
        title: 'Some task ToDo',
        comleted: false,
    },
    {
        title: 'Some task ToDo',
        comleted: true,
    }
]


function render() {
    list.innerHTML = ''
    if (notes.length === 0){
        list.innerHTML = `<p>Нет элементов</p>`
    }
    for (let index = 0; index < notes.length; index++) {
        list.insertAdjacentHTML('beforeend', getNoteTemplate(notes[index], index))
    }
}
render()



createBtn.onclick = function () {
    if (inp.value.length === 0) {
        return
    }

    const newNote = {
        title: inp.value,
        comleted: false,
    }
    notes.push(newNote)
    render()
    inp.value = ''
}

list.onclick = function (event) {
    if(event.target.dataset.index){
        const index1 = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if(type === 'toggle'){
            notes[index1].comleted = !notes[index1].comleted
        } else if (type === 'remove'){
            notes.splice(index1, 1)
        }
        render()
    }
}

function getNoteTemplate(elem, index) {
    return `
    <li class="list-group-item ${elem.comleted ? 'green':'red'}"">
    <div class="text-tasks">
    <span class="btn-class ="${elem.comleted ? 'warning':'secses'}" data-index = "${index}" data-type = "toggle"> &check;</span>
    <span class ="${elem.comleted ? 'text-decoration-line-through' : ''}">${elem.title}</span>
    </div>
    <span class="btn-danger" data-index = "${index}" data-type = "remove"></span>
    </li>
    `
}
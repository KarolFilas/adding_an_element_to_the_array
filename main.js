const names = [];
const div = document.querySelector('div')

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input')
    const newName = input.value

    if (newName.length) {
        for (name of names) {
            if (name === newName) {
                alert('to już znajduję się na liście')
                return
            }
        }

        names.push(newName)
        div.textContent += newName + ', '
        input.value = ''
    }
}

document.querySelector('button').addEventListener('click', addName)

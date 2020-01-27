let mainElement = document.getElementsByTagName('main')
let count = 1

mainElement[0].addEventListener('click', function()
{
    
    let name = document.getElementById('nameInput');
    let number = document.getElementById('numberInput');

    if(event.target.id === 'addButton')
    {
        // console.log('hello')

        if(name.value === '' && number.value === '')
        {
            alert("No inputs given")
            return
        }

        let tbodyElement = document.getElementById('appendData');
        let trElement = document.createElement('tr')
        let id = count++
        trElement.innerHTML = `<tr id="row` + id+ `">

                                    <td>` + id + `</td>
                                    <td>` + name.value + `</td>
                                    <td>` + number.value + `</td>
                                    <td>
                                        <button class="btn btn-primary" id="editButton">Edit</button>
                                        <button class="btn btn-danger" id="deleteButton">Delete</button>
                                    </td>

                                </tr>`
        
        // this.console.log(trElement)

        tbodyElement.appendChild(trElement)

        name.value = ''
        number.value = ''
    }

    else if(event.target.id === 'editButton')
    {
        // console.log("edit")
        // console.log(event.target.parentNode.parentNode.childNodes[3].innerHTML='hello');
        let replacerDiv = document.getElementById('replaceBtn')
        
        replacerDiv.innerHTML = '<button class="btn btn-success formButton" id="editorEditButton">Edit</button>'
        name.value = event.target.parentNode.parentNode.childNodes[3].innerHTML
        number.value = event.target.parentNode.parentNode.childNodes[5].innerHTML

    }

    else if(event.target.id === 'editorEditButton')
    {
        // console.log("edit")



        name.value = ''
        number.value = ''
        document.getElementById('replaceBtn').innerHTML  = `<button class="btn btn-success formButton" id="addButton">Add</button>`
    }

    else if(event.target.id === 'deleteButton' )
    {
        // console.log("delete")
        let deleteConfirmation = confirm("Are you sure to delete this element??")

        if(deleteConfirmation)
        {
            event.target.closest('tr').remove()
        }
        else
        {
            return
        }

    }

    else
    {
        return
    }

})
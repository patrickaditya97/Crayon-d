let mainElement = document.getElementsByTagName('main')
let contact = [];
let count = 1
let index

mainElement[0].addEventListener('click', function()
{

    let name = document.getElementById('nameInput');
    let number = document.getElementById('numberInput');

    if(event.target.id === 'addButton')
    {
        let contactObj = new Object()

        contactObj.index = count++
        contactObj.name = name.value
        contactObj.number = number.value

        contact.push(contactObj)

        populateTable(contact)

        name.value = ''
        number.value = ''

    }

    else if(event.target.id === 'editButton')
    {
        // console.log("edit")
        // console.log(event.target.parentNode.parentNode.childNodes[3].innerHTML='hello');
        let replacerDiv = document.getElementById('replaceBtn')
        
        replacerDiv.innerHTML = '<button class="btn btn-success formButton" id="editorEditButton">Edit</button>'

        index = event.target.getAttribute('data-index')
        name.value = event.target.parentNode.parentNode.childNodes[3].innerHTML
        number.value = event.target.parentNode.parentNode.childNodes[5].innerHTML

        
    }
    
    else if(event.target.id === 'editorEditButton')
    {
        let editedItem = editItem( contact, index, name, number )
        populateTable(editedItem)

        document.getElementById('replaceBtn').innerHTML  = `<button class="btn btn-success formButton" id="addButton">Add</button>`
    }

    else if(event.target.id === 'deleteButton' )
    {
        // console.log("delete")
        // let deleteConfirmation = confirm("Are you sure to delete this element??")

        // if(deleteConfirmation)
        // {
            let index = event.target.getAttribute('data-index')
            let newItems = (item)=> {
                return item.index != index
            }

            contact = contact.filter(newItems)
            console.log(contact)
            event.target.closest('tr').remove()
        // }
        // else
        // {
        //     return
        // }

    }

    else
    {
        return
    }
})


function populateTable(contacts)
{
    let tbodyElement = document.getElementById('appendData');
    tbodyElement.innerHTML = ''
    contacts.map((item, index) => {

        let trElement = document.createElement('tr')
        trElement.innerHTML = `<tr>

                                    <td>` + (index+1) + `</td>
                                    <td>` + item.name + `</td>
                                    <td>` + item.number + `</td>
                                    <td>
                                        <button class="btn btn-primary" id="editButton" data-index="`+ (index+1) +`">Edit</button>
                                        <button class="btn btn-danger" id="deleteButton" data-index="`+ (index+1) +`">Delete</button>
                                    </td>

                                </tr>`
        
        // this.console.log(trElement)

        tbodyElement.appendChild(trElement)

    })

    console.log(contact)
}

let editItem = (contact, index, name, number) => {
    return contact.map(item => {
        var temp = Object.assign({}, item);
        if (temp.index == index) {
            temp.name = name.value
            temp.number = number.value
        }
        return temp;
    });
}
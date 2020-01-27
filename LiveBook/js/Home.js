console.log("started")

let hiddenBtn = document.getElementById("hiddenUploadBtn")
let uploadBtn = document.getElementById("btnUploadImage")
let imagePreview = document.getElementById('imageUploadPreview')
let file = new FileReader();


window.addEventListener('click', function(){
    if(event.target.id == 'btnUploadImage')
    {
        hiddenBtn.click()
    }
    else if(event.target.id == 'btnPostToWall')
    {
        let formData = new FormData()

        let caption = document.getElementById('cardTextBox').value;
        formData.append('photo', hiddenBtn.files[0])
        formData.append('caption', caption)

        try 
        {
            fetch('/postIt', {methhod : 'POST', body : formData})
        } 
        catch (e) 
        {
            console.log("There's a problem...")
        }
    }
})

hiddenBtn.addEventListener('change', function(){
    document.getElementById('newPostBody').style.height='364px'
    document.getElementsByClassName('previewImage')[0].style.display='block'
    imagePreview.src =  URL.createObjectURL(hiddenBtn.files[0])

    // console.log(hiddenBtn.files[0])

})
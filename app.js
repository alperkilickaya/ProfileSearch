
const profile = new Profile();
const ui = new UI();

const searchProfile = document.querySelector("#searchProfile")

searchProfile.addEventListener("keyup", (event)=>{
   
    let text = event.target.value;
    text = text.charAt(0).toUpperCase() + text.slice(1);
    ui.clear()

    if (text !== ""){
        profile.getProfile(text)
        .then(res=>{
            if (res.profile.length === 0){
                ui.showAlert(text)
            }else{
                ui.showProfile(res.profile[0])
                ui.showTodo(res.todo);
            }
        })
        .catch(err=>{ // api sorgulamada hata olursa da hata mesajı input alanının altında gösterilir.
            ui.showAlert(text)
        })              
    }
})




    
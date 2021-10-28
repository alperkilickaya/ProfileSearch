class UI{
    constructor(){
        this.profileContainer = document.querySelector("#profileContainer");
        this.alert = document.querySelector("#alert");
    }

    showProfile(profile){
        this.profileContainer.innerHTML = `
        <div class="card card-body">
            <div class="row">
                <div class="col-md-3">
                    <a href="https://placeholder.com">
                    <img src="https://via.placeholder.com/350x150" class="img-thumbnail">
                    </a>
                </div>
                <div class="col-md-9">
                    <h4>Contact</h4>
                    <ul class="list-group">
                        <li class="list-group-item">
                            name : ${profile.name}
                        </li>
                        <li class="list-group-item">
                            username : ${profile.username}
                        </li>
                        <li class="list-group-item">
                            email : ${profile.email}
                        </li>
                        <li class="list-group-item">
                            adress : 
                            ${profile.address.street}
                            ${profile.address.city}
                            ${profile.address.zipcode}
                            ${profile.address.suite}
                        </li>
                    </ul>
                    <h4 class="mt-3">Todo List of ${profile.name}</h4>
                    <ul id="todo" class="list-group">

                    <7ul>
                </div>
            </div>
        </div>
        `

    }

    showTodo(todo){
        let html="";
        let bg ="";

        todo.forEach(item=>{
           item.completed === true ? bg = "bg-success" : bg = "bg-warning"; 
           html += `
            <li class="list-group-item ${bg}">
            ${item.title}
            </li>
            ` 
        })

        this.profileContainer.querySelector("#todo").innerHTML = html;
    }

    showAlert(text){
        this.alert.innerHTML = `${text} bulunamadı`
    }

    clear(){
        this.profileContainer.innerHTML ="";
        this.alert.innerHTML="";
    }

}
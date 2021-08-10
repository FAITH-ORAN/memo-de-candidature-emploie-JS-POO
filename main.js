class Job{//my first class Job with 4 param
    constructor( job, company, date, link){
      
        this.job = job;
        this.company = company;
        this.date = date;
        this.link = link;
    }
}

class Ui{
    addJobToList(pro){
        const list=document.getElementById("job-list");
        const row=document.createElement('tr');
        
        let num=0;
        row.innerHTML=`
       
        <td>${pro.job}</td>
        <td>${pro.company}</td>
        <td>${pro.date}</td>
        <td ><a>${pro.link}</a></td>
        <td><a href"#" style="cursor:pointer;" class="delete">X</a></td>

        `;
        list.appendChild(row);
    }
    showAlert(message, className){
        const div=document.createElement('div');
        //add className 
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container=document.querySelector(".container");

        //get Form 
        const form=document.querySelector("#job-form");

        //insert alert
        container.insertBefore(div, form);

        //TimeOut after 3sec delate the alert after 3sec
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);
    }
    deletJob(target){
        if(target.className==="delete"){
            target.parentElement.parentElement.remove();
        }
    }
    clearFields(){
        document.getElementById("job").value=""; 
        document.getElementById("company").value="";
        document.getElementById("date").value="";
        document.getElementById("link").value="";
    }
}

document.getElementById("job-form").addEventListener("submit",(e)=>{
    //get form values
   let job=document.getElementById("job").value;
   let company=document.getElementById("company").value;
   let date=document.getElementById("date").value;
   let link=document.getElementById("link").value;

  

    //create object instantiate job
    const pro= new Job(job,company, date, link);

    //create object instantiate ui
    const ui= new Ui();

    //validate 
    if(job=== ""||company===""||date===""||link===""){
        //error alert
        ui.showAlert("svp remplir les informations","error");
    }else{
        //add job 
        ui.addJobToList(pro);

        //show success 
        ui.showAlert("candidature ajoutée","success");
        //clear fileds
        ui.clearFields();
    }
    e.preventDefault();
});

//Event listening for delete 
document.getElementById("job-list").addEventListener("click",(e)=>{
  
const ui=new Ui();
ui.deletJob(e.target);
//show message 
ui.showAlert("candidature supprimée","success");
e.preventDefault();
});
 

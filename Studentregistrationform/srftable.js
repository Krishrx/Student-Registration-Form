var Student;
function viewTable(){
    fetch("https://localhost:44371/api/StudentRegForms/Get",{method:'GET'}).then((response)=>response.json()).then(d=>{
            Student = d;
        //console.log( typeof d);
    var table = $('#example').DataTable( {
        data: Student,
        columns: [
            { data: 'id' },
            { data: 'firstName' },
            { data: 'mobileNo'},
            { data: 'emailId' },
            { data: 'gender' },
            { data: 'city'},
            {
                targets: -1,
                data: null,
                defaultContent: '<button class="edit" style="background-color:green;color:white;border:2px solid green;border-radius:5px;">Edit</button>',
            },
            {
                targets: -1,
                data: null,
                defaultContent: '<button class="delete" style="background-color:red;color:white;border:2px solid red;border-radius:5px;">Delete</button>',
            }
            
        ]
    } );
}); 
}

$(document).ready(function(){
    viewTable();
});

$(document).on('click', '.edit', function (e) {
    e.preventDefault();
    var element = $(this).closest('tr');
    var studentId = element[0].cells[0].innerHTML;
    window.location.href = "http://127.0.0.1:5500/Studentregistrationform/srf.html?id=" + studentId;
    //alert("hi");

} );

$(document).on('click', '.delete', function (event) {
    event.preventDefault();
    var element = $(this).closest('tr');
    var studentId = element[0].cells[0].innerHTML;
    var stdId = parseInt(studentId);
    fetch("https://localhost:44371/api/StudentRegForms/Delete/"+stdId,{method:'DELETE'}).then(response => response.json()).then(data=>{
        //console.log(data);
    });
     location.reload();
} );

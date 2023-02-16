
// validate hobby
    function validate(){
        var hbyerr = document.getElementById("hbyerr");
        var myform = document.getElementById('myform');
        var checkBoxes = myform.querySelectorAll('input[type="checkbox"]');
        let error =true;
        checkBoxes.forEach(item => { 
            if (item.checked) {  
                error = false;
            }
        });
        if (error) {
            hbyerr.style.visibility="visible";
            return false;
        }
        else{
            return true;
        }
        
    }

    function callValue(){  
        var firstName = document.getElementById('fname').value;
        var lastName = document.getElementById('lname').value;

        var day = document.getElementById('day');
        var birthDay = day.options[day.selectedIndex].value;
        var month = document.getElementById('month');
        var birthMonth = month.options[month.selectedIndex].value;
        var year = document.getElementById('Birth_year');
        var birthYear = year.options[year.selectedIndex].value;

        var emailId = document.getElementById('email').value;

        var mobileNo = document.getElementById('phno').value;

        var gender = document.querySelector('input[name=gender]:checked').value;

        var address =  document.getElementById('address').value;

        var city = document.getElementById('city').value;

        var pincode = document.getElementById('pincode').value;

        var state = document.getElementById('state').value;

        var country = document.getElementById('country').value;

        var hobby = document.getElementsByClassName('hobby');
        var hobbyarray = [];
        for(i=0;i<hobby.length;i++){
            if(hobby[i].checked===true && i!==hobby.length-1){
                hobbyarray.push(hobby[i].value);
            }
            else if(hobby[hobby.length-1].checked===true && i===hobby.length-1){
                hobbyarray.push(document.getElementById('otherhobby').value);
            }
            
        }
        

        var sslcBoard = document.getElementById('tenboard').value;
        var sslcPercentage = document.getElementById('tenpercent').value;
        var sslcYearOfPassing = document.getElementById('tenpass').value;

        var hscBoard = document.getElementById('hscboard').value;
        var hscPercentage = document.getElementById('hscpercent').value;
        var hscYearOfPassing = document.getElementById('hscpass').value;

        var ugBoard = document.getElementById('ugboard').value;
        var ugPercentage = document.getElementById('ugpercent').value;
        var ugYearOfPassing = document.getElementById('ugpass').value;

        var pgBoard = document.getElementById('pgboard').value;
        var pgPercentage = document.getElementById('pgpercent').value;
        var pgYearOfPassing = document.getElementById('pgpass').value;

        var course = document.querySelector('input[name=Course]:checked').value;

        var obj = {
            "firstName": firstName,
            "lastName": lastName,
            "birthDay": birthDay,
            "birthMonth": birthMonth,
            "birthYear": birthYear,
            "emailId": emailId,
            "mobileNo": mobileNo,
            "gender": gender,
            "address": address,
            "city": city,
            "pincode": pincode,
            "state": state,
            "country": country,
            "hobbies": hobbyarray,
            "sslcBoard": sslcBoard,
            "sslcPercentage": sslcPercentage,
            "sslcYearOfPassing": sslcYearOfPassing,
            "hscBoard": hscBoard,
            "hscPercentage": hscPercentage,
            "hscYearOfPassing": hscYearOfPassing,
            "ugBoard": ugBoard,
            "ugPercentage": ugPercentage,
            "ugYearOfPassing": ugYearOfPassing,
            "pgBoard": pgBoard,
            "pgPercentage": pgPercentage,
            "pgYearOfPassing": pgYearOfPassing,
            "course": course
        }
            fetch("https://localhost:44371/api/StudentRegForms/Create",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(obj)
            }).then((response)=>response.json()).then((res)=>{
                //console.log(res);

            })
    
        return true;
    }

function populate(){
    var myKey = window.location.search;
    var urlParams = new URLSearchParams(myKey);
    var find = urlParams.get('id');
    var findId = parseInt(find);
    if(findId>0){
        document.getElementById("submitbtn").style.display = "none";
    }
    else{
        document.getElementById("update").style.display = "none";
    }
    if(findId>0){
    fetch("https://localhost:44371/api/StudentRegForms/Get/"+findId,{method:'GET'}).then((response)=>response.json()).then(d=>{
        //console.log(d);
        //console.log(d.firstName)
        if(d.firstName!== undefined){
        document.getElementById('fname').value = d.firstName;
        document.getElementById('lname').value = d.lastName;

        document.getElementById('day').value = d.birthDay;
        document.getElementById('month').value = d.birthMonth;
        document.getElementById('Birth_year').value = d.birthYear;

        document.getElementById('email').value = d.emailId;
        document.getElementById('phno').value = d.mobileNo;

        document.getElementById('address').value = d.address;
        document.getElementById('city').value = d.city;
        document.getElementById('pincode').value = d.pincode;
        document.getElementById('state').value = d.state;
        document.getElementById('country').value = d.country;

        let gender = document.getElementsByName('gender');
        let gvalue = d.gender;
        for (let j = 0, length = gender.length; j < length; j++) {
            if (gender[j].value == gvalue) {
                    gender[j].checked = true;
                    break;
}
}

        let course = document.getElementsByName('Course');
        let cvalue = d.course;
        for (let j = 0, length = course.length; j < length; j++) {
            if (course[j].value == cvalue) {
                course[j].checked = true;
                break;
}
}

        let checkbox = document.getElementsByName('Hobby');
        let checkedValues = d.hobbies;
        let len = checkedValues.length;
        let k = 0;
        for (let j = 0, length = checkbox.length; j < length; j++) {
            if (checkbox[j].value == checkedValues[k] && k<=checkedValues.length) {
                checkbox[j].checked = true;
                    k++;
    }
            else if(j===length-1 && checkedValues[len-1]!="Drawing" && checkedValues[len-1]!="Singing" && checkedValues[len-1]!="Dancing" && checkedValues[len-1]!="Sketching"){
                checkbox[4].checked = true;
                document.getElementById('otherhobby').value = checkedValues[k];
                k++;
            }
    }


        document.getElementById('tenboard').value = d.sslcBoard;
        document.getElementById('tenpercent').value = d.sslcPercentage;
        document.getElementById('tenpass').value = d.sslcYearOfPassing;

        document.getElementById('hscboard').value = d.hscBoard;
        document.getElementById('hscpercent').value = d.hscPercentage;
        document.getElementById('hscpass').value = d.hscYearOfPassing;

        document.getElementById('ugboard').value = d.ugBoard;
        document.getElementById('ugpercent').value = d.ugPercentage;
        document.getElementById('ugpass').value = d.ugYearOfPassing;

        document.getElementById('pgboard').value = d.pgBoard;
        document.getElementById('pgpercent').value = d.pgPercentage;
        document.getElementById('pgpass').value = d.pgYearOfPassing;
}
});
    }

}

window.onload = populate;


function Change(){
    var myKey = window.location.search;
    var urlParams = new URLSearchParams(myKey);
    var find = urlParams.get('id');
    var findId = parseInt(find);
   
                    var firstName = document.getElementById('fname').value;
                    var lastName = document.getElementById('lname').value;

                    var day = document.getElementById('day');
                    var birthDay = day.options[day.selectedIndex].value;
                    var month = document.getElementById('month');
                    var birthMonth = month.options[month.selectedIndex].value;
                    var year = document.getElementById('Birth_year');
                    var birthYear = year.options[year.selectedIndex].value;

                    var emailId = document.getElementById('email').value;

                    var mobileNo = document.getElementById('phno').value;

                    var gender = document.querySelector('input[name=gender]:checked').value;

                    var address =  document.getElementById('address').value;

                    var city = document.getElementById('city').value;

                    var pincode = document.getElementById('pincode').value;

                    var state = document.getElementById('state').value;

                    var country = document.getElementById('country').value;

                    var hobby = document.getElementsByClassName('hobby');
                    var hobbyarray = [];
                    for(i=0;i<hobby.length;i++){
                        if(hobby[i].checked===true && i!==hobby.length-1){
                            hobbyarray.push(hobby[i].value);
                        }
                        else if(hobby[hobby.length-1].checked===true && i===hobby.length-1){
                            hobbyarray.push(document.getElementById('otherhobby').value);
                        }
                        
                    }
                    

                    var sslcBoard = document.getElementById('tenboard').value;
                    var sslcPercentage = document.getElementById('tenpercent').value;
                    var sslcYearOfPassing = document.getElementById('tenpass').value;

                    var hscBoard = document.getElementById('hscboard').value;
                    var hscPercentage = document.getElementById('hscpercent').value;
                    var hscYearOfPassing = document.getElementById('hscpass').value;

                    var ugBoard = document.getElementById('ugboard').value;
                    var ugPercentage = document.getElementById('ugpercent').value;
                    var ugYearOfPassing = document.getElementById('ugpass').value;

                    var pgBoard = document.getElementById('pgboard').value;
                    var pgPercentage = document.getElementById('pgpercent').value;
                    var pgYearOfPassing = document.getElementById('pgpass').value;

                    var course = document.querySelector('input[name=Course]:checked').value;

                    var obj = {
                        "id": findId,
                        "firstName": firstName,
                        "lastName": lastName,
                        "birthDay": birthDay,
                        "birthMonth": birthMonth,
                        "birthYear": birthYear,
                        "emailId": emailId,
                        "mobileNo": mobileNo,
                        "gender": gender,
                        "address": address,
                        "city": city,
                        "pincode": pincode,
                        "state": state,
                        "country": country,
                        "hobbies": hobbyarray,
                        "sslcBoard": sslcBoard,
                        "sslcPercentage": sslcPercentage,
                        "sslcYearOfPassing": sslcYearOfPassing,
                        "hscBoard": hscBoard,
                        "hscPercentage": hscPercentage,
                        "hscYearOfPassing": hscYearOfPassing,
                        "ugBoard": ugBoard,
                        "ugPercentage": ugPercentage,
                        "ugYearOfPassing": ugYearOfPassing,
                        "pgBoard": pgBoard,
                        "pgPercentage": pgPercentage,
                        "pgYearOfPassing": pgYearOfPassing,
                        "course": course
                    }
                    fetch("https://localhost:44371/api/StudentRegForms/Update/"+findId,{
                        method:"PUT",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify(obj)
                    }).then((response)=>response.json()).then((res)=>{
                        //console.log(res);

                    })
        
   return true;

}
function table(){
    window.location.href = 'notify.html';
}

    
 
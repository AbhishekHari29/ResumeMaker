function validatePersonalDetails()
{
    var validity = true;
    var fname = document.ResumeForm.fname.value;
    var lname = document.ResumeForm.lname.value;
    var dob = document.ResumeForm.dob.value;
    var gender = document.ResumeForm.gender.value;
    var address = document.ResumeForm.address.value;
    var city = document.ResumeForm.city.value;
    var zipcode = document.ResumeForm.zipcode.value;
    var country = document.ResumeForm.country.value;
    var emailid = document.ResumeForm.emailid.value;
    var phone = document.ResumeForm.phone.value;
    var currentdate = new Date();
    var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(fname==null||fname==""|| !isNaN(fname))
    {
        alert("Enter a valid First Name");
        validity=false;
    }
    if(lname==null||lname==""|| !isNaN(lname))
    {
        alert("Enter a valid Last Name");
        validity=false;
    }
    if(dob > currentdate ||dob==null||dob=="")
    {
        alert("Enter a valid Date");
        validity=false;
    }
    if(city==null||city==""|| !isNaN(city))
    {
        alert("Enter a valid City");
        validity=false;
    }
    if(zipcode==null||zipcode==""||isNaN(zipcode)||zipcode.length!=6)
    {
        alert("Enter a valid ZIP Code");
        validity=false;
    }
    if(emailid==null||emailid==""|| !emailpattern.test(emailid))
    {
        alert("Enter a valid EmailID");
        validity=false;
    }
    if(phone==null||phone==""||phone.length!=10||isNaN(phone))
    {
        alert("Enter a valid Phone Number");
    }
    return validity;
}
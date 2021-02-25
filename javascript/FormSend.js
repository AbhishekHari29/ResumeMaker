function FormSend()
{
    if(validatePersonalDetails())
    {
    //Personal Details
    sessionStorage.setItem("fname",document.ResumeForm.fname.value);
    sessionStorage.setItem("lname",document.ResumeForm.lname.value);
    sessionStorage.setItem("dob",document.ResumeForm.dob.value);
    sessionStorage.setItem("gender",document.ResumeForm.gender.value);
    sessionStorage.setItem("address",document.ResumeForm.address.value);
    sessionStorage.setItem("city",document.ResumeForm.city.value);
    sessionStorage.setItem("zipcode",document.ResumeForm.zipcode.value);
    sessionStorage.setItem("country",document.ResumeForm.country.value);
    sessionStorage.setItem("emailid",document.ResumeForm.emailid.value);
    sessionStorage.setItem("phone",document.ResumeForm.phone.value);
    sessionStorage.setItem("pro_pic",document.ResumeForm.pro_pic.value);
    }
    //Work Experience
    var jobtitle = new Array();
    var cmpname = new Array();
    var cmpcity = new Array();
    var cmpstate = new Array();
    var strtdate = new Array();
    var enddate = new Array();
    var jobdes =  new Array();
    for(var i=0;i<2;i++)
    {
        jobtitle.push(document.ResumeForm.jobtitle[i].value);
        cmpname.push(document.ResumeForm.cmpname[i].value);
        cmpcity.push(document.ResumeForm.cmpcity[i].value);
        cmpstate.push(document.ResumeForm.cmpstate[i].value);
        strtdate.push(document.ResumeForm.strtdate[i].value);
        enddate.push(document.ResumeForm.enddate[i].value);
        jobdes.push(document.ResumeForm.jobdes[i].value);
    }
    sessionStorage.setItem("jobtitle",jobtitle);
    sessionStorage.setItem("cmpname",cmpname);
    sessionStorage.setItem("cmpcity",cmpcity);
    sessionStorage.setItem("cmpstate",cmpstate);
    sessionStorage.setItem("strtdate",strtdate);
    sessionStorage.setItem("enddate",enddate);
    sessionStorage.setItem("jobdes",jobdes); 
    //Educational Details
    //Post Graduate
    sessionStorage.setItem("pg_field",document.ResumeForm.pg_field.value);
    sessionStorage.setItem("pg_degree",document.ResumeForm.pg_degree.value);
    sessionStorage.setItem("pg_city",document.ResumeForm.pg_city.value);
    sessionStorage.setItem("pg_state",document.ResumeForm.pg_state.value);
    sessionStorage.setItem("pg_school",document.ResumeForm.pg_school.value);
    if(document.ResumeForm.pg_grad_now.checked==true)
    {
        sessionStorage.setItem("pg_grad","Now");            
    }
    else
    {
        sessionStorage.setItem("pg_grad",document.ResumeForm.pg_grad.value);        
    }
    //Under Graduate
    sessionStorage.setItem("ug_field",document.ResumeForm.ug_field.value);
    sessionStorage.setItem("ug_degree",document.ResumeForm.ug_degree.value);
    sessionStorage.setItem("ug_city",document.ResumeForm.ug_city.value);
    sessionStorage.setItem("ug_state",document.ResumeForm.ug_state.value);
    sessionStorage.setItem("ug_school",document.ResumeForm.ug_school.value);
    if(document.ResumeForm.ug_grad_now.checked==true)
    {
        sessionStorage.setItem("ug_grad","Now");            
    }
    else
    {
        sessionStorage.setItem("ug_grad",document.ResumeForm.ug_grad.value);        
    }
    //High School
    sessionStorage.setItem("hs_city",document.ResumeForm.hs_city.value);
    sessionStorage.setItem("hs_state",document.ResumeForm.hs_state.value);
    sessionStorage.setItem("hs_school",document.ResumeForm.hs_school.value);
    if(document.ResumeForm.hs_grad_now.checked==true)
    {
        sessionStorage.setItem("hs_grad","Now");            
    }
    else
    {
        sessionStorage.setItem("hs_grad",document.ResumeForm.hs_grad.value);        
    }
    //Skills
    var per_skill = new Array();
    var per_skl_lvl = new Array();
    var pro_skill = new Array();
    var pro_skl_lvl = new Array();
    for(var i=0;i<3;i++)
    {
        if(document.ResumeForm.per_skill[i].value!="")
        {
            per_skill.push(document.ResumeForm.per_skill[i].value);
            per_skl_lvl.push(document.ResumeForm.per_skl_lvl[i].value);
        }
        if(document.ResumeForm.pro_skill[i].value!="")
        {
            pro_skill.push(document.ResumeForm.pro_skill[i].value);
            pro_skl_lvl.push(document.ResumeForm.pro_skl_lvl[i].value);
        }
    }
    sessionStorage.setItem("per_skill",per_skill);
    sessionStorage.setItem("per_skl_lvl",per_skl_lvl);
    sessionStorage.setItem("pro_skill",pro_skill);
    sessionStorage.setItem("pro_skl_lvl",pro_skl_lvl);
    //Languages & Hobby
    var lang = new Array();
    var hobby = new Array();
    for(var i=0;i<4;i++)
    {
        if(document.ResumeForm.language[i].value!="")
        {
            lang.push(document.ResumeForm.language[i].value);
        }
        if(document.ResumeForm.hobby[i].value!="")
        {
            hobby.push(document.ResumeForm.hobby[i].value);
        }
    }
    sessionStorage.setItem("lang",lang);
    sessionStorage.setItem("hobby",hobby);
    //Awards
    var award = new Array();
    for(var i=0;i<3;i++)
    {
        if(document.ResumeForm.award[i].value!="")
        {
            award.push(document.ResumeForm.award[i].value);
        }
    }
    sessionStorage.setItem("award",award);
    //Personal Summary
    sessionStorage.setItem("per_sum",document.ResumeForm.per_sum.value);
}


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
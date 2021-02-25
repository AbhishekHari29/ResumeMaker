    //Personal Details
    var fname = sessionStorage.getItem("fname");
    var lname = sessionStorage.getItem("lname");
    var dob = sessionStorage.getItem("dob");
    var gender = sessionStorage.getItem("gender");
    var address = sessionStorage.getItem("address");
    var city = sessionStorage.getItem("city");
    var zipcode = sessionStorage.getItem("zipcode");
    var country = sessionStorage.getItem("country");
    var emailid = sessionStorage.getItem("emailid");
    var phone = sessionStorage.getItem("phone");
    var pro_pic = sessionStorage.getItem("pro_pic");
    //Work Experience
    var jobtitle = sessionStorage.getItem("jobtitle").split(",");
    var cmpname = sessionStorage.getItem("cmpname").split(",");
    var cmpcity = sessionStorage.getItem("cmpcity").split(",");
    var cmpstate = sessionStorage.getItem("cmpstate").split(",");
    var strtdate = sessionStorage.getItem("strtdate").split(",");
    var enddate = sessionStorage.getItem("enddate").split(",");
    var jobdes = sessionStorage.getItem("jobdes").split(",");
    //Education
    var pg_field = sessionStorage.getItem("pg_field");
    var pg_degree = sessionStorage.getItem("pg_degree");
    var pg_city = sessionStorage.getItem("pg_city");
    var pg_state = sessionStorage.getItem("pg_state");
    var pg_school = sessionStorage.getItem("pg_school");
    var pg_grad = sessionStorage.getItem("pg_grad");
    var ug_field = sessionStorage.getItem("ug_field");
    var ug_degree = sessionStorage.getItem("ug_degree");
    var ug_city = sessionStorage.getItem("ug_city");
    var ug_state = sessionStorage.getItem("ug_state");
    var ug_school = sessionStorage.getItem("ug_school");
    var ug_grad = sessionStorage.getItem("ug_grad");
    var hs_city = sessionStorage.getItem("hs_city");
    var hs_state = sessionStorage.getItem("hs_state");
    var hs_school = sessionStorage.getItem("hs_school");
    var hs_grad = sessionStorage.getItem("hs_grad");
    //Skill
    var per_skill = sessionStorage.getItem("per_skill").split(",");
    var per_skl_lvl = sessionStorage.getItem("per_skl_lvl").split(",");
    var pro_skill = sessionStorage.getItem("pro_skill").split(",");
    var pro_skl_lvl = sessionStorage.getItem("pro_skl_lvl").split(",");
    //Activity/Interest
    var lang = sessionStorage.getItem("lang").split(",");
    var hobby = sessionStorage.getItem("hobby").split(",");
    var award = sessionStorage.getItem("award").split(",");
    var per_sum = sessionStorage.getItem("per_sum").split(",");

    document.getElementById("form_propic").innerHTML = '<img src="'+pro_pic+'" width="125px" height="160px">';
    document.getElementById("form_name").innerHTML = "<b>"+fname+" "+lname+"</b>";
    document.getElementById("form_address").innerHTML = '<img src="../icon/formicon1.png"> '+address+", "+city+", "+zipcode+", "+country;
    document.getElementById("form_email").innerHTML = '<img src="../icon/formicon2.png"> '+emailid;
    document.getElementById("form_phone").innerHTML = '<img src="../icon/formicon3.png"> '+phone;

    document.getElementById('form_per_sum').innerHTML = per_sum;

    var str = '<ul>';
    for(var i=0;i<jobtitle.length;i++)
    {
        str+='<li><b>'+jobtitle[i]+'</b> - '+cmpname[i] +', '+cmpcity[i]+', '+cmpstate[i]+'<br>'+
        strtdate[i]+' - '+enddate[i]+'<br>'+
        jobdes[i]+'<br></li>';
    }
    str+='</ul>';
    document.getElementById("form_work_exp").innerHTML = str;

    str='<ul>';
    if(hs_grad!="Now")
    {
        if(ug_grad!="Now")
        {
            str+='<li><b>Post Graduate</b> - '+pg_field+' - '+pg_degree+'<br>'+
            pg_school+', '+pg_city+', '+pg_state+' - '+(pg_grad=="Now"?pg_grad:pg_grad.substring(0,4))+'</li>';   
        }
        str+='<li><b>Under Graduate</b> - '+ug_field+' - '+ug_degree+'<br>'+
        ug_school+', '+ug_city+', '+ug_state+' - '+(ug_grad=="Now"?ug_grad:ug_grad.substring(0,4))+'</li>';    

    }
    str+='<li><b>High School</b> - <br>'+
    hs_school+', '+hs_city+', '+hs_state+' - '+(hs_grad=="Now"?hs_grad:hs_grad.substring(0,4))+'</li></ul>';
    document.getElementById("form_education").innerHTML = str;

    var str1='<ul>',str2='<ul style="list-style-type: none;padding: 0px;">';
    var str3='<ul>',str4='<ul style="list-style-type: none;padding: 0px;">';
    for(var i=0;i<per_skill.length;i++)
    {
        str1+='<li>'+per_skill[i]+'</li>';
        str2+='<li><div class="skillbar"><div class="skill_lvl" style="width: '+(per_skl_lvl[i]*10)+'%;"></div></div></li>'
    }
    str1+='</ul>';
    str2+='</ul>';
    for(var i=0;i<pro_skill.length;i++)
    {
        str3+='<li>'+pro_skill[i]+'</li>';
        str4+='<li><div class="skillbar"><div class="skill_lvl" style="width: '+(pro_skl_lvl[i]*10)+'%;"></div></div></li>'
    }
    str3+='</ul>';
    str4+='</ul>';
    document.getElementById("form_per_skill").innerHTML = str1;
    document.getElementById("form_per_lvl").innerHTML = str2;
    document.getElementById("form_pro_skill").innerHTML = str3;
    document.getElementById("form_pro_lvl").innerHTML = str4;

    str='<ul>'
    for(var i=0;i<lang.length;i++)
    {
        str+='<li>'+lang[i]+'</li>';
    }
    str+='</ul>';
    document.getElementById("form_lang").innerHTML = str;

    str='<ul>';
    for(var i=0;i<hobby.length;i++)
    {
        str+='<li>'+hobby[i]+'</li>';
    }
    str+='</ul>';
    document.getElementById("form_hobby").innerHTML = str;

    str='<ul>';
    for(var i=0;i<award.length;i++)
    {
        str+='<li>'+award[i]+'</li>';
    }
    str+='</ul>';
    document.getElementById("form_award").innerHTML = str;
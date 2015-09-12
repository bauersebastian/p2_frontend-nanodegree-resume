var fullname = "Sebastian Bauer";

var formattedName = HTMLheaderName.replace("%data%", fullname);
var formattedRole = HTMLheaderRole.replace("%data%", "SAP Consultant & Web Developer");

var bio = {
    "role" : "SAP Consultant & Web Developer",
    "name" : "Sebastian Bauer",
    "age" : "29",
    "skills" : ["SAP ERP - Module MM & FI", "JavaScript", "Python", "HTML", "CSS"],
    "contacts" : {
        "street" : "Jahnstraße 15",
        "city" : "Gerolzhofen",
        "country" : "Germany",
        "postal_code" : 97447,
        "mobile" : "+4993823184945",
        "twitter" : "@bauersebastian",
        "github" : "pisada",
    },
    "pic_url" : "https://github.com/pisada/p1_frontend_nanodegree/blob/master/static/images/portrait_750w.jpg?raw=true",
    "welcome_message" : "SAP Consultant, part time Web Developer and passionate mountainbiker"
};

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



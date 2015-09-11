var fullname = "Sebastian Bauer";

var formattedName = HTMLheaderName.replace("%data%", fullname);
var formattedRole = HTMLheaderRole.replace("%data%", "SAP Consultant & Web Developer");

$("#header").append(formattedName);
$("#header").append(formattedRole);


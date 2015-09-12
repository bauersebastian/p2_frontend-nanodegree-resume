/*
 work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.

 projects contains an array of projects. Each project object in projects should contain a title, dates worked, description,
 and an images array with URL strings for project images.

 bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain
 (but doesn't have to) a mobile number, email address, github username, twitter handle and location.

 education contains an array of schools. Each school object in schools contains a name, location, degree, majors array,
 dates attended and a url for the school's website. education also contains an onlineCourses array.
 Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.
 */

var work = {
    "jobs" : [
        {
            "employer" : "FIS Informationssysteme und Consulting GmbH",
            "title" : "SAP Consultant FIS/EIM Solutions",
            "location" : "Grafenrheinfeld",
            "date" : "2012 - today",
            "description" : "Project Manager and Consultant for Enterprise Information Solutions within the SAP modules FI and MM"
        },
        {
            "employer" : "Kundenlokal GbR",
            "title" : "Consulting and Web Development",
            "location" : "Gerolzhofen",
            "date" : "2011 - today",
            "description" : "Web Development for small and mid sized companies, Consultant for E-Commerce sites based on PlentyMarkets"
        },
        {
            "employer" : "Corma Deutschland GmbH",
            "title" : "Sales and Marketing",
            "location" : "Schweinfurt",
            "date" : "2008 - 2012",
            "description" : "Sales and Marketing for Europe and Middle East for special purpose machinery"
        },
        {
            "employer" : "Fränkische Rohrwerke Gebr. Kirchner GmbH & Co. KG",
            "title" : "Sales Assistant",
            "location" : "Königsberg in Bayern",
            "date" : "2003 - 2008",
            "description" : "Sales Assistant for special purpose machinery"
        }
    ]
};

var experience = {
    "projects" : [
        {
            "title" : "Kirchner Online Shop",
            "date" : "2014 - today",
            "description" : "Online Shop based on PlentyMarkets",
            "image" : "https://raw.githubusercontent.com/pisada/p1_frontend_nanodegree/master/static/images/logo_kirchner.png",
            "url" : "https://www.kirchner24.de"
        },
        {
            "title" : "DK Fitnessfabrik",
            "date" : "2014",
            "description" : "3 Websites for a fitness center in various locations",
            "image" : "https://raw.githubusercontent.com/pisada/p1_frontend_nanodegree/master/static/images/dk_fitness.png",
            "url" : "http://www.dk-fitnessfabrik.de"
        },
        {
            "title" : "Freie Wähler Gerolzhofen",
            "date" : "2013",
            "description" : "A website for a local political party",
            "image" : "https://raw.githubusercontent.com/pisada/p1_frontend_nanodegree/master/static/images/fw_logo.png",
            "url" : "http://www.fwgerolzhofen.de/"
        }
    ]
};

var bio = {
    "role" : "SAP Consultant & Web Developer",
    "name" : "Sebastian Bauer",
    "age" : "29",
    "skills" : ["SAP ERP - Module MM & FI", "JavaScript", "Python", "HTML", "CSS", "Online Marketing", "E-Commerce"],
    "contacts" : {
        "city" : "Gerolzhofen",
        "country" : "Germany",
        "phone" : "+4993823184945",
        "twitter" : "@bauersebastian",
        "email" : "sebastian@pisada.de",
        "github" : "pisada",
    },
    "pic_url" : "https://github.com/pisada/p1_frontend_nanodegree/blob/master/static/images/portrait_750w.jpg?raw=true",
    "welcome_message" : "SAP Consultant, part time Web Developer and passionate mountainbiker"
};

var education = {
    "schools" : [
        {
            "school" : "Hamburger Fern-Hochschule",
            "city" : "Würzburg",
            "date" : "2010 - 2014",
            "degree" : "Bachelor of Arts",
            "major" : "Betriebswirtschaftslehre, Wirtschaftsinformatik",
            "url" : ""
        },
        {
            "school" : "IHK Würzburg Schweinfurt",
            "city" : "Schweinfurt",
            "date" : "2007 - 2009",
            "degree" : "Gepr. Industriefachwirt IHK",
            "major" : "Betriebswirtschaft",
            "url" : ""
        },
        {
            "school" : "Berufschule Hassfurt",
            "city" : "Hassfurt",
            "date" : "2003 - 2006",
            "degree" : "Industriekaufmann",
            "major" : "Betriebswirtschaft",
            "url" : ""
        }
    ],
    "online_courses" : [
        {
            "school" : "Udacity Inc.",
            "course" : "Frontend Web Developer Nanodegree",
            "date" : "08/2015 - today",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if (bio.skills) {
    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);
    $("#skills").append(formattedSkills);
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
};

displayWork();


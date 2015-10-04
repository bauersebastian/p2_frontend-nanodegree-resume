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
        "city" : "Gerolzhofen, Germany",
        "phone" : "+4993823184945",
        "twitter" : "@bauersebastian",
        "email" : "sebastian@pisada.de",
        "github" : "pisada"
    },
    "pic_url" : "https://avatars3.githubusercontent.com/u/7461972?v=3&s=460",
    "welcome_message" : "SAP Consultant, part time Web Developer and passionate mountainbiker"
};

var education = {
    "schools" : [
        {
            "school" : "Hamburger Fern-Hochschule",
            "location" : "Würzburg",
            "date" : "2010 - 2014",
            "degree" : "Bachelor of Arts",
            "major" : "Betriebswirtschaftslehre, Wirtschaftsinformatik",
            "url" : ""
        },
        {
            "school" : "IHK Würzburg Schweinfurt",
            "location" : "Schweinfurt",
            "date" : "2007 - 2009",
            "degree" : "Gepr. Industriefachwirt IHK",
            "major" : "Betriebswirtschaft",
            "url" : ""
        },
        {
            "school" : "Berufschule Hassfurt",
            "location" : "Hassfurt",
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

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.city);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedPic = HTMLbioPic.replace("%data%", bio.pic_url);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
    $("#headName").prepend(formattedRole);
    $("#headName").prepend(formattedName);
    $(".bioInfo").prepend(formattedMsg);
    $(".bioInfo").prepend(formattedPic);
    $(".topContacts").prepend(formattedTwitter);
    $(".topContacts").prepend(formattedEmail);
    $(".topContacts").prepend(formattedGithub);
    $(".topContacts").append(formattedLocation);

    if (bio.skills) {
        $(".bioInfo").append(HTMLskillsStart);
        var formattedSkillsString = bio.skills.join(', ');
        var formattedSkills = HTMLskills.replace("%data%", formattedSkillsString);
        $(".skills").append(formattedSkills);
    }
};

education.display = function() {
    for (school in education.schools) {
        $(".educationInfo").append(HTMLschoolStart);
        $(".educationInfo2").append(HTMLschoolStart2);
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].school);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDate);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedMajor);
        $(".education-entry2:last").append(formattedSchool);
        $(".education-entry2:last").append(formattedLocation);
        $(".education-entry2:last").append(formattedDate);
        $(".education-entry2:last").append(formattedDegree);
        $(".education-entry2:last").append(formattedMajor);
    }

    $(".educationInfo").append(HTMLonlineClasses);
    $(".educationInfo2").append(HTMLonlineClasses);

    for (school in education.online_courses) {
        $(".educationInfo").append(HTMLschoolStart);
        $(".educationInfo2").append(HTMLschoolStart2);
        var formattedOnlineCourse = HTMLonlineTitle.replace("%data%", education.online_courses[school].course);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online_courses[school].school);
        var formattedOnlineCourseDate = HTMLonlineDates.replace("%data%", education.online_courses[school].date);
        var formattedOnlineCourseUrl = HTMLonlineURL.replace("%data%", education.online_courses[school].url);
        $(".education-entry:last").append(formattedOnlineCourse);
        $(".education-entry:last").append(formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineCourseDate);
        $(".education-entry:last").append(formattedOnlineCourseUrl);
        $(".education-entry2:last").append(formattedOnlineCourse);
        $(".education-entry2:last").append(formattedOnlineSchool);
        $(".education-entry2:last").append(formattedOnlineCourseDate);
        $(".education-entry2:last").append(formattedOnlineCourseUrl);

    }

};

work.display = function() {
    for (job in work.jobs) {
        $(".workInfo").append(HTMLworkStart);
        $(".workInfo2").append(HTMLworkStart2);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
        $(".work-entry2:last").append(formattedEmployerTitle);
        $(".work-entry2:last").append(formattedDates);
        $(".work-entry2:last").append(formattedLocation);
        $(".work-entry2:last").append(formattedDescription);
    }
};

experience.display = function() {
    for (projects in experience.projects) {
        $(".projectInfo").append(HTMLprojectStart);
        $(".projectInfo2").append(HTMLprojectStart2);
        var formattedTitle = HTMLprojectTitle.replace("%data%", experience.projects[projects].title);
        var formattedDescription = HTMLprojectDescription.replace("%data%", experience.projects[projects].description);
        var formattedDate = HTMLprojectDates.replace("%data%", experience.projects[projects].date);
        var formattedImage = HTMLprojectImage.replace("%data%", experience.projects[projects].image);
        var formattedUrl = formattedTitle.replace("%dataURL%", experience.projects[projects].url);
        $(".project-entry:last").append(formattedUrl);
        $(".project-entry:last").append(formattedDate);
        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append(formattedImage);
        $(".project-entry2:last").append(formattedUrl);
        $(".project-entry2:last").append(formattedDate);
        $(".project-entry2:last").append(formattedDescription);
        $(".project-entry2:last").append(formattedImage);
    }
};

work.display();
experience.display();
bio.display();
education.display();

//
//function inName() {
//  var name = window.name;
//  name = name.trim().split(" ");
//  console.log(name);
//  name[1] = name[1].toUpperCase();
//  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//
//  return name[0] +" "+ name[1];
//}
//
//var name = $("#name").text();

//$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);

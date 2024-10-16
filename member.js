function skillsMember()
{
    // Get the member id from the URL
    var memberId = window.location.search.substring(1);
    memberId = memberId.split("=");
    memberId = memberId[1];
    
    // Get the member data from the server
    var memberData = getMemberData(memberId);
    
    // Get the skills data from the server
    var skillsData = getSkillsData();
    
    // Create the skills list
    var skillsList = "";
    for (var i = 0; i < skillsData.length; i++)
    {
        if (memberData.skills.indexOf(skillsData[i].id) != -1)
        {
            skillsList += "<li>" + skillsData[i].name + "</li>";
        }
    }
    
    // Display the skills list
    document.getElementById("skills-list").innerHTML = skillsList;
}
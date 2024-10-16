// Create web server
// function createWebServer()
// {
//     // Create the web server
//     var server = new Server();
//     
//     // Create the member data
//     var memberData = [
//         {id: 1, name: "John Doe", skills: [1, 2, 3]},
//         {id: 2, name: "Jane Doe", skills: [2, 3, 4]},
//         {id: 3, name: "Jim Doe", skills: [3, 4, 5]}
//     ];
//     
//     // Create the skills data
//     var skillsData = [
//         {id: 1, name: "HTML"},
//         {id: 2, name: "CSS"},
//         {id: 3, name: "JavaScript"},
//         {id: 4, name: "PHP"},
//         {id: 5, name: "SQL"}
//     ];
//     
//     // Add the member data to the server
//     server.addResource("members", memberData);
//     
//     // Add the skills data to the server
//     server.addResource("skills", skillsData);
//     
//     // Start the server
//     server.start();
// }
// Create the web server
function createWebServer() {
    // Create the web server
    var server = new Server();

    // Create the comments data
    var commentsData = [
        { id: 1, memberId: 1, text: "Great work!" },
        { id: 2, memberId: 2, text: "Nice job!" },
        { id: 3, memberId: 3, text: "Keep it up!" }
    ];

        // Add the comments data to the server
        server.addResource("comments", commentsData);
    }
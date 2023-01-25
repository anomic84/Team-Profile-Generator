const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body rounded-top">
                <h5 class="card-title">${manager.getName()}</h5>
                <p class="card-text"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>

        </div>`;
    };

    const generateEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body rounded-top">
                <h5 class="card-title">${engineer.getName()}</h5>
                <p class="card-text"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</li>
            </ul>
        </div>`;
    };

    const generateIntern = intern => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body rounded-top">
                <h5 class="card-title">${intern.getName()}</h5>
                <p class="card-text"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email:  <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>`;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
}

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>Team Profile Generator</title>
</head>

<body>
    <div class="banner">
        <h1>My Team</h1>
    </div>
    <div class="card-section1">
        ${generateTeam(team)}
    </div>
</body>


</html>`;
};
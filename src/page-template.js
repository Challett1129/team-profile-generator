const Manager = require("../lib/Manager");
//returns a bootstrap card with manager information
const managerCard = function(manArr) {
    return `
    ${manArr
        .map(({ name, email, id, officeNumber}) => {
            return `
            <div class="col-12 col-md-5 col-lg-3 mb-3">
                    <div class="card shadow " style="width: 18rem;">
                        <div class="card-header cardBg text-light p-3">
                        <h2>${name}</h2>
                        <h3> <span class="iconify" data-icon="mdi:robot-happy"></span> Manager </h3> 
                        </div>
                        <div class="cardWhiteSpace card-body pb-5 pt-5 p-3">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item p-2">ID: ${id} </li>
                                <li class="list-group-item p-2">Email: <a href="mailto:${email}"> ${email}</a></li>
                                <li class="list-group-item p-2">Office Number: ${officeNumber}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        })}
    `
};
//returns a bootstrap card with engineer information
const engineerCards = function(engArr) {
    return `
    ${engArr
        .map(({ name, email, id, github}) => {
            return `
            <div class="col-12 col-md-5 col-lg-3 mb-3">
            <div class="card shadow " style="width: 18rem;">
                <div class="card-header cardBg text-light p-3">
                <h2>${name}</h2>
                <h3><span class="iconify" data-icon="ic:baseline-engineering"></span> Engineer </h3> 
                </div>
                <div class="cardWhiteSpace card-body pb-5 pt-5 p-3">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item p-2">ID: ${id}</li>
                        <li class="list-group-item p-2">Email: <a href="mailto:${email}"> ${email}</a></li>
                        <li class="list-group-item p-2">Github: <a href="github.com/${github}" target="_blank"> ${github}</a></li>
                    </ul>
                </div>
            </div>
        </div>
            `
        })
        .join('')}
    `
};
//returns a bootstrap card with intern information
const internCards = function(internArr) {
    return `
    ${internArr
        .map(({ name, email, id, school}) => {
            return `
            <div class="col-12 col-md-5 col-lg-3 mb-3">
            <div class="card shadow " style="width: 18rem;">
                <div class="card-header cardBg text-light p-3">
                <h2>${name}</h2>
                <h3><span class="iconify" data-icon="ic:baseline-school"></span> Intern </h3> 
                </div>
                <div class="cardWhiteSpace card-body pb-5 pt-5 p-3">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item p-2">ID: ${id}</li>
                        <li class="list-group-item p-2">Email: <a href="mailto:${email}"> ${email}</a></li>
                        <li class="list-group-item p-2">School: ${school}</li>
                    </ul>
                </div>
            </div>
        </div>
            `
        })
    .join('')}
    `
};

//returns generated html to be created in index.html in the dist folder
module.exports = function(manArr, engArr, internArr) {


return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<header>
    <h1 class="col-12 text-center headerBg text-light p-5 shadow">My Team</h1>
</header>
<body>

<section>
        <div class="container mt-5 p-2">
            <div class="row">
            ${managerCard(manArr)}
            ${engineerCards(engArr)}
            ${internCards(internArr)}
            </div>
        </div>
    </section>

    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>
</body>
</html>
`;
}
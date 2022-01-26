// Manager creator function
const getManager = (manager) => {
    return `
    <div class="column is-one-third">
            <div class="card" id="card">
                <header class="card-header">
                  <h3 class="card-header-title">
                    ${manager.name}
                    Manager <i class="fas fa-bullhorn" id="bullhorn"></i>
                  </h3>
                </header>
                <div class="card-content">
                  <div class="content">
                    <ul>
                        <li>ID: ${manager.id}</li>
                        <li>Email: ${manager.email}</li>
                        <li>Office Number: ${manager.officeNumber}</li>
                    </ul>
                  </div>
                </div>
              </div>
        </div>
    `;
}

// Engineer creator function
const getEngineer = (engineer) => {
    return `
    <div class="column is-one-third">
            <div class="card" id="card">
                <header class="card-header">
                  <h3 class="card-header-title">
                  ${engineer.name}
                    Engineer <i class="fas fa-glasses" id="glasses"></i></i>
                  </h3>
                </header>
                <div class="card-content">
                  <div class="content">
                    <ul>
                        <li>ID: ${engineer.id}</li>
                        <li>Email: ${engineer.email}</li>
                        <li>Github: ${engineer.github}</li>
                    </ul>
                  </div>
                </div>
              </div>
        </div>
    `;
}

// Intern creator function
const getIntern = (intern) => {
    return `
    <div class="column is-one-third">
            <div class="card" id="card">
                <header class="card-header">
                  <h3 class="card-header-title">
                  ${intern.name}
                    Intern <i class="fas fa-university" id="university"></i></i></i>
                  </h3>
                </header>
                <div class="card-content">
                  <div class="content">
                    <ul>
                        <li>ID: ${intern.id}</li>
                        <li>Email: ${intern.email}</li>
                        <li>School: ${intern.school}</li>
                    </ul>
                  </div>
                </div>
              </div>
        </div>
    `;
}

// Function to join all cards together in one HTML file 

makeTeamProfile = (employeeCards) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
</head>
<body>
    <header class="my-team">
        <h1>My Team Profile</h1>
    </header>

    <section class="columns is-multiline">
      <!-- Cards go here  -->
      ${employeeCards}
    </section>
    <script src="https://kit.fontawesome.com/2d2ec9e6b7.js" crossorigin="anonymous"></script>
</body>
</html>
  `;
}

module.exports = getEmployees;
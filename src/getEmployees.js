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

module.exports = getEmployees;
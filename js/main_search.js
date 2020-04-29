const sections = [
  {
    id: 1,
    title: "Title",
    name: [],
    position: [],
    detail: ["Details"],
  },
  {
    id: 2,
    title: "Title",
    name: ["Name"],
    position: ["Position"],
    detail: ["Details"],
  },
  {
    title:
      'Jonathan H. Chan. "Parallel Affinity Propagation Clustering in Identifying Sub-Network Biomarker Genes of Lung Cancer." In Proceedings of the 7th International Conference on Computational Systems-Biology and Bioinformatics, pp. 19-23. 2016.',
  },
];

function findMatches(wordToMatch, sections) {
  return sections.filter((item) => {
    // console.log(item);
    const regex = new RegExp(wordToMatch, "gi");
    return (
      item.title.match(regex) ||
      item.name.map((item) => item.match(regex)) ||
      item.position.map((item) => item.match(regex)) ||
      item.detail.map((item) => item.match(regex))
    );
  });
}

function displayMatches(e) {
  //   console.log(e.which, e.key, e.code);
  if (e.which === 13 || e.key == "Enter" || e.code == "Enter") {
    // console.log("test");
    e.preventDefault();
    return false;
  }

  const matchedArray = findMatches(this.value, publications);

  const html = matchedArray
    .map((item) => {
      const regex = new RegExp(this.value, "gi");
      const serachResult = item.title.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      return `
          <li>
          <h4 class="about-school-detail" style="text-align: justify;">${serachResult}</h4>
          </li>
          `;
    })
    .join("");
  suggestions.innerHTML = html;
}

function showList() {
  const html = publications
    .map((item) => {
      return `
          <li>
          <h4 class="about-school-detail" style="text-align: justify;">${item.title}</h4>
          </li>
          `;
    })
    .join("");
  suggestions.innerHTML = html;
}

function getTemplate(section) {
  const INTRODUCTION = 1;
  const DEMO = 2;
  const TEAM = 3;
  const MAP = 4;

  let template;

  switch (section.id) {
    case INTRODUCTION:
      template = `
        <div id="about" class="container-fluid max-width">
            <div class="row">
                <div class="col-sm-12">
                    <h2 class="about-school">${section.title}</h2><br>
                    <h4 class="about-school-detail" style="text-align: justify;text-indent: 80px;">${
                      detail.lenght == 1 ? section.detail[0] : ""
                    }</h4>
                </div>
            </div>
        </div>`;
      break;
    case DEMO:
      template = `
      `;
      break;
    case TEAM:
      sub1 = `
    <div class="row slideanim speaker-list">
            <div class="col-sm-4">
                <div class="speaker"> <img class="thumbnail-circle" src="assets/mock_demo/man-people-pngrepo-com.png" alt="Professor Soo-Young Lee">
                    <h3>Jianlan Wang</h3>
                    <h4>Principal Investigator</h4>
                    <h5>Dr. Wang is an assistant professor in the Department of Teacher Education at Texas Tech University. Dr. Wang has rich experience in designing, implementing, and researching inquiry-based and argumentation-leveraged science units from K to 8 and physics units from 9 to college. He has taught inquiry-oriented physics courses in both high school (AP physics) and college (introductory calculus-based physics). His work also involves reforming instructional methods courses for elementary and secondary science teacher candidates through the constructivist approach. Dr. Wang is skilled in both qualitative and quantitative research methods. His research foci at Texas Tech University include designing and evaluating a scaffolding approach to the knowledge construction of teacher candidates and building models of different kinds (e.g. hierarchical linear model) that connect the variables of educational reforms, teacher knowledge, teacher practice, and student performance.</h5>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="speaker"> <img class="thumbnail-circle" src="assets/mock_demo/man-people-pngrepo-com.png" alt="Professor Soo-Young Lee">
                    <h3>Beth Thacker</h3>
                    <h4>Co-Principal Investigator</h4>
                    <h5>Dr. Thacker is an Associate Professor of Physics. She has most recently been working on course and curriculum development and assessment. She has developed a laboratory-based, inquiry-based curriculum (INQ) taught using Socratic questioning pedagogy and has done significant work investigating students’ qualitative and quantitative understanding of physics concepts in courses taught by traditional and non-traditional methods. She is presently working on the expansion of the INQ course to a larger classroom, including training of student assistants (SAs), and research on SA’s pedagogical content knowledge of questioning (PCK-Q), as well as a study of the thinking skills of INQ students. She is also researching the effectiveness of Augmented Reality (AR) on increasing students understanding of magnetism through 3-D visualization of magnetic fields enhanced by a 3-D AR interactive simulation. In addition, she has studied students understanding of topics in modern physics and quantum mechanics and has a recent interest in quantum computing.</h5>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="speaker"> <img class="thumbnail-circle" src="assets/mock_demo/man-people-pngrepo-com.png" alt="Professor Soo-Young Lee">
                    <h3>Stephanie Hart</h3>
                    <h4>Co-Principal Investigator </h4>
                    <h5>Dr. Hart is the Director of the TTU OnRamps program, a dual enrollment initiative that gives high school students the opportunity to earn college credits in STEM courses. The OnRamps program trains teachers to implement inquiry-based instruction, peer instruction, and student-centered learning with college content in a high school classroom. Her background is in behavioral science and teacher education. Dr. Hart specializes in coaching college instructors and K-12 teachers in pedagogy, observational assessment, educational measurement, and data-based instruction. She is a Board Certified Behavior Analyst-Doctoral Level (BCBA-D). She is also on the graduate faculty in the College of Education at Texas Tech and teaches master’s level courses in Applied Behavior Analysis.</h5>
                </div>
            </div>
        </div>`;

      sub2 = `
    <div class="row slideanim speaker-list">
            <div class="col-sm-4" hidden>
                <div class="speaker"> <img class="thumbnail-circle" src="assets/mock_demo/man-people-pngrepo-com.png" alt="Professor Soo-Young Lee">
                    <h3>Jianlan Wang</h3>
                    <h4>Principal Investigator </h4>
                    <h5>Dr. Wang is an assistant professor in the Department of Teacher Education at Texas Tech University. Dr. Wang has rich experience in designing, implementing, and researching inquiry-based and argumentation-leveraged science units from K to 8 and physics units from 9 to college. He has taught inquiry-oriented physics courses in both high school (AP physics) and college (introductory calculus-based physics). His work also involves reforming instructional methods courses for elementary and secondary science teacher candidates through the constructivist approach. Dr. Wang is skilled in both qualitative and quantitative research methods. His research foci at Texas Tech University include designing and evaluating a scaffolding approach to the knowledge construction of teacher candidates and building models of different kinds (e.g. hierarchical linear model) that connect the variables of educational reforms, teacher knowledge, teacher practice, and student performance.</h5>
                </div>
            </div>
            <div class="col-sm-4" style="display: contents;">
                <div class="speaker"> <img class="thumbnail-circle" src="assets/mock_demo/man-people-pngrepo-com.png" alt="Professor Soo-Young Lee">
                    <h3>Kyle Wipfli</h3>
                    <h4>Graduate Research Assistant</h4>
                    <h5 style="width: 33.333%; display: inline-flex;">Kyle is a graduate student in the College of Arts and Sciences at Texas Tech University working on a PhD in Physics focusing on Physics Education Research. He graduated from the University of Tulsa earning a B.S. in Physics and a B.A. in Chinese Studies in 2018. He is interested in methodologies used in the physics classroom and how it can apply to graduate and upper-level undergraduate courses.</h5>
                </div>
            </div>
            <div class="col-sm-4" hidden>
                <div class="speaker"> <img class="thumbnail-circle" src="assets/mock_demo/man-people-pngrepo-com.png" alt="Professor Soo-Young Lee">
                    <h3>Jianlan Wang</h3>
                    <h4>Co-Principal Investigator</h4> 
                    <h5>Dr. Hart is the Director of the TTU OnRamps program, a dual enrollment initiative that gives high school students the opportunity to earn college credits in STEM courses. The OnRamps program trains teachers to implement inquiry-based instruction, peer instruction, and student-centered learning with college content in a high school classroom. Her background is in behavioral science and teacher education. Dr. Hart specializes in coaching college instructors and K-12 teachers in pedagogy, observational assessment, educational measurement, and data-based instruction. She is a Board Certified Behavior Analyst-Doctoral Level (BCBA-D). She is also on the graduate faculty in the College of Education at Texas Tech and teaches master’s level courses in Applied Behavior Analysis.</h5>
                </div>
            </div>
        </div>`;

      body = sub1 + sub2;

      head = `
        <div id="speakers" class="container-fluid text-center max-width">
          <div class="row">
              <div class="col-sm-12">
                  <h2 class="speakers-text">${section.title}</h2><br></div>
          </div>
          ${body}
      </div>`;

      break;
    case MAP:
      template = "Wednesday";
  }

  return template;
}

function showList() {
  const html = page.map(() => {}).join("");

  content.innerHTML = html;
}

const serachInput = document.querySelector(".search");
// const suggestions = document.querySelector(".suggestions");

const contentPage = document.querySelector(".content");

serachInput.addEventListener("change", displayMatches);
serachInput.addEventListener("keyup", displayMatches);
showList();

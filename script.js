// ============================================
// MA DIGITAL STORE AI STUDIO
// SCRIPT.JS
// Step 14.15
// ============================================


// ============================================
// 1. OPEN DASHBOARD
// ============================================

const startButton = document.getElementById("startBtn");

if (startButton) {
    startButton.addEventListener("click", function () {

        const tools = document.getElementById("tools");

        if (tools) {
            tools.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
}


// ============================================
// 2. OPEN DOMICILE ASSISTANT
// ============================================

function openDomicile() {

    const domicileSection =
        document.getElementById("domicile-tool");

    if (domicileSection) {

        domicileSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ============================================
// 3. OPEN CV GENERATOR
// ============================================

function openCVGenerator() {

    const cvSection =
        document.getElementById("cv-tool");

    if (cvSection) {

        cvSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ============================================
// 4. COMING SOON
// ============================================

function showComingSoon(toolName) {

    alert(
        toolName +
        "\n\nThis tool is under development.\n\n" +
        "MA DIGITAL STORE AI STUDIO"
    );

}


// ============================================
// 5. DOMICILE CHECKLIST
// ============================================

const checkDomicileButton =
    document.getElementById("checkDomicileBtn");


if (checkDomicileButton) {

    checkDomicileButton.addEventListener(
        "click",
        function () {

            const customerName =
                document.getElementById("customerName").value.trim();

            const fatherName =
                document.getElementById("fatherName").value.trim();

            const cnic =
                document.getElementById("cnic").value.trim();

            const district =
                document.getElementById("district").value.trim();

            const tehsil =
                document.getElementById("tehsil").value.trim();

            const ageGroup =
                document.getElementById("ageGroup").value;

            const applicationType =
                document.getElementById("applicationType").value;


            if (
                customerName === "" ||
                fatherName === "" ||
                cnic === "" ||
                district === "" ||
                tehsil === "" ||
                ageGroup === "" ||
                applicationType === ""
            ) {

                alert(
                    "Please complete all required fields first."
                );

                return;

            }


            let checklist = "";


            checklist +=
                "<p><strong>Customer:</strong> " +
                customerName +
                "</p>";


            checklist +=
                "<p><strong>Father / Husband:</strong> " +
                fatherName +
                "</p>";


            checklist +=
                "<p><strong>District:</strong> " +
                district +
                "</p>";


            checklist +=
                "<p><strong>Tehsil:</strong> " +
                tehsil +
                "</p>";


            checklist += "<hr>";


            checklist +=
                "<h4>📋 Basic Document Checklist</h4>";


            checklist += "<ul>";

            checklist +=
                "<li>CNIC / Form-B of applicant</li>";

            checklist +=
                "<li>Father / Mother CNIC where applicable</li>";

            checklist +=
                "<li>Required photographs</li>";

            checklist +=
                "<li>Proof of residence where required</li>";

            checklist +=
                "<li>Relevant supporting documents</li>";

            checklist += "</ul>";


            if (ageGroup === "under18") {

                checklist +=
                    "<p><strong>⚠️ Under 18:</strong> " +
                    "Additional documents may be required. " +
                    "Verify current requirements with the relevant " +
                    "KP office/CFC before submission.</p>";

            }


            if (applicationType === "new") {

                checklist +=
                    "<p><strong>Application:</strong> " +
                    "New Domicile</p>";

            }


            if (applicationType === "correction") {

                checklist +=
                    "<p><strong>Application:</strong> " +
                    "Correction / Change</p>";

            }


            if (applicationType === "duplicate") {

                checklist +=
                    "<p><strong>Application:</strong> " +
                    "Duplicate / Replacement</p>";

            }


            checklist += "<hr>";


            checklist +=
                "<p><strong>⚠️ Important:</strong> " +
                "This checklist is for assistance only. " +
                "Final document requirements, verification and " +
                "approval are determined by the relevant " +
                "Government of Khyber Pakhtunkhwa office.</p>";


            const resultBox =
                document.getElementById("domicileResult");

            const resultContent =
                document.getElementById("resultContent");


            if (resultContent) {
                resultContent.innerHTML = checklist;
            }


            if (resultBox) {

                resultBox.style.display = "block";

                resultBox.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


// ============================================
// 6. COPY DOMICILE CHECKLIST
// ============================================

const copyChecklistButton =
    document.getElementById("copyChecklistBtn");


if (copyChecklistButton) {

    copyChecklistButton.addEventListener(
        "click",
        async function () {

            const resultContent =
                document.getElementById("resultContent");

            if (!resultContent) {
                return;
            }

            const text =
                resultContent.innerText;


            try {

                await navigator.clipboard.writeText(text);

                alert(
                    "✅ Checklist copied successfully!"
                );

            } catch (error) {

                alert(
                    "Copy failed. Please copy the checklist manually."
                );

            }

        }
    );

}


// ============================================
// 7. CV GENERATOR
// ============================================

const generateCVButton =
    document.getElementById("generateCVBtn");


if (generateCVButton) {

    generateCVButton.addEventListener(
        "click",
        function () {

            const name =
                document.getElementById("cvName").value.trim();

            const father =
                document.getElementById("cvFather").value.trim();

            const phone =
                document.getElementById("cvPhone").value.trim();

            const email =
                document.getElementById("cvEmail").value.trim();

            const address =
                document.getElementById("cvAddress").value.trim();

            const summary =
                document.getElementById("cvSummary").value.trim();

            const education =
                document.getElementById("cvEducation").value.trim();

            const experience =
                document.getElementById("cvExperience").value.trim();

            const skills =
                document.getElementById("cvSkills").value.trim();


            // ========================================
            // REQUIRED FIELD CHECK
            // ========================================

            if (
                name === "" ||
                phone === "" ||
                summary === "" ||
                education === "" ||
                experience === "" ||
                skills === ""
            ) {

                alert(
                    "Please complete Name, Phone, Summary, Education, Experience and Skills."
                );

                return;

            }


            // ========================================
            // PREPARE MULTI-LINE TEXT
            // ========================================

            const educationHTML =
                education
                    .split("\n")
                    .filter(line => line.trim() !== "")
                    .map(line =>
                        "<p>" +
                        escapeHTML(line.trim()) +
                        "</p>"
                    )
                    .join("");


            const experienceHTML =
                experience
                    .split("\n")
                    .filter(line => line.trim() !== "")
                    .map(line =>
                        "<p>" +
                        escapeHTML(line.trim()) +
                        "</p>"
                    )
                    .join("");


            const skillsHTML =
                skills
                    .split("\n")
                    .filter(line => line.trim() !== "")
                    .map(line =>
                        "<p>" +
                        escapeHTML(line.trim()) +
                        "</p>"
                    )
                    .join("");


            // ========================================
            // CV HTML
            // ========================================

            let cvHTML = "";


            cvHTML +=
                '<div class="cv-preview-name">' +
                escapeHTML(name) +
                "</div>";


            cvHTML +=
                '<div class="cv-preview-contact">';


            if (father !== "") {

                cvHTML +=
                    "Father: " +
                    escapeHTML(father) +
                    " | ";

            }


            cvHTML +=
                "Phone: " +
                escapeHTML(phone);


            if (email !== "") {

                cvHTML +=
                    " | Email: " +
                    escapeHTML(email);

            }


            if (address !== "") {

                cvHTML +=
                    "<br>Address: " +
                    escapeHTML(address);

            }


            cvHTML +=
                "</div>";


            // ========================================
            // SUMMARY
            // ========================================

            cvHTML +=
                '<div class="cv-preview-section">' +
                "<h4>PROFESSIONAL SUMMARY</h4>" +
                "<p>" +
                escapeHTML(summary) +
                "</p>" +
                "</div>";


            // ========================================
            // EDUCATION
            // ========================================

            cvHTML +=
                '<div class="cv-preview-section">' +
                "<h4>EDUCATION</h4>" +
                educationHTML +
                "</div>";


            // ========================================
            // EXPERIENCE
            // ========================================

            cvHTML +=
                '<div class="cv-preview-section">' +
                "<h4>WORK EXPERIENCE</h4>" +
                experienceHTML +
                "</div>";


            // ========================================
            // SKILLS
            // ========================================

            cvHTML +=
                '<div class="cv-preview-section">' +
                "<h4>SKILLS</h4>" +
                skillsHTML +
                "</div>";


            // ========================================
            // SHOW CV
            // ========================================

            const cvResult =
                document.getElementById("cvResult");

            const cvContent =
                document.getElementById("cvContent");


            if (cvContent) {

                cvContent.innerHTML = cvHTML;

            }


            if (cvResult) {

                cvResult.style.display = "block";

                cvResult.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


// ============================================
// 8. HTML SECURITY HELPER
// ============================================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


// ============================================
// 9. COPY CV
// ============================================

const copyCVButton =
    document.getElementById("copyCVBtn");


if (copyCVButton) {

    copyCVButton.addEventListener(
        "click",
        async function () {

            const cvContent =
                document.getElementById("cvContent");

            if (!cvContent) {
                return;
            }


            const text =
                cvContent.innerText;


            try {

                await navigator.clipboard.writeText(text);

                alert(
                    "✅ CV copied successfully!"
                );

            } catch (error) {

                alert(
                    "Copy failed. Please copy the CV manually."
                );

            }

        }
    );

}


// ============================================
// 10. PRINT CV
// ============================================

const printCVButton =
    document.getElementById("printCVBtn");


if (printCVButton) {

    printCVButton.addEventListener(
        "click",
        function () {

            document.body.classList.add(
                "cv-printing"
            );


            window.print();

        }
    );

}


// ============================================
// 11. REMOVE PRINT MODE
// ============================================

window.addEventListener(
    "afterprint",
    function () {

        document.body.classList.remove(
            "cv-printing"
        );

    }
);

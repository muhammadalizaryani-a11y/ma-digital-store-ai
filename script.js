// ============================================
// MA DIGITAL STORE AI STUDIO
// SCRIPT.JS
// Step 14.8 - Domicile Assistant
// ============================================


// ============================================
// 1. OPEN DASHBOARD
// ============================================

const startButton = document.getElementById("startBtn");

if (startButton) {

    startButton.addEventListener("click", function () {

        document.getElementById("tools").scrollIntoView({
            behavior: "smooth"
        });

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
// 3. COMING SOON MESSAGE
// ============================================

function showComingSoon(toolName) {

    alert(
        toolName +
        "\n\nThis tool is under development.\n\n" +
        "MA DIGITAL STORE AI STUDIO"
    );

}


// ============================================
// 4. DOMICILE CHECKLIST
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


            // -----------------------------
            // CHECK REQUIRED INFORMATION
            // -----------------------------

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


            // -----------------------------
            // BASIC CHECKLIST
            // -----------------------------

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


            checklist +=
                "<hr>";


            checklist +=
                "<h4>📋 Basic Document Checklist</h4>";


            checklist +=
                "<ul>";

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

            checklist +=
                "</ul>";


            // -----------------------------
            // UNDER 18
            // -----------------------------

            if (ageGroup === "under18") {

                checklist +=
                    "<p><strong>⚠️ Under 18:</strong> " +
                    "Additional documents may be required. " +
                    "Verify current requirements with the relevant " +
                    "KP office/CFC before submission.</p>";

            }


            // -----------------------------
            // APPLICATION TYPE
            // -----------------------------

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


            // -----------------------------
            // IMPORTANT NOTICE
            // -----------------------------

            checklist +=
                "<hr>";

            checklist +=
                "<p><strong>⚠️ Important:</strong> " +
                "This checklist is for assistance only. " +
                "Final document requirements, verification and " +
                "approval are determined by the relevant " +
                "Government of Khyber Pakhtunkhwa office.</p>";


            // -----------------------------
            // SHOW RESULT
            // -----------------------------

            const resultBox =
                document.getElementById("domicileResult");

            const resultContent =
                document.getElementById("resultContent");


            resultContent.innerHTML = checklist;

            resultBox.style.display = "block";


            // Scroll to result

            resultBox.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

}


// ============================================
// 5. COPY CHECKLIST
// ============================================

const copyChecklistButton =
    document.getElementById("copyChecklistBtn");


if (copyChecklistButton) {

    copyChecklistButton.addEventListener(
        "click",
        async function () {

            const resultContent =
                document.getElementById("resultContent");

            const text =
                resultContent.innerText;


            try {

                await navigator.clipboard.writeText(text);

                alert(
                    "✅ Checklist copied successfully!"
                );

            }

            catch (error) {

                alert(
                    "Copy failed. Please copy the checklist manually."
                );

            }

        }
    );

}

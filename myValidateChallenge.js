/**
 * function for validate form require
 * dev Somchai O00085
 * @param {*} objItemInput 
 */
function validateForm(objItemInput) {
    var counter = 0; // is variable for check validation true all

    Object.keys(objItemInput).forEach(function(item) {
        // refresh name form tag alert span
        var spnAlertName = objItemInput[item].id.charAt(0).toUpperCase() + objItemInput[item].id.slice(1);
        defaultTagSpan(spnAlertName);

        if (objItemInput[item].tagName === "INPUT") {

            if (objItemInput[item].value.length < 20 || objItemInput[item].value.length > 50) {
                document.getElementById("spnAlertTxtFullname").innerHTML = "ระบุตัวอักษรระหว่าง 20-50 ตัวอักษร";
                document.getElementById("spnAlertTxtFullname").style.color = "red";
            } else {
                counter++;
            }

        } else if (objItemInput[item].tagName === "TEXTAREA") {

            if (objItemInput[item].value.length < 50 || objItemInput[item].value.length > 100) {
                document.getElementById("spnAlertTxtAddress").innerHTML = "ระบุตัวอักษรระหว่าง 50-100 ตัวอักษร";
                document.getElementById("spnAlertTxtAddress").style.color = "red";
            } else {
                counter++;
            }

        }
    });

    if (counter >= Object.keys(objItemInput).length) {
        return isValid = true;
    } else {
        return isValid = false;
    }
}

/**
 * function validate for input on table require
 * @param {*} objItemInput 
 */
function validateFormInTable(objItemInput) {
    var counter = 0; // is variable for check validation true all

    Object.keys(objItemInput).forEach(function(item) {
        if (objItemInput[item].tagName === "INPUT") {

            if (objItemInput[item].value.length < 20 || objItemInput[item].value.length > 50) {
                alert("[ชื่อ-นามสกุล] : ระบุตัวอักษรระหว่าง 20-50 ตัวอักษร");
            } else {
                counter++;
            }

        } else if (objItemInput[item].tagName === "TEXTAREA") {

            if (objItemInput[item].value.length < 50 || objItemInput[item].value.length > 100) {
                alert("[ที่อยู่] : ระบุตัวอักษรระหว่าง 50-100 ตัวอักษร");
            } else {
                counter++;
            }
            
        }
    });

    if (counter >= Object.keys(objItemInput).length) {
        return isValid = true;
    } else {
        return isValid = false;
    }
}
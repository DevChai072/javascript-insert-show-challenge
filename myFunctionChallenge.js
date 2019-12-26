
// create array db master
var dbMaster = [];

/**
 * function prepare data from text input
 * dev Somchai O00085
 */
function prepareDataInput() {
    // get data input
    var objItemInput = {};

    // put data to object
    objItemInput = {
        'inputFullname': document.getElementById("txtFullname"),
        'inputAddress': document.getElementById("txtAddress")
    }

    return objItemInput;
}

function prepareDataInputOnTbl(dataId) {
    // get data input
    var objItemInput = {};

    // put data to object
    objItemInput = {
        'inputFullname': document.getElementById("txtFullnameTbl" + dataId),
        'inputAddress': document.getElementById("txtAddressTbl" + dataId)
    }

    return objItemInput;
}

/**
 * function save to array dbMaster
 * dev Somchai O00085
 * @param {*} objItemInput
 * @requires {2} inputFullname, inputAddress
 */
function saveToDbMaster(objItemInput) {
    var sumDbMaster = dbMaster.length; // count data in array
    sumDbMaster++; // add value for put in id

    // add value to dbMaster
    dbMaster.push(
        { id: sumDbMaster, fullname: objItemInput.inputFullname.value, address: objItemInput.inputAddress.value }
    );

    var dataId = sumDbMaster; // for use in row table
    var findIndex = sumDbMaster - 1; // for use find in array dbMaster

    addDataOnTableBasic(dataId, findIndex) // for find index in dbMaster

    // reset form input
    resetForm();
}

/**
 * function for create data in table basic
 * dev Somchai O00085
 * @param {*} dataId
 * @param {*} findIndex
 */
function addDataOnTableBasic(dataId, findIndex) {
    // create row on table
    var table = getTableName("tableBasic");

    // insert new tr
    var row = table.insertRow(dataId);

    // insert to cell
    let cellId = row.insertCell(0);
    let cellFullname = row.insertCell(1);
    let cellAddress = row.insertCell(2);
    let cellAction = row.insertCell(3);

    // create button edit on table
    var btnEdit = document.createElement("a");
    btnEdit.href = "#";
    btnEdit.id = "btnEdit" + dbMaster[findIndex].id;
    btnEdit.className = "btnEditOnTbl";
    btnEdit.setAttribute("onclick", "editInForm('"+ findIndex +"', '"+ dataId +"')");
    cellId.innerHTML = dbMaster[findIndex].id + ".";
    cellFullname.innerHTML = dbMaster[findIndex].fullname;
    cellAddress.innerHTML = dbMaster[findIndex].address;
    cellAction.appendChild(btnEdit);
    cellAction.style.textAlign = "center"; // adding style align
    btnEdit.innerHTML = "Edit";
}

/**
 * function get table name
 * dev Somchai O00085
 * @param {*} tbName
 */
function getTableName(tbName) {
    return document.getElementById(tbName);
}

/**
 * function reset form
 * dev Somchai O00085
 */
function resetForm() {
    document.getElementById("txtFullname").value = "";
    document.getElementById("txtAddress").value = "";
    return isValid = false;
}

/**
 * function for edit data in form
 * @param {*} dataId
 * @requires {3} dbMaster => id, dbMaster => fullname, dbMaster => address
 */
function editInForm(findIndex, dataId) {
    // hide button submit form
    document.getElementById("btnEdit" + dataId).style.display = "none";

    // get data from array dbMaster
    var getId = dbMaster[findIndex].id;
    var getFullname = dbMaster[findIndex].fullname;
    var getAddress = dbMaster[findIndex].address;

    // create element input on table
    var txtFullnameTbl = document.createElement("input");
    txtFullnameTbl.id = "txtFullnameTbl" + getId;
    txtFullnameTbl.className = "txtWidthTable";
    var txtAddressTbl = document.createElement("textarea");
    txtAddressTbl.id = "txtAddressTbl" + getId;
    txtAddressTbl.className = "txtWidthTable";
    txtAddressTbl.rows = "5";
    var table = getTableName("tableBasic");

    // create button for save
    var btnSaveOnTbl = document.createElement("a");
    btnSaveOnTbl.href = "#";
    btnSaveOnTbl.id = "btnSave" + getId;
    btnSaveOnTbl.className = "btnSaveOnTbl";
    btnSaveOnTbl.setAttribute("onclick", "btnSave('"+ findIndex +"', '"+ dataId +"')");
    btnSaveOnTbl.innerHTML = "Save";

    // create button for cancel
    var btnCancelOnTbl = document.createElement("a");
    btnCancelOnTbl.href = "#";
    btnCancelOnTbl.id = "btnCancel" + getId;
    btnCancelOnTbl.className = "btnCancelOnTbl";
    btnCancelOnTbl.setAttribute("onclick", "btnCancel('"+ getId +"', '"+ getFullname +"', '"+ getAddress +"')");
    btnCancelOnTbl.innerHTML = "Cancel";

    // remove text in cell
    table.rows[getId].cells[1].innerHTML = "";
    table.rows[getId].cells[2].innerHTML = "";

    // appendChild text input on table
    table.rows[getId].cells[1].appendChild(txtFullnameTbl);
    table.rows[getId].cells[2].appendChild(txtAddressTbl);
    table.rows[getId].cells[3].appendChild(btnSaveOnTbl);
    table.rows[getId].cells[3].appendChild(btnCancelOnTbl);

    // put data to text input
    document.getElementById("txtFullnameTbl" + getId).value = getFullname;
    document.getElementById("txtAddressTbl" + getId).value = getAddress;
}

/**
 * function for update data to dbMaster
 * dev Somchai O00085
 * @param {*} findIndex
 * @param {*} dataId
 * @param {*} objItemInput
 */
function editToDbMaster(findIndex, dataId, objItemInput) {
    // find data in dbMaster and update data
    dbMaster[findIndex].fullname = objItemInput["inputFullname"].value;
    dbMaster[findIndex].address = objItemInput["inputAddress"].value;

    // get table
    var table = getTableName("tableBasic");

    // put data
    var rowId = dbMaster[findIndex].id;
    var dataFullname = dbMaster[findIndex].fullname;
    var dataAddress = dbMaster[findIndex].address;

    // remove button save and cancel
    var btnSave = document.getElementById("btnSave" + dataId);
    var btnCancel = document.getElementById("btnCancel" + dataId);
    btnSave.parentNode.removeChild(btnSave);
    btnCancel.parentNode.removeChild(btnCancel);

    // edit in table
    table.rows[dataId].cells[1].innerHTML = dataFullname;
    table.rows[dataId].cells[2].innerHTML = dataAddress;

    document.getElementById("btnEdit" + dataId).style.display = "block"; // hide button edit in form table
}

/**
 * fucntion set defualt tag span
 * dev Somchai O00085
 * @param {*} tagName
 */
function defaultTagSpan(tagName) {
    document.getElementById("spnAlert" + tagName).innerHTML = "";
    document.getElementById("spnAlert" + tagName).style.color = "";
}

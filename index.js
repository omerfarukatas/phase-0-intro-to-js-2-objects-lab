const employee = {
    name: "Omer",
    street: "Gulyali",
}

function updateEmployeeWithKeyAndValue(object, key, value){
    const newObj = {...object};
    newObj[key] = value;
    return newObj;
}

// YUKARIDAKININ UYGULANISI VE SONUCU:
//      const newObj = updateEmployeeWithKeyAndValue(employee, "name", "Faruk")
//      console.log(newObj);
//      => { name: 'Faruk', street: 'Gulyali' }

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object, key){
    const newObj = {...object};
    delete newObj[key];
    return newObj;
}




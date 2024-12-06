function loadModule(path) {
    const fs = require('fs');
    // This function is used to load the module
    if(!path.endsWith('.js')) path += '.js'
    const fileContext = fs.readFileSync(path).toString();

    // This function is used to execute the module
    return (function wrapperFunction (send){
        eval(fileContext)
        return send;
    })({});
}

module.exports = loadModule;
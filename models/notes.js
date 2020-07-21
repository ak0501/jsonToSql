// jshint esversion:6

const orm = require("../config/orm.js");

class Cat {
    selectAll() {
        return orm.selectAll("notes")
    }
    create(columns, values) {
        return orm.create("notes", columns, values)
    }
    update(objColVals, condition) {
        return orm.update("notes", objColVals, condition)
    }
    // TODO: create a remove method that references orm.delete

};

module.exports = new Cat();
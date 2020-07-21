// jshint esversion:6

const connection = require('./connection.js');

// ORM classes for all our SQL statement functions
class ORM {
    constructor(connection) {
        this.connection = connection;
    }

    printQuestionMarks(numberofValues) {
        const questionMarks = [];

        for (var i = 0; i < numberofValues; i++) {
            questionMarks.push("?");
        }
        return questionMarks.join(', ');
    }

    selectAll(table){
        const queryString = 'SELECT * FROM  ??';
        console.table(table);
        return this.connection.query(queryString, [table]);
        
     }
      

    // query to create a table 
    create(table, columns, value ) {
        // insert into notes (id,title,text) values (1,hello,world)
        const queryString = `Insert into ?? (${columns
            .join(',')})VALUES(${this.printQuestionMarks(Text.length)})`;
        console.log(queryString);
        return this.connection.query(queryString, [table, ...value]);
    }

    // update(table, objColVals, id) {
    //     var queryString = `UPDATE ?? SET ? WHERE ?`;
    
    //     console.log(queryString);
    
    //     return this.connection.query(queryString, [table, objColVals, id])
    //   }

      delete(table, cols, value){
        const queryString = 'DELETE FROM ?? WHERE ??=?.?';
        console.log(queryString);
        return this.connection.query(queryString, [table, cols, value])
      }

}

module.exports=new ORM(connection);
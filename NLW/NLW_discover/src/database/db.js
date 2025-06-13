const { Database } = require("sqlite3")

const path = require("path");
const dbPath = path.join(__dirname, 'database.db');
const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database(dbPath);
module.exports = db

// db.serialize(()=>{
// //     db.run(`
// //         CREATE TABLE IF NOT EXISTS places (
// //             id INTEGER PRIMARY KEY AUTOINCREMENT,
// //             image TEXT,
// //             name TEXT,
// //             address TEXT,
// //             address2 TEXT,
// //             state TEXT,
// //             city TEXT,
// //             items TEXT
       
// //         );
// //    `)

// //    const query = 
// //     `
// //         INSERT INTO places(
// //             image,
// //             name,
// //             address,
// //             address2,
// //             state,
// //             city,
// //             items
// //         ) VALUES(?,?,?,?,?,?,?);
// //     `
// //     const values = 
// //         [
// //             "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //             "PaperSider",
// //             "Guilherme Gemballa, Jardim América",
// //             "Número 260",
// //             "Santa Catarina",
// //             "Rio do Sul",
// //             "Resíduos Eletrônicos, Lâmpadas"
// //         ]

// //         function afterInsertData(err){
// //             if(err){
// //                 return console.log(err)
// //             }
    
// //             console.log("Cadastrado com sucesso!")
// //             console.log(this)
// //         }
    
// //         db.run(query, values, afterInsertData)

//         //db.all(`SELECT * FROM places`, function(err,rows){
//         //    if(err){
//          //       return console.log(err)
//          //   }
//         //
//         //    console.log("Aqui estão seus registros: ")
//         //    console.log(rows)
//         //})

//         //db.run(`DELETE FROM places WHERE id IN(?,?)`, [1,2], function(err){
//         //    if(err){
//         //        return console.log(err)
//         //    }
//         //    console.log("Registros deletados com sucesso")
//         //})



// })
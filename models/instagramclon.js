const db = require("../config/database")

module.exports = class Instagramclon {
    constructor(title,image,description,likes){
    this.title = title,
    this.image = image,
    this.description = description,
    this.likes = likes

    }
    static getAll(){
        return db.execute("SELECT * FROM instagramclon")
    }

    static getById(id){
        return db.execute(`SELECT * FROM instagramclon WHERE instagramclon.id = ${id}`)
    }

    create(){
        return db.execute(`INSERT INTO instagramclon (title, image, description, likes) VALUES ('${this.title}','${this.image}','${this.description}','${this.likes}')`)
    }
    update(id){
        return db.execute(`UPDATE instagramclon SET instagramclon.title = '${this.title}', instagramclon.image = '${this.image}', instagramclon.description = '${this.description}', instagramclon.likes = '${this.likes}' WHERE instagram.id = ${id}`)
    }
    static delete(id){
        return db.execute(`DELETE FROM instagramclon WHERE instagramclon.id = ${id}`)
    }
}

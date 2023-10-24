const db = require("../config/database");

module.exports = class Instagramclon {
  constructor(title, image, description, likes) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.likes = likes;
  }
  static getAll() {
    return db.execute("SELECT * FROM instagramclon");
  }

  static getById(id) {
    return db.execute(
      `SELECT * FROM instagramclon WHERE instagramclon.id = ${id}`
    );
  }

  create() {
    return db.execute(
      `INSERT INTO instagramclon (title, image, description, likes) VALUES ('${this.title}','${this.image}','${this.description}','${this.likes}')`
    );
  }
  update(id) {
    return db.execute(
      `UPDATE instagramclon SET title = '${this.title}', image = '${this.image}', description = '${this.description}',' WHERE id = ${id}`
    );
  }
  static delete(id) {
    return db.execute(
      `DELETE FROM instagramclon WHERE instagramclon.id = ${id}`
    );
  }
  static updateLikes(id, likes) {
    return db.execute(`UPDATE instagramclon SET likes = '${likes}' WHERE instagramclon.id = ${id}`);
  }
  static updateAllFields(id, title, image, description, likes) {
    if (isNaN(likes)) {
      return Promise.reject(new Error('Likes debe ser un número válido'));
    }

    return db.execute("UPDATE instagramclon SET title = ?, image = ?, description = ?, likes = ? WHERE id = ?", [title, image, description, likes, id]);
  }
}
;

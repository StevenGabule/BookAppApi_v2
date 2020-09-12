import db from "../src/models";

class BookService {
  static async getAllBooks() {
    try {
      return await db.Book.findAll({ include: db.User });
    } catch (e) {
      throw e;
    }
  }

  static async addBook(newBook) {
    try {
      return await db.Book.create(newBook);
    } catch (e) {
      throw e;
    }
  }

  static async updateBook(id, updateBook) {
    try {
      const bookToUpdate = await db.Book.findOne({
        where: { id: Number(id) },
      });
      if (bookToUpdate) {
        await db.Book.update(updateBook, { where: { id: Number(id) } });
        return updateBook;
      }
      return null;
    } catch (e) {
      throw e;
    }
  }

  static async getABook(id) {
    try {
      return await db.Book.findOne({
        where: { id: Number(id) },
      });
    } catch (e) {
      throw e;
    }
  }
  static async deleteBook(id) {
    try {
      const bookToDelete = await db.Book.findOne({
        where: { id: Number(id) },
      });
      if (bookToDelete) {
        return await db.Book.destroy({
          where: { id: Number(id) },
        });
      }
      return null;
    } catch (e) {
      throw e;
    }
  }
}

export default BookService;

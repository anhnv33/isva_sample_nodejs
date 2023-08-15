class User {
    static async getAll() {
      // Simulate fetching users from a database
      return [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ];
    }
  }
  
  module.exports = User;
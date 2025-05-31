import historyService from './historyService';

class UserService {
  constructor() {
    const data = localStorage.getItem('db');
    if (data === null) {
      this.db = { users: [] };
      localStorage.setItem('db', JSON.stringify(this.db));
    } else {
      this.db = JSON.parse(data);
    }
  }

  addUser(email, password) {
    if (this.isExists(email)) {
      throw new Error('User Already Exists');
    }
    this.db.users.push({ email, password });
    localStorage.setItem('db', JSON.stringify(this.db));
  }

  isExists(email) {
    return this.db.users.some(user => user.email === email);
  }

  authenticate(email, password) {
    const user = this.db.users.find(user => user.email === email);
    if (!user) throw new Error('User Not Found');
    if (user.password !== password) throw new Error('Invalid Password');

    const today = new Date().toISOString().split('T')[0];
    historyService.addLoginEntry(today);

    return true;
  }
}

const userService = new UserService();
export default userService;

class UserService{
    constructor() {
		let data = localStorage.getItem('db');
		if (data === null) {
			data = {
				users: [],
			};
			localStorage.setItem('db', JSON.stringify(data));
			this.db = data;
		} else{
			this.db = JSON.parse(data);
		}
	}
    addUser(email,password){
        if(this.isExists(email)){
            throw new Error('User Already Exists');
        }else{
            this.db.users.push({email,password});
            localStorage.removeItem('db');
            localStorage.setItem('db',JSON.stringify(this.db));
        }
    }
    isExists(email){
        const result = this.db.users.find((user) => user.email === email);
        return result !== undefined ? true : false;
    }
    authenticate(email, password){
        const result = this.db.users.find((user) => user.email === email);

        if (!result) {
            throw new Error('User Not Found');
        }
        if (result.password !== password) {
            throw new Error('Invalid Password');
        }
    }
}
const userService = new UserService();
export default userService;
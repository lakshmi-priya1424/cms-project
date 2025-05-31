class StorageService {
	constructor(key = 'storageDb') {
		this.key = key;
		let data = localStorage.getItem(this.key);
		if (data === null) {
			data = {};
			localStorage.setItem(this.key, JSON.stringify(data));
			this.db = data;
		} else {
			this.db = JSON.parse(data);
		}
	}

	getAll() {
		return { ...this.db };
	}

	getItem(itemKey) {
		return this.db[itemKey];
	}

	
	setItem(itemKey, value) {
		this.db[itemKey] = value;
		this._save();
	}


	removeItem(itemKey) {
		delete this.db[itemKey];
		this._save();
	}


	clear() {
		this.db = {};
		this._save();
	}

	hasItem(itemKey) {
		return Object.prototype.hasOwnProperty.call(this.db, itemKey);
	}

	// Internal method to persist to localStorage
	_save() {
		localStorage.setItem(this.key, JSON.stringify(this.db));
	}
}

const storageService = new StorageService();
export default storageService;
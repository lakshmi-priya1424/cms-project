
class HistoryService {
  constructor() {
    this.HISTORY_KEY = 'loginHistory';
  }

  getAllHistory() {
    return JSON.parse(localStorage.getItem(this.HISTORY_KEY)) || [];
  }

  addLoginEntry(date) {
    const current = JSON.parse(localStorage.getItem(this.HISTORY_KEY)) || [];
    const updated = [...current];

    const existing = updated.find(entry => entry.date === date);
    if (existing) {
      existing.count += 1;
    } else {
      updated.push({ date, count: 1 });
    }

    localStorage.setItem(this.HISTORY_KEY, JSON.stringify(updated));
  }

  clearHistory() {
    localStorage.removeItem(this.HISTORY_KEY);
  }
}

const historyService = new HistoryService();
export default historyService;

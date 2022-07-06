export class ActivityService {
	activeUsers = ['Max', 'Anna'];
	inactiveUsers = ['Chris', 'Manu'];

	setActive(id: number) {
		this.activeUsers.push(this.inactiveUsers[id]);
		this.inactiveUsers.splice(id, 1);
	}
	setInactive(id: number) {
		this.inactiveUsers.push(this.activeUsers[id]);
		this.activeUsers.splice(id, 1);
	}
}
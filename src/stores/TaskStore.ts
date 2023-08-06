import { defineStore } from 'pinia'

interface Task {
  id: number,
  title: string,
  isDone: boolean,
  isFav: boolean,
}

export const useTaskStore = defineStore("taskStore", {
	state: () => ({ 
		tasks: <Task[]>[]
	}),
	getters: {
		favTask: (state) => {
			return state.tasks.filter(task => task.isFav)
		},
		favCount: (state) => {
			return state.tasks.reduce((p: number, task: Task) => {
				return task.isFav && !task.isDone ? p + 1 : p
			}, 0)
		},
		totalCount: (state) => {
			return state.tasks.filter(task => !task.isDone).length;
		}
	},
	actions: {
		addTask(task: Task) {
			this.tasks.push(task);
		},
		deleteTask(id: number) {
			this.tasks = this.tasks.filter(task => {
				return task.id !== id;
			})
		},
		checkTask(id: number) {
			const task = this.tasks.find(task => task.id === id);
			task.isDone = !task.isDone
		},
		toggleFav(id: number) {
			const task = this.tasks.find(task => task.id === id);
			task.isFav = !task.isFav
		}
	},
	persist: true,
})
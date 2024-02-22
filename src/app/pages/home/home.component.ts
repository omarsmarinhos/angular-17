import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear Proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: false
    },
  ]);

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required
    ]
  });

  changeHandler() {
    if (this.newTaskCtrl.valid) {
      const value = this.newTaskCtrl.value.trim();
      if (value !== '') {
        this.addTask(value);
        this.newTaskCtrl.setValue('');
      }
    }
  }

  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title: title,
      completed: false
    }
    this.tasks.update((tasks) => [...tasks, newTask]);

  }

  deleteTask(i: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => i !== position));
  }

  updateTask(i: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === i) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      });
    });
  }
}

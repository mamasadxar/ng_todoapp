import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
	tasks:any[] = [];
	helpMe:any[] = [];
	objCount:number = 0;
	current:string = '';

	gamotana(task:any) {
		this.tasks.push(task);
		this.helpMe.push({name: `item ${this.objCount}`, visibility: false})
	}
	delete(index:any) {
		this.tasks.splice(index, 1);
		this.helpMe.splice(index, 1);
	}
	edit(index:any) {
		this.helpMe[index].visibility = true;
	}
	submit(index:any) {
		this.helpMe[index].visibility = false;
		this.tasks[index] = this.current;
		console.log(this.tasks);
		this.current = '';
	}
}

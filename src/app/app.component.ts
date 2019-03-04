import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
  	{
  		title : 'Post 1',
  		content : 'Welcome on my blog'
  	},
  	{
  		title : 'Post 2',
  		content : 'Let\'s know each other'
  	},
  	{
  		title : 'Post 3',
  		content : 'Travel with me'
  	}
  ]
}

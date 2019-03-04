export class Post {
	title : string;
	content : string;
	loveIts : number;
	created_at : Date;

	constructor(newTitle: string, newContent: string){
		this.title = newTitle;
		this.content = newContent;
		this.loveIts = 0;
		this.created_at = new Date();
	}
}
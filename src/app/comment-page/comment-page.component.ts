import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent 
{

  card: any;
  comments: any[] = [];
  
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.card = history.state.card;
  }

  addComment(commentInput: HTMLInputElement) {
    const comment = commentInput.value;
    this.comments.push(comment);
    commentInput.value = '';
  }

  deleteComment(comment: string): void {
    const index = this.comments.indexOf(comment);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }

   //partie boutton 
  
   toggle = true;
status = 'Enable'; 

enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
}

editingEnabled = false;
isDisabled = true;

toggleDisabled() {
  this.isDisabled = !this.isDisabled;
}
  
  
  

  
        
    
  
   
   

   
  
  



  

}

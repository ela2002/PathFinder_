import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent {
  searchText:any;
cards=
[
  {id:1,training:"Design Graphique",center:"CNFD",love:'../../assets/image/heart.png',image:"../../assets/image/design.jpg",star1:"../../assets/image/Star 13.png",stra2:"../../assets/image/Star 12.png",description:"Graphic design is a profession, academic  discipline and applied art whose activity  consists in projecting",prix:"300dt",location:"sousse",category:"Technical"},
  {id:2,training:"English",center:"streetEng", love:'../../assets/image/heart.png',image:"../../assets/image/englais.png",star1:"../../assets/image/Star 13.png",stra2:"../../assets/image/Star 12.png",description:"Having good English communication skills is necessary across many industries and job roles.  The ability to express yourself clearly and confidently",prix:"400dt",location:"ben arous",category:"language"},
  {id:3,training:"Front-End",center:"Go myCode", love:'../../assets/image/heart.png',image:"../../assets/image/GOO.png",star1:"../../assets/image/Star 13.png",stra2:"../../assets/image/Star 12.png",description:"Front-end web development is the development of the  user interface of a website, through the use of HTML, CSS, and JavaScript, ",prix:"700dt",location:"tunis",category:"Technical"},
  {id:4,training:"Digital-Marketing",center:"we learn",love:'../../assets/image/heart.png',image:"../../assets/image/GOO.png",star1:"../../assets/image/Star 13.png",stra2:"../../assets/image/Star 12.png",description:"Digital marketing is the component of marketing that uses the Internet and online based digital technologies such as desktop computers, mobile phones and others .",prix:"800dt",location:"sousse",category:"Technical"},
  {id:5,training:"Adobe",center:"RBK",love:'../../assets/image/heart.png',image:"../../assets/image/GOO.png",star1:"../../assets/image/Star 13.png",stra2:"../../assets/image/Star 12.png",description:"Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. ",prix:"800dt",location:"ariana",category:"Technical"},
  {id:6,training:"ui-ux",center:"RBK",love:'../../assets/image/heart.png',image:"../../assets/image/GOO.png",star1:"../../assets/image/Star 13.png",stra2:"../../assets/image/Star 12.png",description:"User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances ",prix:"1500dt",location:"tunis",category:"Technical"}
];
 
heart(card:any) {
  if (card.love === '../../assets/image/heart.png') {
    card.love = '../../assets/image/Vector (7).png';
  } else {
    card.love = '../../assets/image/heart.png';
  }
}



constructor(private router: Router) {}
showDetails(card: any) {
  this.router.navigate(['/card-details', card.id], { state: { card: card } });
}
   
 filterCourses(courses: any[], budget?: string, location?: string, category?: string, stars?: string): any[] {
  return courses.filter((course: any) => {
    if (budget && course.budget.toString() !== budget) {
      return false;
    }
    if (location && course.location !== location) {
      return false;
    }
    if (category && course.category !== category) {
      return false;
    }
    if (stars && course.stars.toString() !== stars) {
      return false;
    }
    return true;
  });
}





}

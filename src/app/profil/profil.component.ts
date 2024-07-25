import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  editingEnabled = false;
  isDisabled = true;
  
  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
  

 
  onChangeProfilePicture(event: Event): void {
    console.log('onChangeProfilePicture called');
    const input = event.target as HTMLInputElement;
    const img = document.getElementById('imgedit') as HTMLImageElement;
    const reader = new FileReader();
    reader.onload = () => {
      img.src = reader.result as string;
    }
    if (input.files && input.files[0]) {
      reader.readAsDataURL(input.files[0]);
    }
  }

}

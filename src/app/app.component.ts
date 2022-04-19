
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tconv = new FormGroup({
    celcius : new FormControl(),
    result : new FormControl()
  });
      onFormSubmit(value:string)
      {
         if(this.tconv.get('celcius')?.value==='Celcius')
         {
            this.convertToFarenheit(value);
         }
         else
         {
           this.convertToCelcius(value);
         }
      }
  convertToFarenheit(value: string) {
    const fah = ((parseInt(value) - 32)*5)/9;
     this.tconv.get('result')?.setValue(fah);
     console.warn(fah);
  }
  convertToCelcius(value:string)
   {
     const cel = (parseInt(value) * 9)/5 + 32;
     this.tconv.get('result')?.setValue(cel);
     console.warn(cel);
   }
  
}
  



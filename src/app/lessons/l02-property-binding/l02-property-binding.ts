import { Component } from '@angular/core';

@Component({
  selector: 'app-l02-property-binding',
  imports: [],
  templateUrl: './l02-property-binding.html',
  styleUrl: './l02-property-binding.css',
})
export class PropertyBindingLesson {
  
  isDisabled = true;
  btnName="Dinuka";

  imgUrl = "https://picsum.photos/200/300";
  imgAltValue = "A Random Img"

  textToShow = "Hello World";

  //below var wil be used to show the diff between interpolation
  imgUrlFromInterpolation = "https://picsum.photos/200";

}


//property binding seems as same as interpolation but when inspected in devtoolswe can see the actual DOM element has the property
//and it only support for actual DOM element properties only

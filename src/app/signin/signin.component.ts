import { Component, OnInit   } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'signin-component',
  templateUrl: './signin.component.html'
})

export class SigninComponent  implements OnInit {
  public ngOnInit()
  {
    $.images = [
      "/assets/uimages/bloqueA.jpg",
      "/assets/uimages/bloqueJ.jpg",
      "/assets/uimages/bloqueM.jpg",
      "/assets/uimages/fundadores-interno.jpg",
      "/assets/uimages/gimnasio.jpg"
  ];
    $.preloadImages = function() {
      for (var i = 0; i < $.images.length; i++) {
        console.log($.images[i])
        $("<img />").attr("src", $.images[i]);
      }
    };
    
    var allowContinue = false;
    $(document).ready(function(){
        console.log(" DOM LOADED!");
        $.preloadImages($.images);
        console.log($.preloadImages($.images))
        var i = 0;
        setInterval(function() {
            var image = $('.bg');
            image.fadeOut(200, function () {
                image.css("background-image", "url("+$.images[i]+")");
                image.fadeIn(1000);
            });
            i = i + 1;
            if (i == $.images.length) {
                i =  0;
            }
        }, 8000);
    });
  }
}

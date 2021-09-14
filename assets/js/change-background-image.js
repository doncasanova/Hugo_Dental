console.log("background js");


var image = ["hugo-dental-main.jpg"];
var image2 = ["main-group.jpg"];
const imagePath = "./assets/images/";
addBackGround();
var imageNumber = 0;

function addBackGround() {
    for (i = 0; i < image.length; i++) {
        $(".insertImagesHere").append(`<div id = "home" class="header-hero bg_cover" style="background-image: url(${imagePath}${image[i]})"> <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-10">
                        <div class="header-content text-center">
                            <div class="container">
                                <div class="row d-flex justify-content-center">
                                    <div class="col-lg-12 col-12 bg-white rounded-lg opacity">
                                        <div class="section-title wow fadeInDown" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                            <h4 class="title text-center">Hugo Dental Care</h4>
                                            <p class="text text-center">
                                                At Hugo Dental Care, we are interested in complete dental health.<br>
                                                We take a different approach to dentistry that never settles for the status quo; instead,<br>
                                                we strive to stay on top of the most advanced technologies and give you,<br> our patients,
                                                the best dental care possible.
                                            </p>
                                            <div class="text text-center">
                                                <h4 class="box-title">Schedule Your Appointment Today</h4>
                                                <a href="tel:651-426-1639">651.426.1639</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);
        var imageNumber = i;

    }

};
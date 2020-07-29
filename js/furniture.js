$(document).ready(function(){
    console.log('ready');

    let mainImage = $('#image-placeholder');
    let firstImage = $('#smaller-image-container1');
    let secondImage = $('#smaller-image-container2');
    let thirdImage = $('#smaller-image-container3');

    firstImage.click(function (){
        mainImage.css('backgroundImage','url(../assets/images/sofa3.jpg)');
        mainImage.css('transition', 'all 2s');
    });

    secondImage.click(function (){
        mainImage.css('backgroundImage','url(../assets/images/sofa4.jpg)');
        mainImage.css('backgroundSize', 'cover');
        mainImage.css('transition', 'all 2s');
    });
    
    thirdImage.click(function (){
        mainImage.css('backgroundImage','url(../assets/images/sofa2.jpg)');
        mainImage.css('backgroundSize', 'cover');
        mainImage.css('transition', 'all 2s');
    });

    // $('#next-button').click( () => {
    //     firstImage.css('left', '14%'); 
    //     secondImage.css('left', '30%'); 
    //     thirdImage.css('left', '46%'); 
    //     $('#prev-button').css('zIndex', '7');
    // }

    // );
});

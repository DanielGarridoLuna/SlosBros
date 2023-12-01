function saludar(){
    alert("Hoy es un dia nublado");
}


function crear(){

    let carruselm=document.getElementById('morado');

    carruselm.innerHTML=`
    
    <div id="carouselExample" class="carousel slide"  data-bs-ride="true">
          <div class="carousel-inner container">
            <div class="carousel-item active">
              <img src="img/cropped-1920-1080-1325987.jpeg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="img/cropped-1920-1080-1325995.jpeg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="img/cropped-1920-1080-1325984.jpeg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="img/cropped-1920-1080-1329624.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="img/cropped-1920-1080-589333.jpg" class="d-block w-100" alt="...">
            </div>
    
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

    `;

}

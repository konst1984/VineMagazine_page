document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.burger__btn').addEventListener('click', function() {
      
      document.querySelector('.burger__btn').classList.toggle('btn-border'); 

      document.querySelector('.nav_burger').classList.toggle('visin');
     
    })

})


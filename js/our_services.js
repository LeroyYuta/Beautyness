      /// img
      const imgs = document.querySelectorAll('.box-img');

      for (i = 0; i < imgs.length; i++) {
        const img = imgs[i];
        img.addEventListener('mousemove', startRotate); //запускает функцию вращения
        img.addEventListener('mouseout', stopRotate); // останавливает функцию вращения
      }

      function startRotate(event) {
        const boxImg = this.querySelector('.img__box');
        const halfHei = boxImg.offsetHeight / 2; // нашли середину опираясь на высоту и разделили пополам

        boxImg.style.transform = 'rotateX(' + -(event.offsetY - halfHei) / 10 + 'deg) rotateY(' + (event.offsetX - halfHei) / 10 + 'deg)'
      } // deg (градус)

      function stopRotate(event) {
        const boxImg = this.querySelector('.img__box');
        boxImg.style.transform = 'rotate(0)'; // сброс всех вычеслений
      }
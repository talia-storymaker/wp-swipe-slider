function setupSlideshow() {
    slideshows = document.getElementsByClassName('swipe-slideshow');
    for (var i = 0; i < slideshows.length; i++) {
        var currentSlideshow = slideshows[i];
        var originalParent = currentSlideshow.parentNode;
        var outerContainer = document.createElement('div');
        outerContainer.className = 'swipe';
        outerContainer.id = 'slider' + [i];
        originalParent.insertBefore(outerContainer, currentSlideshow);
        outerContainer.appendChild(currentSlideshow);
        currentSlideshow.className = 'swipe-wrap';
        var slideItems = currentSlideshow.getElementsByTagName('li');
        for (var it = 0; it < slideItems.length; it++) {
            slideItems[it].className = '';
        }
        currentSlideshow.swipeAction = new Swipe(document.getElementById('slider' + [i]), { auto: 1500 });
        var controlsContainer = document.createElement('div');
        controlsContainer.id = 'controls' + [i];
        controlsContainer.className = 'swipe-controls';
        outerContainer.appendChild(controlsContainer);
        function ControlButton(providedId) {
            this.element = document.createElement('button');
            this.element.id = providedId;
            this.arrowImage = document.createElement('img');
            this.arrowImage.src = slideshowSetup.pluginsUrl + '/wp-swipe-slider/images/simple-arrow.svg';
            this.element.appendChild(this.arrowImage);
        }
        var nextButton = new ControlButton('next');
        var prevButton = new ControlButton('prev');
        nextButton.arrowImage.alt = 'Next arrow';
        nextButton.element.ariaLabel = 'Next slide';
        prevButton.arrowImage.alt = 'Previous arrow';
        prevButton.element.className = 'prev';
        prevButton.element.ariaLabel = 'Previous slide';
        nextButton.element.onclick = currentSlideshow.swipeAction.next;
        prevButton.element.onclick = currentSlideshow.swipeAction.prev;
        controlsContainer.appendChild(prevButton.element);
        controlsContainer.appendChild(nextButton.element);
    }
  }
  
  setupSlideshow();
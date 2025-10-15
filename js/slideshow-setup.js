function setupSlideshow() {
    
    // Check if Swipe library is available
    if (typeof Swipe === 'undefined') {
        console.error('❌ Swipe library not loaded. Make sure swipe.js is loaded before slideshow-setup.js');
        return;
    }

    // Check if slideshowSetup object is available
    if (typeof slideshowSetup === 'undefined') {
        console.error('❌ slideshowSetup object not available. Make sure the script is properly localized.');
        return;
    }

    var slideshows = document.getElementsByClassName('swipe-slideshow');

    for (var i = 0; i < slideshows.length; i++) {
        try {
            var currentSlideshow = slideshows[i];
            var originalParent = currentSlideshow.parentNode;
            var outerContainer = document.createElement('div');
            outerContainer.className = 'swipe';
            outerContainer.id = 'slider' + i;
            originalParent.insertBefore(outerContainer, currentSlideshow);
            outerContainer.appendChild(currentSlideshow);
            currentSlideshow.className = 'swipe-wrap';
            var slideItems = currentSlideshow.getElementsByTagName('figure');
            for (var it = 0; it < slideItems.length; it++) {
                slideItems[it].className = '';
            }
            
            // Initialize Swipe with error handling
            currentSlideshow.swipeAction = new Swipe(document.getElementById('slider' + i), { auto: 1500 });
            
            var controlsContainer = document.createElement('div');
            controlsContainer.id = 'controls' + i;
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
        } catch (error) {
            console.error('❌ Error setting up slideshow #' + (i + 1) + ':', error);
        }
    }
}

// Wait for DOM to be ready and Swipe library to be loaded
function initializeSlideshows() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupSlideshow);
    } else {
        // DOM is already ready, but wait a bit for Swipe library
        setTimeout(setupSlideshow, 100);
    }
}

// Initialize when script loads
initializeSlideshows();
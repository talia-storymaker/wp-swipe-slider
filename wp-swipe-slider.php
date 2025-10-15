<?php
/**
* Plugin Name: Swipe Slider
* Plugin URI: https://www.taliadegisi.com/
* Description: Simple WP implementation of the Swipe slideshow. (https://swipe.js.org)
* Version: 1.1
* Author: Talia Hatfield
* Author URI: https://www.taliadegisi.com/
**/

add_action('wp_enqueue_scripts','swipeslider_add_scripts');

function swipeslider_add_scripts() {
    wp_enqueue_style( 'swipeslider-style', plugins_url( '/css/style.css', __FILE__ ), array(), '1.1');
    wp_enqueue_script( 'swipe', plugins_url( '/js/swipe.js', __FILE__ ), array(), '1.1', true );
    wp_enqueue_script( 'slideshow-setup', plugins_url( '/js/slideshow-setup.js', __FILE__ ), array('swipe'), '1.1', true );
    wp_localize_script('slideshow-setup', 'slideshowSetup', array(
        'pluginsUrl' => plugins_url(),
    ));
}

// function swipeslider_expose_plugin_url() {
//     echo '<div id="swipe-slider-plugin-url" style="display: none;">' . plugins_url( '', __FILE__ ) . '</div>';
// }
function toggleLeftMenu(){$(".nav-left-menu").toggleClass("transform-left-custom-active"),$(".icon-hide-left-menu").toggleClass("hidden"),$(".icon-show-left-menu").toggleClass("hidden"),$(".overlay").toggleClass("overlay-active")}$(document).ready(function(){}),$(".overlay").click(function(){$(this).toggleClass("overlay-active"),$(".nav-left-menu").toggleClass("transform-left-custom-active"),$(".icon-hide-left-menu").toggleClass("hidden"),$(".icon-show-left-menu").toggleClass("hidden")});
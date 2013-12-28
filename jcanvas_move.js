/*
=================
Simple JCanvas addon plugin
# product name 	: jcanvas_move.js
# Name  		: M. Aris Setiawan
# Email   		: m.arissetia@yahoo.com
# Location		: Surabaya, Indonesia
# date create	: 24 Dec 2013 
# version 		: 1.0.0
# Inspired by 	: Caleb Evans | http://calebevans.me/
# More info about Jcanvas : http://calebevans.me/projects/jcanvas/
================
*/




function jGenrate(selector){
	 var canvas_value = $(selector).attr('coor'); // call attribut 'coor' from element
	 var values = canvas_value.split(","); // split data from atribut 'coor' to be array
	jcanvas_Move($(selector), parseInt(values[0]) ,parseInt(values[1]),parseInt(values[2]),parseInt(values[3])); 
	//all data send to jcanvas_Move to excute
}

function jcanvas_Move( j_selector, j_width, j_height, j_top, j_left){
		if (j_width == 0){
				j_width = 300; // set default if zero
			}

		if (j_height == 0){
			j_height = 150; // set default if zero
		}

	j_selector.css({ 
		top: j_top, left: j_left, 
		width: j_width, height: j_height, 
		position: 'absolute'
	});
	
	j_selector.jCanvas({
		width: j_width, height: j_height
	});
}

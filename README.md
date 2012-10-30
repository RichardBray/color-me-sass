ColorMeSASS
===========

Colour library for the css preprocessor SASS.

 [Full site with colours, variable names and documentation here](http://richbray.me/cms/).


Usage
------------------------------

###1. CSS Preprocessors

I'm not going to go into detail into what css preprocessors are or which one is better, both [SASS](http://sass-lang.com/) and [LESS](http://lesscss.org/) are both pretty cool and I believe every web designer should at least have a play with one of them.

One thing you need to know if you're new to this, SASS uses Ruby on Rails and LESS uses Javascript. That should help with your choice.


###2. Setting Up

If your farmilliar with SASS or LESS this should be a walk in the park. Make sure the main _ColorMeSASS.scss file is imported at the very bottom so it will overwrite any similar colour variables you have.


###3. Using the Colours

Now here's the fun part. If you want to use a colour all you need to do is type in it's variable name.

	body{
			background-color: $orangeDuller;
			color: $white;
		}

The cool thing about CSS pre-processors is you can make the colour lighter or darker, desaturate or saturate colours, change the hue, or even mix two colours together and it will calculate the correct hexadecimal value and place it in the compiled CSS. Pretty neat right.

		/*  LIGHTEN  */		

		body{
			background-color: lighten($yellowDark, 25%);
		}

		/*  DARKEN  */

		body{
			background-color: darken($pinkCoral, 76%);
		}

		/*  DESATURATE  */

		body{
			background-color: desaturate($amberDull, 14%);
		}

		/*  SATURATE  */

		body{
			background-color: saturate($greenSea, 39%);
		}

		/*  HUE  */

		body{
			background-color: adjust_hue($purplePlum, 78); /* between 0 - 360 */
		}

		/*  HS (HUE & SATURATION)  */
		

		body{
			background-color: adjust_hue(desaturate($brownBronze, 8), 11)
		}

		/*  HSL (HUE, SATURATION & LIGHTNESS)  */
		

		body{
			background-color: lighten(adjust_hue(desaturate($blueLighter, 8), 11), 0)
		}
	
		/*  MIXING 2 COLOURS  */
		
		$cool_purple:  mix($red, $blue, 50%);

		body{
			background-color: $cool_purple;
		}

The possibilities are pretty much endless. Have fun.
Don't forget to hit me up on [twitter](https://twitter.com/Ceiga) if you end up using this for a site you work on.

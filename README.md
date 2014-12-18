ColorMeSass
===========
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/RichardBray/color-me-sass/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

Colour library for the css preprocessor Sass.

 [Full site with colours, variable names and documentation here](http://richbray.me/cms/).


Usage
------------------------------

###1. CSS Preprocessors

I'm not going to go into detail into what css preprocessors are or which one is better, both [Sass](http://sass-lang.com/) and [LESS](http://lesscss.org/) are both pretty cool and I believe every web designer should at least have a play with one of them.

One thing you need to know if you're new to this, Sass uses Ruby and LESS uses JavaScript. That should help with your choice.


###2. Setting Up

If your farmilliar with Sass or LESS this should be a walk in the park. Make sure the main `_color-me-sass.scss` file is imported at the very bottom so it will overwrite any similar colour variables you have.


###3. Using the Colours

Now here's the fun part. If you want to use a colour all you need to do is type in it's variable name.

	body{
			background-color: $orangeDuller;
			color: $white;
		}

The cool thing about CSS pre-processors is you can make the colour lighter or darker, desaturate or saturate colours, change the hue, or even mix two colours together and it will calculate the correct hexadecimal value and place it in the compiled CSS. Pretty neat right.


**Lightness**

		/*  LIGHTEN  */		

		body{
			background-color: lighten($yellowDark, 25%);
		}

		/*  DARKEN  */

		body{
			background-color: darken($pinkCoral, 76%);
		}


**Saturation**

		/*  DESATURATE  */

		body{
			background-color: desaturate($amberDull, 14%);
		}

		/*  SATURATE  */

		body{
			background-color: saturate($greenSea, 39%);
		}

**Hue**


		body{
			background-color: adjust_hue($purplePlum, 78); /* between 0 - 360 */
		}


**More than one adjustment**


		/*  HS (HUE & SATURATION)  */

		body{
			background-color: adjust_color($brownBronze, $hue: 11%, $saturation: -8%);
		}

		/*  HSL (HUE, SATURATION & LIGHTNESS)  */
		
		body{
			background-color: adjust_color($blueLighter, $lightness: -10%, $hue: 11%, $saturation: -8%);
		}


**Mixing Colours**

	
		
		$cool_purple:  mix($red, $blue, 50%);

		body{
			background-color: $cool_purple;
		}


The possibilities are pretty much endless. Have fun.
Don't forget to hit me up on [twitter](https://twitter.com/Ceiga) if you end up using this for a site you work on.


Liscense
------------------------------
Color Me Sass is licensed under the [☺ license.](http://licence.visualidiot.com/)

You, the licensee, are hereby granted free usage in both personal and commerical environments, without any obligation of attribution or payment (monetary or otherwise). The licensee is free to use, copy, modify, publish, distribute, sublicence, and/or merchandise the work, subject to the licensee inflecting a positive message unto someone. This includes (but is not limited to): smiling, being nice, saying “thank you”, assisting other persons, or any similar actions percolating the given concept.


The above copyright notice serves as a permissions notice also, and may optionally be included in copies or portions of the work.


The work is provided “as is”, without warranty or support, express or implied. The author(s) are not liable for any damages, misuse, or other claim, whether from or as a consequence of usage of the given work.

Changelog
------------------------------

**v 1.0**        Color Me Sass is born.

**v 1.1**        Added a few brand colours from [http://brandcolors.net/](http://brandcolors.net/) to the library

**v 1.2**        25/04/13 Added some colours from [preboot](http://getpreboot.com/#variables-colors)

**v 1.3**        04/06/13 Updated with over 90 dulux inspired colours

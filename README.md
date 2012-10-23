ColorMeSASS
===========

Colour library for the css preprocessor SASS.
Full site coming soon.


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

The cool thing about CSS pre-processors is you can make the colour lighter or darker and it will calculate the correct hexadecimal value and place it in the compiled CSS. Pretty neat right.

		body{
			background-color: lighten($yellowDark, 25%);
		}

		/*  or  */

		body{
			background-color: darken($pinkCoral, 76%);
		}

The possibilities are pretty much endless. Have fun.
Don't forget to hit me up on [twitter](https://twitter.com/Ceiga) if you end up using this for a site you work on.


LISCENSE
------------------------------

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
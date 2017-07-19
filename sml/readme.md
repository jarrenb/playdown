sml or screenplay markup language
=============================

welcome to screenplay markup language!

the idea here is that when i see screenplays on-line, they are almost always presented as pdfs, and i don't like pdfs. they don't feel very OPEN do they?

html, on the other hand, is open

my point is this, html is cool as hell because it's for making documents and screenplays are documents

so i thought why not make a specification for screenplays that uses html or html style syntax. html style tags (xml?) that are specific to screenplays and that have specific styling like screenplays do

so here it is:

if you wrote a screenplay for a company that produces movies, you would format it in this very specific way. sml is going to try and replicate that format as closely as possible

(maybe i ought to be doing a markdown version of this for easier writing by humans, but if that markdown file ever needed to be converted into html maybe this is also still a good idea)

the very specific format of screenplays always contains certain elements. for example:

- specific font and font size: 
  - courier 12pt font
- specific page margins: 
  - left margin: 1.5"
  - top, bottom, and right margin: 1"

but browsers that display html have different standards and even use different units of measurements for formatting aspects than screenplays. for example, most web browsers default to a font-size of 16px (which is the same size as 12pt). and each html element has specific margins which for the most part are standard on all browsers, but can differ from browser to browser

so for sml the specification will be:

- courier 16px font (with a fallback of monospace font-family)
- 1.5em margin-left
- 1em margin top, bottom, and right

## html vs xml

html is data that is rendered to a webpage or something like it. it's displayed somewhere

xml, on the other hand, is just for holding data and not necessarily displaying it

i can see a use for creating this project in both. and i can also see a use for creating this project in json instead of xml since json seems to be the more popular and current data formatting method. and that's probably what i'll do, which means for this project i'm going to focus on the html part which would be like how a screenplay should be displayed, rather than how the content that's inside a screenplay should be stored. i don't know if i'd add that aspect to this project or create a new project for that. i like the idea of all the information in a screenplay being stored in json though and then that data is able to be loaded up in a variety of places and not just on the web with html. so hopefully i'll get around to doing both and not none. (i start a lot of projects and don't finish a lot of projects). but yeah i'll focus on the html and css aspects of this project for now

## document formatting

there's always a title page

each page is numbered in the top right corner. the title page is not numbered. page 1 is the first page after the title page

if a scene continues on the next page "(CONTINUED)" goes in the bottom left margin of the page, and on the next page "CONTINUED:" is in scene-heading format

the entire script sits in a div with a class of "sml"

i've seen where dialogue is too long and has to go onto the next page, the word "more" in all caps and in parenthesis below the last line of dialogue before the next page

## title page

an empty div with a class of "title-page"

### title section

with a handful of empty divs with classes for each element of the title page:
- .title
- .by (this has the text "by" in it)
- .by-line

  the title section goes in the center of the page and is text-align center. the title is on one line, the word "by" is on the line below, and the by-line (the screenplay authors name/names) are on the last line. the line-height is double spaced, which would be double the font-size

  so line-height of title-section: 32px (since font-size is 16px)

### contact info section

- .contact-info (this one has some empty divs with classes for each element of contact info)
  - .name
  - .address
  - .address-line-two
  - .phone-number
  - .email

## scene headings

an html comment indicating that this is a new scene and giving the number of the scene. like this:

    <!--SCENE 1-->

or

    <!--SCENE 14-->

an empty div with a class of "scene-heading". the text inside a scene heading is all caps

ex. INT. DOCTOR'S OFFICE - DAY

all scene headings are numbered. the first scene is one, and each scene goes up one from there. numbers go on both sides of the page in the margin

## action

an empty div

## parentheticals

an empty div with a class of "parenthetical"

parentheticals are always wrapped in parenthesis, so the parenthesis could be programmatically added in

## montage

an empty div with a class of "montage" will surround all of the elements that make up the montage. the first and last child elements in the montage div will be montage headings which will have similar (if not exactly the same) styling as scene headings. the only difference will be that montages and montage headings aren't numbered

i do have montages as being numbered, even though it seems likely that most screenplays won't contain more than three ever. it seems like a good idea to have those individually available for custom styling and for just regular traversal of the document. plus it falls inline with the convention that i used for pages and scenes, and montages are similar to both of those

all caps like a scene heading

since montages are not numbered like scenes, i don't count them as scenes and i include them in whatever scene they're in (since the next scene after the scene that contains the montage will be numbered normally). montage headings, however, are formatted in the same style as scene headings

## pages

all pages should be wrapped in an empty div with a class of "page"

the title page should also contain the class "title-page"

each page after the title page should also contain a class of "page" + the number of page it is starting with "1"

for example, "page1" then "page2" then "page3" etc...

## scenes

all scene should be wrapped in an empty div with a class of "scene"

since scene are numbered in a screenplay, each scene div should also have a numbered class to indicate which scene number the scene is.

for example, "scene1" then "scene2" then "scene3" etc...

some scenes split pages. when this happens, html dictates the scene div be closed and then ending the page div before starting a new page and continuing the scene. close the scene div, and on the next page start a continued version of a scene div. this scene div will have a class of "scene" like normal, but will have a modified version of the scene number class. it's nothing special, just add a "-continued" onto the end of it

for example, "scene3" and on the next page "scene3-continued"

(it might be advantageous to mark both the first part of the scene and the continued part of the scene as having continuations, like with a class of "continued-scene" or just "continued" but i'm not sure if that's necessary so i'll just put that note in here if i see a need for it later)
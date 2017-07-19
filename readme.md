# playdown

screenplay formatting software is expensive

as a writer i have found myself moving away from microsoft word and towards writing markdown. it's cleaner. it doesn't make assumptions about formatting. i can write markdown in any editor i want not named microsoft word. markdown is very nice and cool. i think it would be cool if people could write screenplays in the same way that people write stuff in markdown

so that's what i'm attempting with this project

write a screenplay using markdown style syntax that is converted into a specific format of html that renders to the exact formatting style of a script

so playdown, like markdown, is two things: (i'm stealing a lot of this paragraph straight from john gruber's introduction to markdown) (1) a plain text formatting syntax for writing a screenplay; and (2) a software tool, written for node in javascript that converts playdown files (.pd) into an html file specifically formatted to look exactly like how a script is supposed to look. i call this "sml" (screenplay markup language) but it's actually just a plan html file

## elements of a screenplay:

### general formatting and things worth considering

in markdown line breaks and indentation matter. i don't know how much indentation will need to matter in a screenplay version of markdown, but line breaks (i hope i'm using the correct term) do matter in screenplays as well

#### the first question i can think of that needs addressing is for the sake of visual organization should certain elements be closer together?

by default in markdown, a line in between each element indicates a new element. for example:

this is a paragraph

and this is a new paragraph

there is a line in between the two and that how markdown knows they are two different paragraphs

does it makes sense to do this with elements of a screenplay? i think for the most part yes. where i can see a better approach is with characters and their dialogue. for example:

john
this is my dialogue. this is the dialogue that i'm saying

sally
why are you saying such weird words? we were having a nice moment by the fire and now you've ruined it with your classic nonsense!

john
(confused)
i'm sorry sally. i think my big brain is broken

other elements would have the blank line in between them to indicate a new element, but i think characters, parentheticals, and dialogue can all be on subsequent lines starting with the character element. a new character with new dialogue will require a blank line in between like normal

#### should i borrow as many elements as possible directly from markdown? or should i try to create something from scratch for each to keep markdown and playdown separated?

i think i should take what i can from markdown to keep it familiar with writers who already know markdown. the two have to be separate since screenplays are written in isolation from other forms of writing. you don't typically see a blog post or a book that features a section written in a screenplay style

#### playdown files can't be .markdown or .md like markdown files are, because they're not markdown (they just look kind of like markdown)

playdown files should have the extension of either .playdown or .pd. personally i prefer .pd (just like i prefer .md for markdown)

### title page

playdown expects the main headers or single hashtag headers as the three elements that make up the title, "by", and author (or by-line) of the screenplay. these should be on consecutive lines, with a single hashtag and space at the beginning of each line

example:

\# the title of my screen play
\# by
\# jarrenb

i need to add in formatting for the word "by" and then the author

i also need to add in contact info formatting and any other formatting that goes in the bottom left corner of the title page

### scene heading

i think the scene heading, since after the title it's the second most important header found in the screenplay, can have the second markdown header

example:

\#\# int. my first scene - day

or

\#\# ext. my next scene - night

the person writing could write the scene heading text in all caps, but they don't need to. on conversion to html or whatever other format, all the text following the two hashtags will be converted to UPPERCASE

### action

action formatting will take the style of blockquotes from markdown which uses the greater-than symbol and then a space before the action text

example:

> this would be an action element in a script

> the two drive in their car to the restaurant

### character

a character is the equivalent markdown emphasis. so either single asterisks or underscores surrounding the character text

example:

*jarren* or _jarren_

### dialogue

it seems to me that the bulk of most screenplays will be dialogue. or at least the person writing the screenplay might appreciate dialogue being the elements that gets in the way the least. so i think this element will be the one written like a paragraph in markdown in the sense that there's no special formatting, just start a new line and start writing. i like this decision because it seems to favor making the writing of a screenplay in playdown easier, and if a reading were ever to happen with a playdown formatted screenplay (as in before it got converted to screenplay formatting) it would be fairly easy to see the dialogue, which seems important and useful

so for example:

this is dialogue that i am saying

dialogue will always come after a character element and sometimes after a parenthetical element that comes right after a character element

so dialogue will typically look like this

WHATEVER THE CHARACTER FORMATTING IS
(A PARENTHETICAL)
and here i am saying some dialogue out loud for the good good audience

### parenthetical

this one is easy. a parenthetical is inside parenthesis. i don't think there's any other reason to use parentheses in a screenplay, so they can be extremely straightforward in screenplay markdown

example:

(farting)

or

(exasperated)

or

(V.O.)

in markdown, parenthesis are used for links, but screenplays shouldn't have links so we can use them differently here

### extensions

### transition

### shot
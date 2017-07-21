# playdown

screenplay formatting software is expensive

as a writer i have found myself moving away from microsoft word and towards writing markdown. it's cleaner. it doesn't make assumptions about formatting. i can write markdown in any editor i want not named microsoft word. markdown is very nice and cool. i think it would be cool if people could write screenplays in the same way that people write stuff in markdown

so that's what i'm attempting with this project

write a screenplay using markdown style syntax that is converted into a specific format of html that renders to the exact formatting style of a script

so playdown, like markdown, is two things: (i'm stealing a lot of this paragraph straight from john gruber's introduction to markdown) (1) a plain text formatting syntax for writing a screenplay; and (2) a software tool, written for node in javascript that converts playdown files (.pd) into an html file specifically formatted to look exactly like how a script is supposed to look. i call this "sml" (screenplay markup language) but it's actually just a plan html file

## version 1.0.0

the goal of version 1.0 would be being able to write a screenplay as a .txt file (or maybe a .pd or .playdown file i'm not sure how file extensions work) and run that file through a node/javascript script to produce an sml document that can be viewed in a browser and looks like a script in the browser, and can also be printed and exactly like how a printed script should look

## general formatting and things worth considering

### file extensions and types

playdown files should not be markdown files (meaning they end in .md or .markdown). they should be either plain text files (.txt) or playdown specific files (.pd or .playdown)

in markdown line breaks and indentation matter. i don't know how much indentation will need to matter in a screenplay version of markdown, but line breaks (i hope i'm using the correct term) do matter in screenplays as well

### the first question i can think of that needs addressing is for the sake of visual organization should certain elements be closer together?

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

### should i borrow as many elements as possible directly from markdown? or should i try to create something from scratch for each to keep markdown and playdown separated?

i think i should take what i can from markdown to keep it familiar with writers who already know markdown. the two have to be separate since screenplays are written in isolation from other forms of writing. you don't typically see a blog post or a book that features a section written in a screenplay style

### playdown files can't be .markdown or .md like markdown files are, because they're not markdown (they just look kind of like markdown)

playdown files should have the extension of either .playdown or .pd. personally i prefer .pd (just like i prefer .md for markdown)

### how strict to the format of scripts should playdown be?

playdown should be as customizable as possible. if all the writer wants to do is have two characters talking, then all they need to add to the playdown file is the characters talking. converting that playdown file to sml should still create screenplay like formatting. my point is, if the writer doesn't want to include certain aspects of the script, that's fine with playdown. leaving stuff out means just that, the screenplay won't have the thing, but it can have the thing if the writer wants. a blank playdown file will render one blank page with nothing on it. a title page with only a title will render a title where you expect a title on the title page, but with no other content

### auto-formatting: do we use it?

first character of elements that do not already have special formatting, i.e. action and dialogue, should auto-capitalize the first letter. writer's may add this already, in which case playdown will do nothing, but for lazy writer's (like me) playdown's got your back

### emphasis

uppercase is used for production emphasis. like to point out things that will be needed come production time. arbitrary uppercase is in playdown by placing the emphasized text between either two asterisks or two underscores.

example:

\*\*three suvs\*\*

or

\_\_extremely large fake mustache\_\_

## elements of a screenplay:

### title page

if including a title, playdown expects the first line of the document to be the title followed by an "underline" of equal signs on the next line

example:
the title of my screen play
\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=

the amount of equal signs must be at least three. in fact, playdown will only look for three, but you can use more than three if you want (i prefer using however many it takes to underline the title)

if you want a title and an author, the first line should be the title, the second line should be the author, and the third line should be underlined with equal signs

example:
the title of my screen play
the author
\=\=\=

if playdown sees either a title or a title with an author, it will create a title page formatted in the way a screenplay title page should be formatted

screenplays also typically contain contact information and sometimes other information (i've seen revision information or version information) in the bottom left of the title page

if you don't provide any contact info (or any other info that may go there) then playdown will leave that space blank

if you want to add info to that section, it's added in a similar way to the title and author section. the difference is that the info should be underlined with dashes instead of equal signs

example:

contact info
123 street street
city, state country zip
email
other info
\-\-\-

playdown will expect to find this section right after the title section

example:

the title of my screen play
the author
\=\=\=

contact info
123 street street
city, state country zip
email
other info
\-\-\-

a traditional screenplay has the title on one line, the word "by" on the next line (double spaced lines), and the author on the last line. these three things make up the title section of the title page which all formal screenplays should have. if playdown script doesn't see any title elements, it will forgo a title page altogether 

### scene heading

scene headings are formatted in the style of the first header in markdown style, or a single hashtag followed by a space and then the scene heading text

example:

\# int my first scene - day

or

\# ext. my next scene - night

the person writing could write the scene heading text in all caps, but they don't need to. on conversion to html or whatever other format, all the text following the two hashtags will be converted to uppercase

the playdown script knows to create a scene heading when it sees two consecutive hashtags followed by a space

playdown converts all following text to uppercase

playdown then looks for either "int" or "ext". if the script doesn't see a period following "int" or "ext" it will add one (the writer can also add a period if they want, playdown doesn't care. if it sees a period, playdown will do nothing)

### action

action formatting will take the style of blockquotes from markdown which uses the greater-than symbol and then a space before the action text

example:

\> this would be an action element in a script

\> the two drive in their car to the restaurant

### character

a character is the equivalent markdown emphasis. so either single asterisks or underscores surrounding the character text

example:

\*jarren\* or \_jarren\_

formatting character in this way is nice because characters are sometimes mentioned in other elements, and this keeps formatting consistent with markdown style that has block and inline style formatting. since characters can be in other elements, their formatting needs to be inline

any text within either asterisks or underscores will be converted to uppercase, which should make writing a little bit easier

characters are interesting because they can either be inline elements when they're mentioned in action elements, and they can be block elements when they indicate who's giving dialogue

because of this i think they should have two different syntax styles: inline and block

examples:

block: \* character
inline: \*character\*

or underscores:

block: \_ character
inline: \_character\_

so if the writer wants the character with the special indentation because they're writing dialogue, they should write the character's name in the block style format: a single asterisk or underscore followed by a space

but if they want the character just to be all uppercase because it's in some other element, like an action element, then they should write the character's name in inline style format: a pair of asterisks or underscores with the character name in between with no spaces

the first time in the script a character is introduced, their name should be uppercase. after that, their name can be in whatever case when it's found in non-character elements 

so the inline character element should only be used once for each character. for a second i thought that would make the inline character element useless altogether, but there a lot of a character's introduced in a script, typically, so it still seems like a useful thing. plus maybe an editor built specifically for playdown could utilize the character elements to make typing characters a little easier as it seems annoying repetitive tasks are one of the most frustrating aspects of typing a script

### dialogue

it seems to me that the bulk of most screenplays will be dialogue. or at least the person writing the screenplay might appreciate dialogue being the elements that gets in the way the least. so i think this element will be the one written like a paragraph in markdown in the sense that there's no special formatting, just start a new line and start writing. i like this decision because it seems to favor making the writing of a screenplay in playdown easier, and if a reading were ever to happen with a playdown formatted screenplay (as in before it got converted to screenplay formatting) it would be fairly easy to see the dialogue, which seems important and useful

so for example:

this is dialogue that i am saying

dialogue will always come on the line following a character element and sometimes on the line following a parenthetical element that comes on the line following a character element

so dialogue will typically look like this

\* character
(parenthetical)
and here i am saying some dialogue out loud for the good good audience. this is dialogue. notice there is not special character at the beginning of this. no special character before means dialogue to playdown

### parenthetical

this one is easy. a parenthetical is inside parenthesis. i don't think there's any other reason to use parentheses in a screenplay, so they can be extremely straightforward in screenplay markdown

example:

(farting)

or

(exasperated)

or

(V.O.)

in markdown, parenthesis are used for links, but screenplays shouldn't have links so we can use them differently here

parentheses, like characters, can be either inline or block elements. therefore in order to be consistent i think there should be a differentiation between the two when writin in playdown

block: ( parenthetical
inline: (parenthetical)

this will be good because i've seen a situation that could be confusing, and i think it's just a matter of preference of whatever screenplay software you happen to be using

i've seen parentheticals used on the line just below a character as the character name is indicating dialogue from that character. for example:

\* character
\( parenthetical
dialogue

and i've also seen that same parenthetical placed inline with the character name. for example:

\* character (parenthetical)
dialogue

by having both element styles, playdown can be used whichever way the writer prefers. if they like parentheticals on the same line as the character, that's cool. if they prefer the parenthetical below (for some reason i prefer this way, though not for any logical reason that i can think of. i must just think it looks better), that's cool too

(i do worry about the block formatting of a parenthetical. we're so used to seeing parentheses enclosing words, that i worry having just an opening parenthesis will be off-putting to some people. plus, editors like the kind i expect people will write screenplays in (code editors) almost always just add into two parenthesis automatically because that's just how people expect parenthesis to behave)

(i also considered the possibility of just having the script look for a line break after a closing parenthesis to determine if the parenthetical was block or inline, but i thought that might be harder and i'm already not a very good programmer)

(i thought of the same thing for character formatting as well. just looking for a line break after a character name to indicate that that character element was block rather than inline, but i ultimately decided against it for the same reason)

(maybe when i get into programming the script i'll find that it's not so hard, and i'll just implement the way i've outlined in these four parenthesis enclosed paragraphs. i suppose it would work with the philosophy of writer preference to have both as an option. either a single parenthesis or asterisk or underscore followed by a space, or just the inline syntax of those elements followed by a line break to indicate block version of that element)

i have seen parentheticals in both uppercase and lowercase. because of this, playdown will not convert any text inside of parentheses to either uppercase or lowercase. if the writer wants the text inside a parenthetical to be uppercase, they must do it manually

there are also parentheticals made programmatically by screenwriting software. these typically indicate a continuation on the other side of an interruption either due to a new page (literally just running out of page space), or an interruption in the action of the script itself (something happens while a character is giving a line of dialogue, but the dialogue continues either during the action or after the action has continued). these parentheticals are generated automatically by the screenwriting software and typically look like this: (CONTINUED) or (CONT'D) or (cont'd). after a bit of research it seems that there is currently some debate about whether or not these things should be added at all, and then whether or not they should be uppercase or lowercase. i need to do some more research to establish a default style for playdown. i'll probably try to mimic whatever i think is the most recent and agreed upon convention amongst the screenplay writing community. or if i can find an official specification of some sort from some authoritative source, then i might follow their guidelines

### extensions

### transition

### shot

### montage

montages seem to be formatted in the same way as scene headings, but there's a key difference. whereas scenes are numbered at the scene heading, montages are not numbered. this seems to mean that a montage can happen within a scene, but stand apart from the rest of a scene. because of this special formatting, i think montages ought to have their own element in playdown. i think it ought to be the double hastag formatting of a second header in markdown. this indicates something like a scene, but that exists inside of a scene so it isn't numbered

example:

\#\# montage

another key difference from scenes is that montages have a marked ending, which in playdown also has the format of two hashtags and a space and says "end montage"

example

\#\# end montage

## issues and other considerations

### should inline elements inside of block elements with specific formatting inherit that formatting?

i'm think specifically of an inline parenthetical inside a block character? a block character converts to uppercase, should the text inside the parenthetical convert to uppercase as well? or should it say whatever it is in the document?

i think it should stay whatever it is in the document. i think this might allow the writer the most freedom as they might not want the parenthetical to be uppercase, but then they still have the choice by just writing whatever's inside the parenthetical in uppercase manually
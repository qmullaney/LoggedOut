# Logged Out
Logged Out is a clone of Linked In. On Logged Out, users can create new accounts, edit their profile pics, and post.
## [Logged Out Live Site](https://logged-out.herokuapp.com/#/)
### Technologies
1. React - I use react to build the website structure on the front end.
2. Redux - Redux ties the React components to the store through connected components, and it helps maintain the sate of the website, ie. modules, entities, and errors
3. Ruby on Rails - Rails provides the structure for the model, view, and controller.
4. Postgresql - Postgresql is the database used to store and retrieve info via Active Record.
5. Jbuilder - Jbuilder structures JSON data going to the frontend.
6. Ajax - Ajax is used to make backend requests.
7. CSS - There to make the website look good.

## Code Examples
The `invalid` variable checks if there is any content on the post form. If there is no content yet, it adds "invalid" to the class. The CSS will render the Post button grey and unclickable.
``` js
if (this.state.body.length === 0 && !this.state.imageFile){
            invalid = "invalid";
}
// later, in render return()

<input className={`post-button ${invalid}`} type="submit" value="Post"/>


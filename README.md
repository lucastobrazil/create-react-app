Forked from the official `create-react-app` repo (https://github.com/facebook/create-react-app).

This is my custom config for starting up my own create-react-app using this method: https://auth0.com/blog/how-to-configure-create-react-app/

For personal use, but anyone who wants to use it go for it!

# Main Features:
- CSS Modules
- LESS features lets you use nesting, vars etc
- removed most boilerplate CRA stuff including the logo etc

# Usage:
```
npx create-react-app my-new-project --scripts-version lucastobrazil-react-scripts
// then run
cd my-new-project && npm start
```
If you prefer SASS instead of LESS:
```
npx create-react-app $FOLDERNAME --scripts-version lucastobrazil-react-scripts-scss
```

# Still Life
By Eileen Chang

https://bluet-frontend.herokuapp.com/
Note as of Nov 2022: Heroku removed their free plans ... Currently transfering the code to another cloud platform.

## Description
This is a photo archival project that provides users with randomly generated nouns that are used as photo or drawing prompts. All of the photos compiled from multiple contributors will then be organized by prompt (tags), displaying collections of iterations of each prompt. The intention is for users to tag their posts with their exact prompts so that image collections for each specific prompt can be generated by querying by prompt.

Instructions for using the site are as follows:
1. Sign in. 
2. Click the apple. 
3. Post an image in response to your prompt. 
4. Remember to tag your post with the exact prompt.

### CRUD module implementatiion where images can be uploaded and stored in MongoDB Atlas
All uploaded images are stored to a MongoDB Atlas database with unique id, original filename, and content type

<img src="/Users/eileenchang/1-social-media/client/public/images/mongodb.png" alt="mongodb">

### Home (not signed in)
Features:
- Apple icon at top-left that redirects to an external website with a random noun generator: https://randomwordgenerator.com/noun.php 
- Pagination where 8 posts can be viewed at a time, and navigation buttons are available at the bottom-right
- Gallery of posts that have been made by visitors to the site
- Sign In link at top-right
- Search functionality that filters posts by keywords or tags (prompts)
- Instructions and About box
<img src="./public/images/home.png" alt="home">

### Gallery Cards
Features:
- Timestamp of when the post was created
- User's name, the title of the post, and tags given to the post
- Option for signed-in users to "like" or delete their own posts 
- Preview image
<img src="./public/images/card.png" alt="gallery card">

### Sign-In
Features:
- Option to Google OAuth Login OR sign in with email and password if they created an account (see "Sign Up")
- Link to sign up page if user does not already have an account
<img src="./public/images/sign-in-page.png" alt="sign in page">

### Sign-Up
Features:
- User enters first name, last name, email, and password to create an account
- Once a user creates an account, their information is stored into a MongoDB Atlas database
<img src="./public/images/sign-up-page.png" alt="sign up page">
<img src="./public/images/mongodb-user.png" alt="mongdb user">

### Home (signed in)
Features:
- Instructions and About box disappears
- Users now have the ability to create and submit their own posts (left of screen)
- Posts are created with a title, message, tags, and an uploaded image
<img src="./public/images/home-signed-in.png" alt="signed in">
<img src="./public/images/upload-image.png" alt="upload image">

### Sample Post Page
Features:
- The title, user, timestamp, tags, and image for the post is displayed on its own page
- Signed in users can post comments that will be displayed on the page
- Suggestions for other posts are provided at the bottom of the page
<img src="./public/images/post-page.png" alt="post page">
<img src="./public/images/recs.png" alt="recs">

### Search by Keyword
<img src="./public/images/keyword-lamp.png" alt="keyword search">

### Search by Tags
<img src="./public/images/tag-space.png" alt="tag search">

### MongoDB CRUD Implementation
- Each post is stored in the MongoDB Atlas Cloud database with an id, title, message, creator id, user name, tags, uploaded image, likes, comments, and timestamp
<img src="./public/images/mongodb-post.png" alt="mongodb">


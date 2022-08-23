# FINAL PROJECT

✓ This final project consists on creating a task app ✓ 

Technologies used:
-Vue.js
-Tailwind
-Pinia
-Supabase

## 21-08-2022
First added features are the sign in and sign up in the home view. They are functionable 
and allow the creation of new users with password confirmation and confirmation email. Logins are available and 
require always a password.
A simple navbar has been added with a router link with a logo, a salute with the username and a signout button.

## 22-08-2022
Next, the newTask component was created to introduce a form in which the user will be able to push her/his tasks.
Logic to introduce tasks inside supabase has been added, by using a fetch through a store created with Pinia.
Still, tasks don't appear in realtime on the screen.
 
## 23-08-2022
Full logic of the page has been completed.
New tasks now appear by using a fetch after each modification. 
TaskItem component is fully functional and is deletable, editable and can be toggled to show it is completed.
CRUD principles are all functionable through the pinia taskStore, and are displayed thanks to different fetchs 
from the Supabase's task table. This way we don't need to update the array with methods like filter or map.
A clock function has been added that still needs to be updated to make it realtime.


------setup stuff -------

## Important
This app is not setUp to be deployed to a production environment like vercel or netlify. 

Friday on August 19 we will look at how can we deploy this app to Vercels ecosystem.


## Project Setup

```sh
npm install
```

## Set Up your Environment Variables from Supabase located at the root folder of the project

```sh
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY 
```
#### Once you have added your environment variables, head to your .gitIgnore file located at the root folder and uncomment the .env file naming to avoid sharing any private access keys to your database

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Good Music is always key!

```sh
Wu Tang Clan
A tribe called quest
Kendrick Lamar
Outkast
Dr. Dre
N.W.A
De La Soul 
Ms. Lauryn Hill
J. Cole 
Guts
Naughty By Nature
People under the stairs
Nujabes
NAS
KRS-One
The Pharcyde
Jurassic 5
Gang starr
Jay Z
Mobb Depp
Common
Lil Supa
```
[Hip Hop Spotify Playlist](https://open.spotify.com/playlist/4vKftyhS1gQovakehVcq1u?si=a7a119382dfe40da)

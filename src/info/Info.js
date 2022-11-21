import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Camilo",
    lastName: "Hurtado",
    initials: "CH", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🌎',
            text: 'Based in Colombia'
        },
        {
            emoji: "🚀",
            text: "Background in engineering"
        },
        {
            emoji: "🧠",
            text: "Constant learner"
        },
        {
            emoji: "🐶",
            text: "Dog lover"
        }
    ],
    socials: [ 
        {
            link: "https://github.com/Churtadoh",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/camilo-hurtado-herrera-2962051b2/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.instagram.com/camilohurtado536/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: ["Greetings to all", "My name's Camilo Hurtado. I am a Full Stack Developer with an academic background in Engineering.", "Throughout my university and my years working as a mechanical engineering I felt a strong attraction towards programming, the projects that I enjoyed the most were those that included any programming related tasks." ,"For this reason, after some years working as an engineer I decided to change my career path and focus on what I feel is my true passion, programming and the world of IT. Thanks to Henry I now have all the necessary tools to be able to function in the world of programming, such as Node.js, React, Redux, SQL among other technologies.","I strongly believe that my training in engineering gave me the tools to become an integrated human being, I am very professional , love working with people and can connect easily with others, all this along with the fact that I am a natural problem solver with a calm and collected state of mind."],
    skills:
        {
            proficientWith: ['javascript', 'react', 'redux' ,'git', 'github', 'node js', 'express', 'sequelize'],
            exposedTo: ['typescript', 'firebase', '']
        }
    ,
    hobbies: [
        {
            label: 'basketball',
            emoji: '⛹️‍♀️'
        },
        {
            label: 'science',
            emoji: '🧪'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'music',
            emoji: '🎶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Juira Market Place",
            live: "https://juira-market-place.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Churtadoh/PF-Henry-PT07G06-BACK", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Pokemon APP",
            live: "none",
            source: "https://github.com/Churtadoh/PI-Pokemon-main",
            image: mock2
        }
    ]
}
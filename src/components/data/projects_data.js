import amazon from '../../assets/projects_images/Amazon.png'
import burger from '../../assets/projects_images/Burger.png'
import covid from '../../assets/projects_images/Covid.png'
import ecommerce from '../../assets/projects_images/Ecommerce.png'
import girls from '../../assets/projects_images/Girls.png'
import pizza from '../../assets/projects_images/Pizza.png'
import travel from '../../assets/projects_images/Travel.png'
import netflix from '../../assets/projects_images/Netflix.png'
import voicenews from '../../assets/projects_images/VoiceNews.png'

const data_projects = [
    {
        name: 'COVID 19 tracker',
        image: covid,
        deployed_url: 'https://covidtracker-paras.netlify.app/',
        github_url: 'https://github.com/Parasbuda/Covid-Tracker',
        category: ['react']
    },

    {
        name: 'Amazon Clone',
        image: amazon,
        deployed_url: 'https://amazon-clone-paras.netlify.app/',
        github_url: 'https://github.com/Parasbuda/Amazon-Clone',
        category: ['react','ecommerce']
    },

    {
        name: 'Burger Builder',
        image: burger,
        deployed_url: 'https://burger-builder-paras.netlify.app/',
        github_url: 'https://github.com/Parasbuda/BurgerBillder',
        category: [ 'react','hotel']
    },

    {
        name: 'Ecommerce',
        image: ecommerce,
        deployed_url: 'https://parasbuda.netlify.app/',
        github_url: 'https://github.com/Parasbuda/Ecommerce',
        category: ['ecommerce', 'react']
    },

    {
        name: 'Pizza Hut',
        image: pizza,
        deployed_url: 'https://pizza-paras.netlify.app/',
        github_url: 'https://github.com/Parasbuda/Pizza-App',
        category: ['hotel', 'react']
    },

    {
        name: 'Girls Point',
        image: girls,
        deployed_url: 'https://anjuli-shopping-paras.netlify.app/',
        github_url: 'https://github.com/Parasbuda/Anjuli-commerce',
        category: ['react','ecommerce']
    },

    {
        name: 'Travel',
        image: travel,
        deployed_url: 'https://travel-paras.netlify.app/',
        github_url: 'https://github.com/Parasbuda/Landing-Page',
        category: ['react','travel']
    },

    {
        name: 'Netflix clone',
        image: netflix,
        deployed_url: 'https://netflix-paras.netlify.app/',
        github_url: 'https://github.com/Parasbuda/Netflix-clone',
        category: ['react', 'entertainment']
    },

    {
        name: 'Alan Voice News',
        image: voicenews,
        deployed_url: 'https://react-news-paras.netlify.app/',
        github_url: 'https://github.com/Parasbuda/react-news-application',
        category: ['react','news']
    }
]

export default data_projects;
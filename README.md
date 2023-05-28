# ePortfolio
Personal portfolio app

# initialising the project
Ref: https://www.youtube.com/watch?v=3HNyXCPDQ7Q
Sanity: https://www.sanity.io/docs/create-a-sanity-project

GITHUB
    create github repo
    checkout repo locally

SANITY BACKEND
    Create backend_sanity folder

    To initiate backend
        npm create sanity@latest -- --template clean --create-project "Sanity Project" --dataset <project_name-env>

    Other steps
        create .env file
        set projectId as REACT_APP_SANITY_PROJECTID in .env file
        set token as REACT_APP_SANITY_TOKEN in .env file
        set projectId in sanity.cli.js
        set projectId in sanity.config.js
        set dataset in sanity.config.js
        create schema files.

    To run backend
        cd sanity-project
        npm run dev

    To deploy for public accessibility
        cd <project-folder>
        run 'sanity deploy'
        provide hostname    

    To add a schema
        create <scheme>.js file under backend_sanity/schemas
        add .js file to index.js
        RUN: npm run dev


REACT FRONTEND
    To initiate project
        run 'npx create-react-app frontend_react'
        cd frontend_react
        npm install @sanity/client @sanity/image-url framer-motion node-sass react-icons    

    To run application
        cd frontend_react
        npm start


DEPLOYING
    To build     
        cd <frontend_react>
        run 'npm run build'
        drag and drop build folder to netlify
            Alternatively connect netlify to github repo and set subdirectory as build folder
        Add netlify hostname to sanity CORs origins in sanity backend by running 'sanity manage' from sanity backend folder
        Add custom domain in netlify
        Add custom hostname to CORs origin list

# deploying reach and sanity cms backend to netlify notes
Deploying react frontend_react
    signup to netlify.com
    return to project in vs code
    run 'npm run build' from inside /frontend_react project
    then drag and drop /build folder to netlify


Deploying sanity backend
    cd into /backend_sanity
    run 'sanity manage'
    browse to the API tab
    Select 'Add CORS origin'
    Copy the URL from your Netlify app
    Add the url to the CORs origin 
    and 'select 'Allow Credentials'
    Then save.


Hosting sanity backend
    Ref: https://www.sanity.io/docs/deployment
    cd to /backend_sanity
    run 'sanity deploy'
    specify hostname when prompted e.g 'https://oluorija.sanity.studio/'
    That's it.
    TODO: Access controls

# framer motion notes
Ref:
https://www.framer.com/motion/ (https://www.framer.com/learn/what-is-framer/)
https://www.npmjs.com/package/framer-motion

# Personal Website

This is a personal portfolio website coded in Typescript. It uses React and Vite. 

## How to Run

`npm run dev`: Starts the development server (defaults to port :5173).
`npm run host`: Starts the server and makes it available to other devices on your network.
`npm run build`: Builds the project for deployment.

## Design Strategy

The goal was to create a website that serves as an index for all of my projects, while still being visually appealing and easy to navigate. I wanted to ensure all of the interactions work on all types of devices, so the easiest choice was to create a content tab with consistent styling and reusable components. With this setup, it's simple to add new content tabs as I create new projects. 

The data for each tab is stored as a `const`. Each tab has "Core tab content" which can be conceptualized as metadata, containing a title, subtitle, URL, media, etc. With this setup, I can easily create multiple ways to view the data present in my tabs. For example, the ComponentPreview component uses title, subtitle, and media to create a clickable link to a relevant tab.

Added to this core tab content is the rest of my content, served as a `React Node`, which is the body of my explanation of each project. Each `content` section relies on reusable components like `ContentCard`, as well as other elements for links, media, and styling. 

The design also supports custom media, like on the `MFSBackend` page. Custom components can be used to visually represent large amounts of text data that cannot be easily explained in a video or image.

### Future Plans

The current design is intentionally simple, serving as a clean and functional portfolio. However, I think there's a way to tastefully incorporate some flavor. I think the final form of this website has some subtle, understated designs displayed in the content area or background. I'm still looking for inspiration.
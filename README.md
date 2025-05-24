📝 DevSphere — Modern Blog Web App
DevSphere is a modern and responsive blog application built with React and TypeScript. It integrates external API data, supports light/dark themes, and includes authentication with Clerk. Users can explore blogs, search by tags, save favorites, and browse the latest posts.

🔍 Features
📰 All Blogs Page
Fetches real blog articles from the Dev.to API, displaying titles, descriptions, tags, reactions, and publish dates.

🌗 Theme Switching
Users can toggle between light and dark modes. Theme state is managed globally with the Context API.

❤️ Favorite Blogs
Logged-in users can mark blogs as favorites. Favorite state is persisted using localStorage.

🔐 Authentication
Integrated with Clerk.dev for secure sign-in/sign-up, including social login (Google).

🔎 Search Functionality
Live search by blog tags with real-time filtering and result count.

🕓 Latest Blogs Page

Dashboard App
This is a simple dashboard application built with Next.js, TypeScript, Redux Toolkit, Axios, and TailwindCSS. The application fetches data from JSONPlaceholder API and allows users to view, save, and search for photos and posts. The saved items are persisted in the browser's local storage using Redux Toolkit.

Features
Two sections for displaying photos and posts
Save/Un-save functionality for photos and posts
Search bar for filtering items based on their titles
Pagination for photos and posts (20 items per page)
Saved items are persisted in the browser's local storage
Responsive design with TailwindCSS
Tech Stack
Next.js
TypeScript
Redux Toolkit
Axios
TailwindCSS
Installation
Clone the repository:


[git clone https://github.com/your-username/dashboard-app.git](https://github.com/Nshravankumar4/Frontend-Internship-Assessment.git)
Navigate to the project directory:


cd dashboard-app
Install dependencies:


npm install
Start the development server:


npm run dev
The application should now be running at http://localhost:3000.

Deployment
The application is deployed on Vercel or Netlify. You can access the live version at [deployment-url].

Docker Containerization (Optional)
The application can be containerized using Docker. Follow these steps:

Install Docker on your machine.
Build the Docker image:


docker build -t dashboard-app .
Run the Docker container:


docker run -p 3000:3000 dashboard-app
The application should now be running at http://localhost:3000.

Additional Design Framework (Optional)
You can optionally integrate an additional design framework like DaisyUI or Material UI for enhanced UI components. Follow the respective framework's installation and setup instructions.

License
This project is licensed under the MIT License.

# Flight Review Website

This project is a web application designed for users to review and rate flights, allowing them to share their experiences and help others make informed travel choices.

## Pages

### 1. Landing Page
The landing page introduces users to the website and provides an overview of the services. Here are the key elements of this page:
   - **Project Introduction**: Briefly describes the purpose of the website and how it benefits users.
   - **Features Overview**: Highlights key features, such as reviewing flights, tracking past reviews, and discovering flights reviewed by other users.
   - **Call to Action**: Prominent buttons for "Sign Up" or "Login" to encourage users to create an account and start reviewing.

<img src="public/screenshots/landingPage.jpg" alt="" width={200}/>

### 2. Authentication Page
This page is managed by **Clerk**, which provides a secure and user-friendly authentication experience:
   - **Sign Up**: New users can sign up with their email or via supported third-party providers.
   - **Login**: Existing users can log in to access their personalized flight review dashboard.

<img src="public/screenshots/authenticationPage.jpg" alt="" width={200}/>

### 3. Home Page
The home page is the main dashboard for logged-in users, providing a central hub for accessing and managing reviews. Features include:
   - **User’s Reviewed Flights**: A section displaying a list of flights the user has previously reviewed, including quick links to view or edit each review.
   - **Browse All Flights**: Users can explore a catalog of flights, with each flight offering options to read existing reviews or add a new review.
   - **Add a New Review**: A button that takes users to the review form, allowing them to create a new review for any flight in the catalog.

<img src="public/screenshots/homePAge.jpg" alt="" width={200}/>

### 4. Flights Page
This page preview flight cards which include:
   - **Flight Card**: Contains the flight information 
   - **Paginagtion**: paginate the flights whic each page conatins 5 flight cards 
   
<img src="public/screenshots/flightsPage.jpg" alt="" width={200}/>

### 5. Flight Page
This page allows users to create and submit a new review. Key elements include:
   - **Flight Rows Derails**: display all flight information 
   - **Add Review Button**: button popup a multi-step form to create a review 

<img src="public/screenshots/SingleFlight.jpg" alt="" width={200}/>

### 6. Review Popup Form
This page preview flight cards which include:
   - **Reviews Form**: Multi-step Form for enable user create his review
   - **Toaster**: send a toaster message to user after any action

   <img src="public/screenshots/reviewPopupForm.jpg" alt="" width={200}/>

### 7. Create Flight Page
   - **For Admin**: Enable Admin to Create Flight
   - **Create Flight Form**: Form to fill up flight information to create it.
   - **Rich Text Editor**: To ensure that discription display well.
   - **Toaster**: send a toaster message to user after any action

   <img src="public/screenshots/createFlight.jpg" alt="" width={200}/>

## Technologies Used
- **Next.js**: Framework for building the frontend and managing routing.
- **Prisma**: ORM for connecting to and interacting with the MongoDB database.
- **MongoDB**: Database for storing user, flight, and review data.
- **Clerk**: Authentication service that provides secure sign-up and login functionalities.
- **React Quill**: Rich text editor enabling users to format reviews with ease.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/flight-review-website.git
   cd flight-review-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**: Set up your environment variables by creating a `.env` file in the root directory and add DATABASE_URL. 
   and create `.env.local` and put others variables. Here’s a sample of required variables:

   ```plaintext
   
   DATABASE_URL="mongodb+srv://diaaeltaiby:75eMPovAtnzV4AMk@cluster0.mjijb.mongodb.net/FlyRate?retryWrites=true&w=majority&appName=Cluster0"

   CLERK_SECRET_KEY=sk_test_paMVtJh6EbZAaZVXYoLS7xYjSJrU2mvKRbYQHm5reD
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Z2xvcmlvdXMtYW5jaG92eS01Ny5jbGVyay5hY2NvdW50cy5kZXYk
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/home
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/api/auth/user/create
   ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

5. **Access the App**:
   Open your browser and go to `http://localhost:3000`.

## How to Use

- **Landing Page**: Explore the overview of the site and learn about its key features.
- **Authentication**: Log in or create an account through Clerk’s authentication system.
- **Home Page**: Access your reviewed flights, browse all available flights, and start reviewing.
- **Review Creation**: Submit new flight reviews with rich text formatting.
- **Review Page**: View, edit, or delete all of your past reviews.

## Future Improvements

- **Flight Search**: Add a search function to quickly find specific flights.
- **Enhanced Rating System**: Include a rating scale (e.g., stars or numbers) for more nuanced reviews.
- **Profile Page**: A dedicated profile page for users to manage personal information and review statistics.



<h1 align="center"><img src="/public/ecodeashbord.png" alt="ecobazar" width="100%"> </h1>

# Eco-Dashboard & Backend Framework 🌿

## Live Site - Fab 2024 🌐

Eco-Dashboard is a powerful web application designed to manage products, track sales, and monitor user activity. It features seamless integration with a live backend, providing real-time data and updates. The platform allows admins to add and remove products, track product sales, and gain insights into user engagement.

---

## Key Features 🔑

### Product Management & Sales Tracking 🛒
- Eco-Dashboard allows admins to easily **add and delete products** in the system, ensuring the inventory is always up-to-date.
- A **dynamic sales map** displays total sales across regions, offering real-time tracking and data.

### User Activity & Analytics 📊
- The platform tracks **active user activity**, providing real-time insights into which users are engaging with the site.
- **Detailed analytics** help admins optimize marketing and sales strategies based on user behavior.

### Live Backend & Prisma ORM - Database Integration 🔄
- **Live connection** between front-end, back-end, and database ensures smooth data flow and immediate reflection of changes (such as product additions and deletions) in the database.
- **Prisma ORM** simplifies database queries, ensuring a type-safe and efficient interaction with SQL databases. It enhances database maintenance and provides seamless access to relational data.

### Backend Framework: Express.js ⚙️
- **Express.js** serves as the core backend framework, handling API requests and routing, ensuring scalability and flexibility for server-side operations.
- It provides an **efficient environment** for building robust and high-performance server-side applications.

### Relational Database: PostgreSQL / MySQL 🗃️
- **PostgreSQL** and **MySQL** are used to store and manage relational data.
- Both databases are **highly reliable**, **scalable**, and optimized for fast querying, making them ideal for handling large datasets.

---

## Coming Soon: NestJS-Based Eco-Bazar Backend 🚀
- **NestJS** will be integrated into the Eco-Bazar backend for improved **scalability**, **maintainability**, and **performance**.
- **NestJS** provides modular architecture, **dependency injection**, and enhanced features for future backend upgrades. [back-end repo with ExpressJS](https://github.com/uforco/eco_js_server)

---

## Technologies Used 🛠️

- **TypeScript**: For static typing and improved code quality.
- **Shad-CN UI**: For sleek and responsive user interface components.
- **Redux Toolkit**: For state management and efficient data flow.
- **Next.js**: For server-side rendering, static site generation, and fast performance.
- **Prisma ORM**: For database management and seamless integration with SQL databases.
- **Express.js**: As the backend framework for handling requests and routing.
- **PostgreSQL / MySQL**: For relational database management.
- **NestJS** (Coming Soon): For a more modular and scalable backend architecture.

---

## Setup and Installation 📝

1. **Clone the repository:**
    ```bash
    git clone https://github.com/uforco/eco_admin_panel.git
    cd eco-dashboard
    ```

2. **Install dependencies with pnpm:**
    ```bash
    pnpm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add necessary environment variables for your database and API keys.

4. **Run the application:**
    ```bash
    pnpm dev
    ```

5. **Access the site:**
    Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the dashboard.

---

## Contributing 🤝

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

---

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

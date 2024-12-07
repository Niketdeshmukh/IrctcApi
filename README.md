# IrctcAPI - Train Reservation System

A RESTful API built using Node.js, Sequelize (with PostgreSQL), and other technologies for managing the train reservation system. This project includes user authentication, booking management, and model associations between users and bookings.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This is an API for managing train reservations, including the following features:

- User management (authentication, user roles).
- Booking management (creating and viewing bookings).
- Handling train seat availability and reservations.

---

## Tech Stack

- **Node.js**: Runtime environment for building the server.
- **Express.js**: Web framework for handling HTTP requests.
- **Sequelize**: ORM for interacting with PostgreSQL.
- **PostgreSQL**: Relational database used for storing data.
- **Bcrypt.js**: Used for password hashing.
- **JWT**: JSON Web Token for secure user authentication.
- **Nodemon**: Tool for automatically restarting the server during development.

---

## Installation

### Step 1: Clone the repository

```bash
git clone https://github.com/yourusername/IrctcAPI.git
cd IrctcAPI

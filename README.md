# 🍔 Food Delivery React Website

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.3.2-green)
![Redux](https://img.shields.io/badge/ReduxToolkit-2.9.0-purple)
![License](https://img.shields.io/badge/License-MIT-yellow)

A simple **Food Delivery Website** built with React, Redux Toolkit, and Tailwind CSS.  
Users can browse food categories, add items to the cart, view order summary, and see toast notifications when items are added.

---

## 🛠 Features

- Browse food items by categories
- Add / Remove items from cart
- Increment / Decrement quantity
- Real-time cart total, taxes, and delivery fee calculation
- Toast notifications for user actions (item added)
- Responsive design using Tailwind CSS
- Frontend state management with Redux Toolkit

---

## 🧰 Tech Stack

- **Frontend**: React 19.1.1, Tailwind CSS  
- **State Management**: Redux Toolkit  
- **Icons**: react-icons  
- **Notifications**: react-toastify  
- **Bundler**: Vite  

---

## 📁 Project Structure

```text
food-delivery-website/
├─ public/
├─ src/
│  ├─ assets/       # Images for food items
│  ├─ Components/   # React components (Card, Card2, Nav, etc.)
│  ├─ Context/      # UserContext for global state
│  ├─ Pages/        # Home.jsx
│  ├─ redux/        # Redux slices (cartSlice.js)
│  ├─ food.js       # Sample food data
│  └─ App.jsx
├─ package.json
└─ tailwind.config.js

---

⚡ Installation & Run Locally
bash
Copy code
# Clone the repository
git clone https://github.com/yourusername/food-delivery-react-site.git
cd food-delivery-react-site

# Install dependencies
npm install

# Run development server
npm run dev
Open http://localhost:5173 to view it in the browser.

---

👨‍💻 Usage
👆 Click on a category to filter food items

➕ Add items to cart with "Add to dish" button

🛒 View cart, update quantity, or remove items

💳 Click "Place Order" (UI only)

🔔 Toast notifications appear on actions

---

📜 License
This project is open source and free to use.

🍔 Food Delivery React Website [Live Demo](https://food-delivery-reactsite.netlify.app/)

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-skyblue?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-3.0-orange?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)


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

## ⚡ Installation & Run Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/food-delivery-react-site.git
cd food-delivery-react-site

# Install dependencies
npm install

# Run development server
npm run dev

Open http://localhost:5173
 to view it in the browser.



👨‍💻 Usage

👆 Click on a category to filter food items

➕ Add items to cart with "Add to dish" button

🛒 View cart, update quantity, or remove items

💳 Click "Place Order" (UI only)

🔔 Toast notifications appear on actions

📜 License

This project is open-source and free to use.

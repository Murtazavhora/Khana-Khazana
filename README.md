# 🍽️ Khana Khazana – Recipe Search Web App

Khana Khazana is a simple and responsive recipe search web application that allows users to find recipes by name, view ingredients, and read step-by-step cooking instructions.  
The app fetches real-time data from a public recipe API and displays it in a clean, user-friendly interface.

---

## 🚀 Features

- 🔍 Search recipes by dish name  
- 📋 View detailed recipe information in a popup modal  
- 🧂 Dynamically generated ingredients list  
- 📝 Step-by-step cooking instructions  
- ❌ Easy-to-close recipe details modal  
- 📱 Responsive design for desktop and mobile  

---

## 🛠️ Tech Stack

- **HTML5** – Structure  
- **CSS3** – Styling & layout  
- **Vanilla JavaScript (ES6)** – Logic & DOM manipulation  
- **TheMealDB API** – Recipe data source  

---

## ⚙️ How It Works

1. User enters a recipe name in the search box  
2. App fetches matching recipes from TheMealDB API  
3. Results are displayed as recipe cards  
4. Clicking **View Recipe** opens a detailed popup with:
   - Ingredients
   - Measurements
   - Cooking instructions  

---

## 📂 Project Structure

Khana-Khazana/
│
├── index.html # Main HTML file
├── style.css # Styling
├── script.js # JavaScript logic
└── README.md # Project documentation


---

## 🔗 API Used

- **TheMealDB API**  
  Endpoint used:
https://www.themealdb.com/api/json/v1/1/search.php?s={recipeName}


---

## 🧠 Key Learnings

- Working with third-party APIs  
- Handling asynchronous JavaScript using `async/await`  
- Defensive programming (handling null API responses)  
- Dynamic DOM creation and event handling  
- Building reusable UI components (modal popup)  

---

## 📌 Future Improvements

- ❤️ Save favorite recipes (localStorage)  
- 🌙 Dark mode  
- ⏳ Loading spinner / skeleton UI  
- 🖼️ Show recipe images inside popup  

---

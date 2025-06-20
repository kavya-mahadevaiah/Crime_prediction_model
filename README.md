# 🧠 Crime Prediction Model

A full-stack machine learning web application that predicts crime rates based on socioeconomic indicators using a trained CatBoost regression model.  
Built with **Flask + React + Tailwind**, and deployed on **Render** (backend) and **Vercel** (frontend).

---

## 🔗 Live Demo

- 🌐 Frontend: [https://crime-prediction-model-rho.vercel.app](https://crime-prediction-model-rho.vercel.app)  
- ⚙️ Backend: [https://crime-prediction-model-backend.onrender.com](https://crime-prediction-model-backend.onrender.com)

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Chart.js, Vite
- **Backend**: Flask, Python, NumPy, joblib, Flask-CORS
- **Model**: CatBoost Regressor (trained in Colab)
- **Deployment**:
  - Vercel (Frontend)
  - Render (Backend)
  - GitHub (Version Control)

---

## 📊 Features

- ✅ User input for 5 key features:
  - Population
  - Unemployment Rate
  - Median Household Income
  - Education
  - Poverty
- ✅ Real-time crime prediction using trained ML model
- ✅ Visualized prediction with a bar chart
- ✅ Loading indicator and error handling
- ✅ Fully deployed and mobile responsive

---

## 🚀 How to Run Locally

### 1. Clone the Repo

git clone https://github.com/your-username/Crime_prediction_model_backend.git
git clone https://github.com/your-username/Crime_prediction_model_frontend.git

### 2.  Run the Backend
<pre>
cd Crime_prediction_model_backend
pip install -r requirements.txt
python app.py
</pre>

### 3.  Run the Frontend
<pre>
cd ../Crime_prediction_model_frontend
npm install
npm run dev
</pre>


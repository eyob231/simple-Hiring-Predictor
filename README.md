Hiring Predictor

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Demo](#demo)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Folder Structure](#folder-structure)
8. [Contributing](#contributing)
9. [License](#license)

---

## Introduction

The **Hiring Predictor** is a web application built using React.js for the frontend and Flask for the backend. It predicts the likelihood of getting hired based on factors such as field of study, years of experience, certifications, and interview score. The application uses a machine learning model (Random Forest Classifier) trained on a dataset of hiring-related features.

This project demonstrates the integration of a machine learning model with a full-stack web application.

---

## Features

- Predicts the probability of getting hired based on user input.
- Built with React.js for the frontend and Flask for the backend.
- Uses a Random Forest Classifier for predictions.
- Handles errors gracefully and provides meaningful feedback to the user.
- Supports CORS for seamless communication between frontend and backend.

---

## Prerequisites

Before running this project, ensure you have the following installed:

- Python 3.7+ (with `pip`)
- Node.js and npm
- A code editor (e.g., VS Code)

---

## Installation

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/eyob231/hiring-predictor.git
cd hiring-predictor

Step 2: Set Up the Backend 

    Navigate to the backend/ directory: 
    bash
     

 
1
cd backend
 
 

Install the required Python packages: 
bash
 
 
1
pip install flask scikit-learn joblib flask-cors pandas
 
 

Train the machine learning model: 
bash
 
 
1
python model.py
 
 

This will generate the hiring_model.joblib file. 

Start the Flask server: 
bash
 

     
    1
    python app.py
     
     

    The backend should now be running at http://localhost:5000. 
     

Step 3: Set Up the Frontend 

    Navigate to the frontend/ directory: 
    bash
     

 
1
cd ../frontend
 
 

Install the required Node.js packages: 
bash
 
 
1
npm install
 
 

Start the React development server: 
bash
 

     
    1
    npm start
     
     

    The frontend should now be running at http://localhost:3000. 
     

Usage 

    Open your browser and navigate to http://localhost:3000.
    Fill out the form with the following details:
        Field of Study : Select your field of study (e.g., Computer Science, Business, Engineering).
        Years of Experience : Enter your years of professional experience.
        Certifications : Check if you have relevant certifications.
        Interview Score : Enter your interview score (out of 100).
         
    Click the "Predict" button.
    The application will display the probability of getting hired based on the provided inputs.
     

Folder Structure
hiring-predictor/
├── backend/
│   ├── app.py          # Flask app
│   ├── model.py        # Model training script
│   ├── hiring_model.joblib  # Trained model file
│   ├── hiring_data.csv  # Dataset
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js       # React component
│   │   └── index.js     # Entry point for React app
│   └── package.json
└── README.md

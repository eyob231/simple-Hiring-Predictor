import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from joblib import dump

# Load dataset
data = pd.read_csv('hiring_data.csv')

# Encode categorical variables
label_encoder = LabelEncoder()
data['Field_of_Study'] = label_encoder.fit_transform(data['Field_of_Study'])
data['Certifications'] = data['Certifications'].map({'Yes': 1, 'No': 0})
data['Hired'] = data['Hired'].map({'Yes': 1, 'No': 0})

# Features and target
X = data[['Field_of_Study', 'Years_of_Experience', 'Certifications', 'Interview_Score']]
y = data['Hired']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Save model
dump(model, 'hiring_model.joblib')
print("Model saved successfully as 'hiring_model.joblib'.")
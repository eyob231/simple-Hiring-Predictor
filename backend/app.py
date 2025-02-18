from flask import Flask, request, jsonify
from joblib import load
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load the trained model
model = load('hiring_model.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Parse incoming JSON data
        data = request.get_json()

        # Create a DataFrame with the same structure as the training data
        input_data = pd.DataFrame({
            'Field_of_Study': [data['Field_of_Study']],
            'Years_of_Experience': [data['Years_of_Experience']],
            'Certifications': [data['Certifications']],
            'Interview_Score': [data['Interview_Score']]
        })

        # Make the prediction
        prediction = model.predict_proba(input_data)[0][1]

        # Return the result as JSON
        return jsonify({'probability_of_hiring': float(prediction)})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
import cv2
import numpy as np
import os
import tensorflow as tf
from keras.models import load_model

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
CORS(app)
app.config['UPLOAD_FOLDER'] = 'uploads'

# Load the pre-trained model
model = load_model('skin_analysis_model.keras')

# Define the categories
categories = ['acne', 'dark circles', 'wrinkles', 'eye bags', 'pores', 'pigment', 'healthy skin']

# Serve React app's static files
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        # Always return the React app's index.html for any unknown route
        return send_from_directory(app.static_folder, 'index.html')

# Define a function to preprocess the image
def preprocess_image(image_path):
    image = cv2.imread(image_path)
    image = cv2.resize(image, (224, 224))
    image = image / 255.0
    return np.expand_dims(image, axis=0)

@app.route('/start')
def start_page():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/upload')
def upload_page():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/camera')
def camera_page():
    return send_from_directory(app.static_folder, 'index.html')

# API route for handling image uploads and processing
@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    if file:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        # Preprocess the image
        image = preprocess_image(filepath)

        # Make prediction
        predictions = model.predict(image)
        category_idx = np.argmax(predictions[0])
        category = categories[category_idx]
        confidence = float(np.max(predictions[0]))
        suggested_products = get_suggested_products(category)

        return jsonify({
            "category": category,
            "confidence": confidence,
            "suggested_products": suggested_products
        })

# Function to suggest products based on detected skin issues
def get_suggested_products(category):
    # Replace this with your actual logic to suggest products based on the category
    products = {
        "acne": ["Product A", "Product B"],
        "dark circles": ["Product C", "Product D"],
        "wrinkles": ["Product E", "Product F"],
        "eye bags": ["Product G", "Product H"],
        "pores": ["Product I", "Product J"],
        "pigment": ["Product K", "Product L"],
        "healthy skin": ["Product M", "Product N"]
    }
    return products.get(category, [])

if __name__ == '__main__':
    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        os.makedirs(app.config['UPLOAD_FOLDER'])
    app.run(debug=True)

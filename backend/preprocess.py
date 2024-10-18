import cv2
import numpy as np
import os
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

# Define the categories for your problem
categories = ['acne', 'dark circles', 'wrinkles', 'eye bags', 'pores', 'pigment', 'healthy skin']

# Define the directory where your data is located
data_directory = 'C:\\Users\\m\\OneDrive\\Bureau\\dataset skin image'

# Define a function to preprocess the images
def preprocess_image(image_path):
    # Load the image using cv2
    image = cv2.imread(image_path)

    # Resize the image to 224x224
    image = cv2.resize(image, (224, 224))

    # Normalize the image
    image = image / 255.0

    return image

# Define a function to load and preprocess the data
def load_and_preprocess_data():
    images = []
    labels = []

    # Loop over the categories
    for i, category in enumerate(categories):
        # Get a list of all images in this category
        image_paths = os.listdir(os.path.join(data_directory, category))

        # Loop over the images
        for image_path in image_paths:
            # Preprocess the image
            image = preprocess_image(os.path.join(data_directory, category, image_path))

            # Add the image and label to the lists
            images.append(image)
            labels.append(i)

    # Convert the lists to numpy arrays
    images = np.array(images)
    labels = np.array(labels)

    # Split the data into training and test sets
    X_train, X_test, y_train, y_test = train_test_split(images, labels, test_size=0.2, random_state=42)

    return X_train, X_test, y_train, y_test

# Load and preprocess the data
X_train, X_test, y_train, y_test = load_and_preprocess_data()

# Visualize the first image in the training set
plt.imshow(X_train[0])
plt.title('Première image prétraitée')
plt.show()

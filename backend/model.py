import cv2
import numpy as np
import os
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout
from keras.regularizers import l2
from keras.callbacks import EarlyStopping
from tensorflow.keras.preprocessing.image import ImageDataGenerator


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

# Create a sequential model
model = Sequential()

# Add the first convolutional layer with L2 regularization
model.add(Conv2D(32, (3, 3), activation='relu', kernel_regularizer=l2(0.01), input_shape=(224, 224, 3)))

# Add a max pooling layer
model.add(MaxPooling2D(pool_size=(2, 2)))

# Add another convolutional layer with L2 regularization
model.add(Conv2D(64, (3, 3), activation='relu', kernel_regularizer=l2(0.01)))

# Add another max pooling layer
model.add(MaxPooling2D(pool_size=(2, 2)))

# Flatten the tensor output from the previous layer
model.add(Flatten())

# Add a dense layer with dropout
model.add(Dense(64, activation='relu'))
model.add(Dropout(0.5))

# Add the output layer
model.add(Dense(len(categories), activation='softmax'))

# Compile the model
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

# Define the early stopping criteria
early_stopping = EarlyStopping(monitor='val_loss', patience=3)

# Define the data augmentation
datagen = ImageDataGenerator(
    rotation_range=20,
    width_shift_range=0.2,
    height_shift_range=0.2,
    horizontal_flip=True)

# Fit the model with data augmentation and early stopping
model.fit(datagen.flow(X_train, y_train, batch_size=32),
          steps_per_epoch=len(X_train) // 32, epochs=10,
          validation_data=(X_test, y_test),
          callbacks=[early_stopping])


# Save the model
model.save('skin_analysis_model.keras')

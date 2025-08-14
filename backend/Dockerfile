# Use Python image
FROM python:3.9

# Install system dependencies for OpenCV
RUN apt-get update && apt-get install -y \
    libgl1 \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
 && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy requirements and install them
COPY requirements.txt .
RUN pip install --upgrade pip \
 && pip install --default-timeout=1000 --no-cache-dir -r requirements.txt

# Copy the rest of your backend code
COPY . .

# Expose Flask port
EXPOSE 5000

# Start Flask
CMD ["python", "app.py"]

# Use an official Python runtime as a parent image
FROM node:9.3.0

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
#RUN npm install pm2 -g
RUN npm install

# Make port 8888 available to the world outside this container
# This is the server port
EXPOSE 7777

# Define environment variable
ENV NAME World

# Entrypoint script
RUN cp docker-entrypoint.sh /usr/local/bin/ && \
    chmod +x /usr/local/bin/docker-entrypoint.sh

# Run app.py when the container launches
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Expose port (must match Express app's port)
EXPOSE 3000

# Start the Node.js app
CMD ["npm", "run", "dev"]

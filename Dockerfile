FROM node:18


WORKDIR /app


COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build


# Start the application
CMD [ "npm", "run", "start:dev" ]
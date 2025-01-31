const path = require("path"); // Make sure to include this line

module.exports = {
  mode: "development", // Set the mode to development
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Adjust the output path as needed
  },
  devServer: {
    static: {
      directory: path.join(__dirname), // Serve static files from the src directory
    },
    compress: true,
    port: 8080, // Port number for the dev server
  },
};

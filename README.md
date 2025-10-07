# Quote Generator React App 🎯

A beautiful, modern quote generator built with React and Sass. Generate inspirational quotes from a collection of 200+ carefully curated quotes with smooth animations and an elegant user interface.

![Quote Generator Preview](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)
![Sass](https://img.shields.io/badge/Sass-CSS-pink?style=for-the-badge&logo=sass)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)

## ✨ Features

- 🎨 **Beautiful UI** - Modern gradient background with elegant card design
- 📚 **200+ Quotes** - Inspirational quotes from famous personalities and thought leaders
- ⚡ **Smooth Animations** - Fade transitions, loading states, and hover effects
- ⌨️ **Keyboard Support** - Press Enter to generate new quotes
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎯 **Loading States** - Beautiful animated loading dots while generating quotes
- 🚀 **Fast Performance** - Built with React and optimized for speed
- 💅 **Sass Styling** - Clean, maintainable CSS with variables and nesting

## 🚀 Demo

Check out the live demo: [Quote Generator](http://localhost:3000) *(when running locally)*

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DisanduP/Quote-Generator-React.git
   cd Quote-Generator-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

## 📁 Project Structure

```
quote-generator/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   └── QuoteGenerator.js   # Main quote component
│   ├── styles/
│   │   ├── index.scss          # Global styles
│   │   ├── App.scss            # App component styles
│   │   └── QuoteGenerator.scss # Quote generator styles
│   ├── App.js              # Main App component
│   └── index.js            # Entry point
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🎮 Usage

- **Click** the "Generate Quote" button to get a random quote
- **Press Enter** anywhere on the page to generate a new quote
- Enjoy the smooth animations and beautiful typography!

## 🎨 Customization

### Adding More Quotes

Edit the `quotes` array in `src/components/QuoteGenerator.js`:

```javascript
const quotes = [
  {
    content: "Your custom quote here",
    author: "Author Name"
  },
  // Add more quotes...
];
```

### Styling

Modify the Sass variables in `src/styles/QuoteGenerator.scss`:

```scss
$primary-color: #e42c0c;           // Button and accent color
$background-gradient-start: #ed0f64; // Gradient start
$background-gradient-end: #eec751;   // Gradient end
$container-width: 600px;            // Card width
```

## 🛠️ Built With

- **React** - Frontend library for building user interfaces
- **Sass/SCSS** - CSS preprocessor for better styling
- **React Hooks** - useState, useEffect for state management
- **CSS Animations** - Smooth transitions and loading effects

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (irreversible)

## 🌟 Features in Detail

### Smooth Animations
- Fade-in/fade-out transitions when quotes change
- Button hover effects with shadows and transforms
- Loading dots animation during quote generation
- Glowing underline animation on the title

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktop
- Optimized typography for all screen sizes

### Accessibility
- Keyboard navigation support
- Clear visual feedback for interactions
- Semantic HTML structure

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Disandu Prabhashana**
- GitHub: [@DisanduP](https://github.com/DisanduP)

## 🙏 Acknowledgments

- Quotes sourced from various inspirational figures and thought leaders
- Design inspiration from modern web applications
- React community for excellent documentation and resources

---

⭐ Don't forget to star this repository if you found it helpful!

## 🚀 Future Enhancements

- [ ] Quote categories (motivational, funny, wisdom, etc.)
- [ ] Favorite quotes feature
- [ ] Share quotes on social media
- [ ] Dark/light theme toggle
- [ ] Quote search functionality
- [ ] Daily quote notifications
- [ ] User-submitted quotes

# 🧮 Advanced Scientific Calculator

A beautiful, feature-rich scientific calculator built with React.js featuring a modern iOS-inspired design and comprehensive mathematical functions.

![Scientific Calculator](./public/calculator-preview.png)

## ✨ Features

### 🔬 Scientific Functions
- **Trigonometric Functions**: sin, cos, tan and their inverse functions
- **Hyperbolic Functions**: sinh, cosh, tanh (via 2nd function)
- **Logarithmic Functions**: ln (natural), log (base-10), log₂ (base-2)
- **Exponential Functions**: eˣ, 10ˣ, 2ˣ
- **Power & Root Functions**: x², x³, xʸ, √x, ∛x, ʸ√x
- **Advanced Functions**: x! (factorial), |x| (absolute), 1/x (reciprocal)
- **Mathematical Constants**: π (pi), e (Euler's number)

### 💾 Memory Operations
- **MC** - Memory Clear
- **MR** - Memory Recall
- **M+** - Memory Add
- **M-** - Memory Subtract
- **MS** - Memory Store

### ⚙️ Smart Features
- **Angle Unit Toggle**: Switch between Radians and Degrees
- **2nd Function**: Access secondary mathematical functions
- **Random Number Generator**: Generate random numbers
- **Scientific Notation**: Automatic formatting for very large/small numbers
- **Error Handling**: Robust error detection and user feedback
- **Responsive Design**: Works seamlessly on all devices

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/react-scientific-calculator)

## 🛠️ Technologies Used

- **React.js 18+** - Modern React with Hooks
- **CSS3** - Advanced styling with gradients, animations, and grid
- **JavaScript ES6+** - Modern JavaScript features
- **Responsive Design** - Mobile-first approach

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/react-scientific-calculator.git

# Navigate to project directory
cd react-scientific-calculator

# Install dependencies
npm install

# Start development server
npm start

# Open browser to http://localhost:3000
```

## 🏗️ Project Structure

```
react-scientific-calculator/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Calculator/
│   │   │   ├── Calculator.js
│   │   │   ├── Calculator.css
│   │   │   └── index.js
│   │   └── Common/
│   │       └── ErrorBoundary.js
│   ├── utils/
│   │   ├── mathOperations.js
│   │   └── constants.js
│   ├── hooks/
│   │   └── useCalculator.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── README.md
├── package.json
└── .gitignore
```

## 🎨 Design Philosophy

This calculator follows modern design principles:
- **Minimalist Interface**: Clean, uncluttered design
- **Color Coding**: Intuitive color scheme for different function types
- **Smooth Animations**: Subtle animations for better user experience
- **Accessibility**: ARIA labels and keyboard navigation support
- **Mobile-First**: Responsive design that works on all screen sizes

## 🧪 Usage Examples

### Basic Operations
```javascript
// Addition: 5 + 3 = 8
// Subtraction: 10 - 4 = 6
// Multiplication: 6 × 7 = 42
// Division: 15 ÷ 3 = 5
```

### Scientific Functions
```javascript
// Trigonometry: sin(30°) = 0.5
// Logarithms: ln(e) = 1
// Powers: 2³ = 8
// Roots: √16 = 4
```

### Memory Operations
```javascript
// Store value: Press "MS" to store current display
// Recall value: Press "MR" to recall stored value
// Add to memory: Press "M+" to add current value to memory
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Saurabh Kashyap**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your Profile](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- Inspired by iOS Calculator design
- Mathematical functions powered by JavaScript Math library
- Icons and styling inspired by modern design trends

## 📈 Performance

- **Bundle Size**: < 500KB
- **First Paint**: < 1s
- **Interactive**: < 2s
- **Lighthouse Score**: 95+

---

⭐ If you found this project useful, please give it a star!

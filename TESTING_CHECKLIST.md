# 🧪 EXTREME TESTING CHECKLIST - Scientific Calculator
## Comprehensive Test Plan for Bug-Free Release

### 📊 BASIC ARITHMETIC TESTS
- [ ] 9 × 6 = 54
- [ ] 123 + 456 = 579  
- [ ] 1000 - 999 = 1
- [ ] 144 ÷ 12 = 12
- [ ] 5.5 + 2.3 = 7.8
- [ ] 0.1 + 0.2 = 0.3

### 🔢 EDGE CASES - NUMBERS
- [ ] Division by zero: 5 ÷ 0 = Error/Infinity
- [ ] Very large numbers: 999999999 × 999999999
- [ ] Very small decimals: 0.0001 × 0.0001
- [ ] Negative numbers: -5 + 3 = -2
- [ ] Multiple decimals: 1.2.3 (should ignore second decimal)
- [ ] Leading zeros: 007 = 7

### 🧮 SCIENTIFIC FUNCTIONS
- [ ] sin(π/2) = 1 (in radians)
- [ ] sin(90) = 1 (in degrees)  
- [ ] cos(0) = 1
- [ ] tan(π/4) = 1
- [ ] ln(e) = 1
- [ ] log(100) = 2
- [ ] √16 = 4
- [ ] 2² = 4
- [ ] 5! = 120
- [ ] |−5| = 5

### 🔄 MODE SWITCHING
- [ ] RAD/DEG toggle works
- [ ] sin(90) in DEG mode = 1
- [ ] sin(90) in RAD mode ≠ 1
- [ ] 2nd function toggle
- [ ] Inverse trig functions work

### 💾 MEMORY OPERATIONS
- [ ] MS: Store 42
- [ ] MR: Recall 42
- [ ] M+: Add 10 to memory (should be 52)
- [ ] M-: Subtract 5 from memory (should be 47)
- [ ] MC: Clear memory (should be 0)

### 📱 USER INTERACTION EDGE CASES
- [ ] Multiple operator presses: 5 + + + 3 = 8
- [ ] Clear (C) vs All Clear (AC)
- [ ] Percentage: 50% = 0.5
- [ ] Sign toggle: 5 → -5 → 5
- [ ] Decimal handling: .5 = 0.5
- [ ] Expression overflow: Long calculations

### 🚨 ERROR HANDLING
- [ ] Invalid operations show "Error"
- [ ] Error auto-clears after 3 seconds
- [ ] sqrt(-1) = Error
- [ ] ln(-1) = Error  
- [ ] 0! = 1
- [ ] (-1)! = Error

### 🎯 EXPRESSION DISPLAY
- [ ] Shows: "8 × 7 = 56" correctly
- [ ] Shows: "sin(0.5) = 0.479..."
- [ ] Shows: "Memory: 42" for MR
- [ ] Shows: "25% = 0.25"
- [ ] Expression scrolls for long calculations

### ⌨️ KEYBOARD SUPPORT  
- [ ] Number keys work
- [ ] +, -, *, / work
- [ ] Enter = equals
- [ ] Escape = all clear
- [ ] Backspace = clear

### 📱 RESPONSIVE DESIGN
- [ ] Works on mobile (480px)
- [ ] Works on tablet (768px)
- [ ] Buttons accessible with touch
- [ ] No layout breaks on small screens

### 🎨 UI/UX TESTS
- [ ] All buttons hover properly
- [ ] All buttons press properly  
- [ ] Colors correct (orange ops, blue sci, green equals)
- [ ] Status indicators work (RAD, M, 2nd)
- [ ] Wide zero button works
- [ ] Footer text visible

---
## 🚦 TEST RESULTS WILL BE UPDATED BELOW

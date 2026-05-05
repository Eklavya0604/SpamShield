

## 🔍 Overview

SpamShield is a full-stack spam detection application that takes email text as input and classifies it as either **Spam** or **Not Spam (Ham)** using trained machine learning models. The frontend is built with HTML, CSS, and JavaScript for a smooth user experience, while the backend leverages Python with two powerful ML algorithms — **Naive Bayes** and **Logistic Regression**.

---

## ✨ Features

- 📧 **Real-time Email Classification** — Instantly detects whether an email is spam or not
- 🤖 **Dual ML Models** — Uses both Naive Bayes and Logistic Regression for accurate predictions
- 📊 **Confidence Score** — Displays the model's confidence percentage for each prediction
- 🎨 **Clean Web UI** — Intuitive and responsive interface built with HTML, CSS & JavaScript
- ⚡ **Fast & Lightweight** — Optimized for quick predictions with minimal latency
- 🔄 **Model Comparison** — Compare results between Naive Bayes and Logistic Regression

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| HTML5 | Structure and layout of the web interface |
| CSS3 | Styling, animations, and responsive design |
| JavaScript | Dynamic interactions and API communication |

### Backend & ML
| Technology | Purpose |
|------------|---------|
| Python 3.8+ | Core backend and ML pipeline |
| scikit-learn | Machine learning models and vectorization |
| Naive Bayes | Probabilistic spam classifier |
| Logistic Regression | Linear spam classifier |
| Flask / FastAPI | Web server and REST API *(if applicable)* |
| pandas | Data loading and preprocessing |
| NumPy | Numerical computations |
| NLTK / re | Text preprocessing and cleaning |

---

## ⚙️ How It Works

```
User Input (Email Text)
        │
        ▼
  Text Preprocessing
  (Lowercase → Remove Punctuation → Tokenize → Remove Stopwords → Stemming)
        │
        ▼
  TF-IDF Vectorization
        │
        ▼
  ┌─────────────────────────┐
  │   ML Model Prediction   │
  │  ┌──────────────────┐   │
  │  │   Naive Bayes    │   │
  │  └──────────────────┘   │
  │  ┌──────────────────┐   │
  │  │Logistic Regression│  │
  │  └──────────────────┘   │
  └─────────────────────────┘
        │
        ▼
  Result: SPAM 🚫 or HAM ✅ + Confidence Score
        │
        ▼
  Display on Web Interface
```

---

## 🤖 ML Models

### 1. Naive Bayes (Multinomial)
- A **probabilistic classifier** based on Bayes' theorem
- Works well with text classification and word frequency features
- Fast to train and highly efficient for spam detection
- Assumes feature independence (word probabilities)

### 2. Logistic Regression
- A **linear classification model** that predicts probabilities
- Handles high-dimensional text features effectively
- Produces well-calibrated confidence scores
- Often achieves higher accuracy on complex datasets

### Training Dataset
- The models are trained on a labeled email dataset (e.g., SMS Spam Collection / Enron Email Dataset)
- Labels: `spam` and `ham` (not spam)
- Features: TF-IDF weighted word vectors

### Model Performance (Example)

| Model | Accuracy | Precision | Recall | F1-Score |
|-------|----------|-----------|--------|----------|
| Naive Bayes | ~97% | ~96% | ~95% | ~95.5% |
| Logistic Regression | ~98% | ~97% | ~96% | ~96.5% |

> *Note: Metrics may vary based on dataset and training configuration.*

---

## 📁 Project Structure

```
SpamShield/
│
├── frontend/
│   ├── index.html          # Main HTML page
│   ├── style.css           # Stylesheet
│   └── script.js           # Frontend JavaScript logic
│
├── backend/
│   ├── app.py              # Flask/FastAPI server
│   ├── model.py            # ML model loading & prediction
│   ├── train.py            # Model training script
│   └── preprocess.py       # Text preprocessing utilities
│
├── models/
│   ├── naive_bayes.pkl     # Saved Naive Bayes model
│   ├── logistic_model.pkl  # Saved Logistic Regression model
│   └── vectorizer.pkl      # Saved TF-IDF vectorizer
│
├── data/
│   └── spam_dataset.csv    # Training dataset
│
├── requirements.txt        # Python dependencies
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- A modern web browser

### 1. Clone the Repository

```bash
git clone https://github.com/Eklavya0604/SpamShield.git
cd SpamShield
```

### 2. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 3. Train the Models (if not already trained)

```bash
python backend/train.py
```

> This will generate `.pkl` model files in the `/models` directory.

### 4. Start the Backend Server

```bash
python backend/app.py
```

The server will start at `http://localhost:5000`

### 5. Open the Frontend

Open `frontend/index.html` in your browser, or if using a live server:

```bash
# Using VS Code Live Server or any static server
```

---

## 📖 Usage

1. Open the SpamShield web app in your browser
2. Paste or type the email content into the text box
3. Click the **"Check Email"** button
4. View the result:
   - ✅ **HAM** — The email is legitimate
   - 🚫 **SPAM** — The email is spam
5. See the confidence score and predictions from both models

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Eklavya**  
GitHub: [@Eklavya0604](https://github.com/Eklavya0604)

---

<p align="center">Made with ❤️ by Eklavya | SpamShield — Keep your inbox clean! 🛡️</p>

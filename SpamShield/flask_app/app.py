from flask import Flask, render_template, request
import pickle
import os

app = Flask(__name__, 
            template_folder='C:\\Users\\adity\\OneDrive\\Desktop\\spamshieldp\\loginsignup\\flask_app\\templates', 
            static_folder='C:\\Users\\adity\\OneDrive\\Desktop\\spamshieldp\\loginsignup\\public')

# Update the path to the pickle files if they are in a different directory
model = pickle.load(open('C:\\Users\\adity\\OneDrive\\Desktop\\spamshieldp\\loginsignup\\flask_app\\logistic_regression.pkl', 'rb'))
feature_extraction = pickle.load(open('C:\\Users\\adity\\OneDrive\\Desktop\\spamshieldp\\loginsignup\\flask_app\\feature_extraction.pkl', 'rb'))

def predict_mail(input_text):
    input_user_mail = [input_text]
    input_data_features = feature_extraction.transform(input_user_mail)
    prediction = model.predict(input_data_features)
    return prediction

@app.route('/', methods=['GET', 'POST'])
def analyze_mail():
    if request.method == 'POST':
        mail = request.form.get('mail')
        predicted_mail = predict_mail(input_text=mail)
        return render_template('index.html', classify=predicted_mail)

    return render_template('index.html')

@app.route('/login-success', methods=['POST'])
def login_success():
    data = request.get_json()
    print(f"Received data: {data}")
    return {"message": "Login successful!"}, 200



@app.route('/idea', methods=['GET'])
def idea():
    return app.send_static_file('idea.html')

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('C:\\Users\\adity\\OneDrive\\Desktop\\spamshieldp\\loginsignup\\public', path)


if __name__ == '__main__':
    app.run(debug=True, port=5000)

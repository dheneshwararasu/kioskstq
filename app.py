from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/next')
def next():
    return render_template('next.html')

@app.route('/processpayment')
def processpayment():
    return render_template('processpayment.html')

if __name__ == '__main__':
    app.run(debug=True)

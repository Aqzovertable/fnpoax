from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# Хранилище сообщений
messages = []

@app.route('/')
def home():
    return render_template('forum.html', messages=messages)

@app.route('/new_message', methods=['POST'])
def new_message():
    author = request.form['author']
    message = request.form['message']
    messages.append({'author': author, 'message': message})
    return redirect('/')

if __name__ == '__main__':
    app.run()
from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
from dotenv import  load_dotenv
import os
load_dotenv()


app = Flask(__name__)
app.secret_key = "benack"

mail_settings = {
    "MAIL_SERVER": "smtp.gmail.com",
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.getenv("EMAIL"),
    "MAIL_PASSWORD": os.getenv("PASSWORD")
}

app.config.update(mail_settings)

mail = Mail(app)

class Contact:
    def __init__(self, name, email, message):
        self.name = name
        self.email = email
        self.message = message



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send', methods=["GET", "POST"])
def send():
    if request.method == "POST":
        formContact = Contact(
            request.form["name"],
            request.form["email"],
            request.form["message"],
        )
        
        msg = Message(
            subject = f"PORTFOLIO: {formContact.name} send a message from portfolio",
            sender = app.config.get("MAIL_USERNAME"),
            recipients = ['bentobenack@gmail.com'],
            body = f'''
            {formContact.name} with e-email {formContact.email}, send you the following message:
            
            {formContact.message}
            '''
        )
        
        mail.send(msg)
        
        flash('Message sent successfully')
        
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=False)
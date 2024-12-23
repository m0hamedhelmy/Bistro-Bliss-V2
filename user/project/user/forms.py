from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()
    phone_no = forms.CharField(max_length=20)
    address = forms.CharField(max_length=255)  # New address field

    class Meta:
        model = User
        fields = ['username', 'email', 'phone_no', 'address', 'password1', 'password2']

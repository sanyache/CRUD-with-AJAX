# -*- coding: utf-8 -*-
from django import forms
from models import Book

class BookForm(forms.ModelForm):


    class Meta:
        model = Book
        fields = ('title', 'publication_date', 'author', 'price', 'pages', 'book_type',)
        labels = {'book_type': 'вибір'}
        attrs = {'book_type': 'choices'}
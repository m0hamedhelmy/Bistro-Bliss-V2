from django.db import models

class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Reservation(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    date = models.DateField()
    time = models.TimeField()
    number_of_guests = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.name} - {self.date} {self.time}"

class Order(models.Model):
    menu_item = models.ForeignKey(MenuItem, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    order_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.menu_item.name} x {self.quantity}"

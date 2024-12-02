from rest_framework import viewsets
from .models import MenuItem, Reservation, Order

class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()

from django.db import models


# Create your models here.
class SalesPerson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100)

    def __str__(self):
        return self.employee_id


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    address = models.CharField(max_length=100)

    def __str__(self):
        return self.first_name


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

    def __str__(self):
        return self.vin


class Sale(models.Model):
    salesperson = models.ForeignKey(
        SalesPerson, related_name="sales", on_delete=models.CASCADE
    )
    customer = models.ForeignKey(
        Customer, related_name="sales", on_delete=models.CASCADE
    )
    automobile = models.ForeignKey(
        AutomobileVO, related_name="sales", on_delete=models.CASCADE
    )
    price = models.CharField(max_length=10)

    def __str__(self):
        return str(self.customer)

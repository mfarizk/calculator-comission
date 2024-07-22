from django.db import models

# Create your models here.

class Employee(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Job(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    period_job = models.DateField()
    amount = models.IntegerField()
    gross_profit = models.DecimalField(max_digits=10, decimal_places=2)
    commission = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def save(self, *args, **kwargs):
        self.commission = self.gross_profit * 0.10
        super().save(*args, **kwargs)
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


bloodtype = [
    ("A RhD positive (A+)","A+"),
    ("A RhD negative (A-)","A-"),
    ("B RhD positive (B+)","B+"),
    ("B RhD negative (B-)","B-"),
    ("O RhD positive (O+)","O+"),
    ("O RhD negative (O-)","O-"),
    ("AB RhD positive (AB+)","AB+"),
    ("AB RhD negative (AB-)","AB-"),
]

class Donor(models.Model):
    name        = models.CharField(max_length=200,default="anomalous")
    bloodgroup  = models.CharField(max_length=200,choices=bloodtype)
    age         = models.IntegerField(validators=[
                    MaxValueValidator(60),
                    MinValueValidator(18)
                ])
    state       = models.CharField(max_length=200)
    city        = models.CharField(max_length=200)
 

    def __str__(self):
        return f"Name: $(self.name) Bloodgroup $(self.bloodgroup)"




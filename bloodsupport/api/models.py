from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator, RegexValidator

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

state = [

    ("Andhra Pradesh" ,"Andhra Pradesh"),
    ('Arunachal Pradesh','Arunachal Pradesh'),
    ("Assam","Assam"),
    ("Bihar","Bihar"),
    ("Chhatisgarh","Chhatisgarh"),
    ("Goa","Goa"),
    ("Gujarat","Gujarat"),
    ("Haryana","Haryana"),
    ("Himachal Pradesh","Himachal Pradesh"),
    ("Jharkhand","Jharkhand"),
    ("Karnataka","Karnataka"),
    ("Kerala","Kerala"),
    ("Madhya Pradesh","Madhya Pradesh"),
    ("Maharashtra","Maharashtra"),
    ("Manipur","Manipur"),
    ("Meghalaya","Meghalaya"),
    ("Mizoram","Mizoram"),
    ("Nagaland","Nagaland"),
    ("Odisha","Odisha"),
    ("Punjab","Punjab"),
    ("Rajasthan","Rajasthan"),
    ("Sikkim","Sikkim"),
    ("Tamil Nadu","Tamil Nadu"),
    ("Telangana","Telangana"),
    ("Telangana","Telangana"),
    ("Tripura","Tripura"),
    ("Uttarakhand","Uttarakhand"),
    ("Uttar Pradesh","Uttar Pradesh"),
    ("West Bengal","West Bengal"),
    ("Andaman & Nicobar Islands","Andaman & Nicobar Islands"),
    ("Chandigarh","Chandigarh"),
    ("Dadra & Nagar Haveli and Daman & Diu","Dadra & Nagar Haveli and Daman & Diu"),
    ("Delhi","Delhi"),
    ("Lakshadweep","Lakshadweep"),
    ("Puducherry","Puducherry"),
    ("Ladakh","Ladakh"),
    ("Jammu & Kashmir","Jammu & Kashmir")

]

phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")

class Donor(models.Model):
    name        = models.CharField(max_length=200,default="anomalous")
    bloodgroup  = models.CharField(max_length=200,choices=bloodtype)
    age         = models.IntegerField(validators=[
                    MaxValueValidator(60),
                    MinValueValidator(18)
                ])
    state       = models.CharField(max_length=200,choices=state)
    city        = models.CharField(max_length=200)
    phoneNumber = models.IntegerField(validators=[phone_regex], blank=True,null=True)
 

    def __str__(self):
        return f"Name: $(self.name) Bloodgroup $(self.bloodgroup)"




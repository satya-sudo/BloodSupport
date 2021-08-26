# Generated by Django 3.2.5 on 2021-08-26 13:13

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_donor_state'),
    ]

    operations = [
        migrations.AddField(
            model_name='donor',
            name='phoneNumber',
            field=models.IntegerField(blank=True, null=True, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.", regex='^\\+?1?\\d{9,15}$')]),
        ),
    ]
# Generated by Django 3.2.19 on 2024-01-11 21:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='manager',
            name='company_identifier',
            field=models.CharField(max_length=255),
        ),
    ]

# Generated by Django 3.2.19 on 2024-02-07 11:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0003_notification'),
    ]

    operations = [
        migrations.AddField(
            model_name='manager',
            name='ava_image',
            field=models.ImageField(default='avatars/default_avatar.png', upload_to='avatars/'),
        ),
    ]
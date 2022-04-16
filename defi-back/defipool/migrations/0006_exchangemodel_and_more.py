# Generated by Django 4.0.4 on 2022-04-16 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('defipool', '0005_myportfolioprojectmodel_claim_address_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='ExchangeModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('image', models.ImageField(upload_to='defi_exchanges/')),
                ('link', models.CharField(max_length=400)),
            ],
        ),
        migrations.RemoveField(
            model_name='myportfolioprojectmodel',
            name='exchanges',
        ),
        migrations.AddField(
            model_name='myportfolioprojectmodel',
            name='exchanges',
            field=models.ManyToManyField(blank=True, to='defipool.exchangemodel'),
        ),
    ]

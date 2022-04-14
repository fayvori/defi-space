# Generated by Django 4.0.3 on 2022-04-14 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ExchangeModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=200)),
                ('image', models.ImageField(upload_to='defi_exchanges/')),
                ('link', models.CharField(max_length=400)),
            ],
            options={
                'verbose_name': 'Биржи',
                'verbose_name_plural': 'Биржи',
            },
        ),
        migrations.CreateModel(
            name='InvestmentProjectModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('project_site', models.CharField(max_length=255)),
                ('image', models.ImageField(upload_to='defi_projects/')),
                ('description', models.TextField()),
                ('round', models.TextField()),
                ('vesting', models.TextField()),
                ('ido', models.TextField()),
                ('investors', models.TextField()),
                ('pool_address', models.CharField(default='0x04d217b5f603e779fd25eb28c3f22bfb11491628', max_length=255)),
                ('instagram_link', models.CharField(default='-', max_length=255)),
                ('facebook_link', models.CharField(default='-', max_length=255)),
                ('telegram_link', models.CharField(default='-', max_length=255)),
                ('twitter_link', models.CharField(default='-', max_length=255)),
                ('youtube_link', models.CharField(default='-', max_length=255)),
                ('discord_link', models.CharField(default='-', max_length=255)),
                ('github_link', models.CharField(default='-', max_length=255)),
                ('linkedin_link', models.CharField(default='-', max_length=255)),
                ('vk_link', models.CharField(default='-', max_length=255)),
            ],
            options={
                'verbose_name': 'Новый проект',
                'verbose_name_plural': 'Новый проект',
            },
        ),
        migrations.CreateModel(
            name='PreIDOHistoryModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('image', models.ImageField(upload_to='defi_history/')),
                ('entry_date', models.DateField()),
                ('profit', models.FloatField()),
                ('private_price', models.FloatField()),
                ('entry_price', models.FloatField()),
                ('price_token_today', models.FloatField()),
                ('price_today', models.FloatField()),
            ],
            options={
                'verbose_name': 'Pre IDO',
                'verbose_name_plural': 'Pre IDO',
            },
        ),
        migrations.CreateModel(
            name='MyPortfolioProjectModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('short_name', models.CharField(max_length=100)),
                ('price', models.FloatField()),
                ('my_investment', models.TextField()),
                ('vesting', models.TextField()),
                ('blockchain', models.CharField(max_length=100)),
                ('info', models.TextField()),
                ('to_fill_the_pull', models.TextField()),
                ('tge', models.TextField()),
                ('ido', models.TextField()),
                ('image', models.ImageField(upload_to='defi_projects/')),
                ('project_site', models.CharField(max_length=255)),
                ('instagram_link', models.CharField(default='-', max_length=255)),
                ('facebook_link', models.CharField(default='-', max_length=255)),
                ('telegram_link', models.CharField(default='-', max_length=255)),
                ('twitter_link', models.CharField(default='-', max_length=255)),
                ('youtube_link', models.CharField(default='-', max_length=255)),
                ('discord_link', models.CharField(default='-', max_length=255)),
                ('github_link', models.CharField(default='-', max_length=255)),
                ('linkedin_link', models.CharField(default='-', max_length=255)),
                ('vk_link', models.CharField(default='-', max_length=255)),
                ('dex_url', models.CharField(default='-', max_length=400)),
                ('live_chat_url', models.CharField(default='-', max_length=400)),
                ('scan_url', models.CharField(default='-', max_length=400)),
                ('exchanges', models.ManyToManyField(to='defipool.exchangemodel')),
            ],
            options={
                'verbose_name': 'Портфолио',
                'verbose_name_plural': 'Портфолио',
            },
        ),
    ]

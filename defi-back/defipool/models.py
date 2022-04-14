from django.db import models


class ExchangeModel(models.Model):
    name = models.CharField(max_length=200, default="")
    image = models.ImageField(upload_to="defi_exchanges/")
    link = models.CharField(max_length=400)

    class Meta:
        verbose_name = "Биржи"
        verbose_name_plural = "Биржи"

    def __str__(self):
        return self.name


class InvestmentProjectModel(models.Model):
    name = models.CharField(max_length=255, unique=True)
    # short_name = models.CharField(max_length=100)
    project_site = models.CharField(max_length=255)
    image = models.ImageField(upload_to="defi_projects/")
    description = models.TextField()
    # round = models.CharField(max_length=100)
    # price = models.FloatField()
    round = models.TextField()
    vesting = models.TextField()
    ido = models.TextField()
    investors = models.TextField()
    pool_address = models.CharField(max_length=255, default="0x04d217b5f603e779fd25eb28c3f22bfb11491628")
    instagram_link = models.CharField(max_length=255, default="-")
    facebook_link = models.CharField(max_length=255, default="-")
    telegram_link = models.CharField(max_length=255, default="-")
    twitter_link = models.CharField(max_length=255, default="-")
    youtube_link = models.CharField(max_length=255, default="-")
    discord_link = models.CharField(max_length=255, default="-")
    github_link = models.CharField(max_length=255, default="-")
    linkedin_link = models.CharField(max_length=255, default="-")
    vk_link = models.CharField(max_length=255, default="-")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Новый проект"
        verbose_name_plural = "Новый проект"


class MyPortfolioProjectModel(models.Model):
    name = models.CharField(max_length=255, unique=True)
    short_name = models.CharField(max_length=100)
    price = models.FloatField()
    my_investment = models.TextField()
    vesting = models.TextField()
    blockchain = models.CharField(max_length=100)
    info = models.TextField()
    entry_date = models.TextField()
    tge = models.TextField()
    ido = models.TextField()
    image = models.ImageField(upload_to="defi_projects/")
    project_site = models.CharField(max_length=255)
    exchanges = models.ManyToManyField(ExchangeModel)

    instagram_link = models.CharField(max_length=255, default="-")
    facebook_link = models.CharField(max_length=255, default="-")
    telegram_link = models.CharField(max_length=255, default="-")
    twitter_link = models.CharField(max_length=255, default="-")
    youtube_link = models.CharField(max_length=255, default="-")
    discord_link = models.CharField(max_length=255, default="-")
    github_link = models.CharField(max_length=255, default="-")
    linkedin_link = models.CharField(max_length=255, default="-")
    vk_link = models.CharField(max_length=255, default="-")

    dex_url = models.CharField(max_length=400, default="-")
    live_chat_url = models.CharField(max_length=400, default="-")
    scan_url = models.CharField(max_length=400, default="-")

    class Meta:
        verbose_name = "Портфолио"
        verbose_name_plural = "Портфолио"

    def __str__(self):
        return self.name


class PreIDOHistoryModel(models.Model):
    name = models.CharField(max_length=50, unique=True)
    image = models.ImageField(upload_to="defi_history/")
    entry_date = models.DateField()
    profit = models.FloatField()
    private_price = models.FloatField()
    entry_price = models.FloatField()
    price_token_today = models.FloatField()
    price_today = models.FloatField()

    class Meta:
        verbose_name = "Pre IDO"
        verbose_name_plural = "Pre IDO"

    def __str__(self):
        return self.name

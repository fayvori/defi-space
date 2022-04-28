from django.db import models


class ExchangeModel(models.Model):
    name = models.CharField(max_length=200, default="", verbose_name='Имя биржи')
    image = models.ImageField(upload_to="defi_exchanges/", verbose_name='Изображение')
    link = models.CharField(max_length=400, verbose_name='Ссылка')

    class Meta:
        verbose_name = "Биржи"
        verbose_name_plural = "Биржи"

    def __str__(self):
        return self.name


class MyPortfolioProjectModel(models.Model):
    name = models.CharField(max_length=255, unique=True, verbose_name='Имя монеты')
    short_name = models.CharField(max_length=100, verbose_name='Короткое имя монеты')
    project_site = models.CharField(max_length=255, verbose_name='Сайт монеты')
    image = models.ImageField(upload_to="defi_projects/", verbose_name='Изображение')
    price = models.FloatField(verbose_name='Цена')
    round = models.TextField(verbose_name='Раунд')
    vesting = models.TextField(verbose_name='Вестинг')
    ido = models.TextField(verbose_name='ido')
    investors = models.TextField(verbose_name='Инвестроры')
    pool_address = models.CharField(max_length=400, default="-")
    claim_address = models.CharField(max_length=400, default="-")
    claim_network = models.CharField(max_length=400, default="-")
    cmc_id = models.IntegerField(default=0)

    my_investment = models.TextField(verbose_name='Мои инвестиции')
    blockchain = models.CharField(max_length=100)
    info = models.TextField(verbose_name='Описание / Информация о монете')
    entry_date = models.TextField(verbose_name='Дата входа')
    tge = models.TextField()
    seen_in_portfolio_and_history = models.BooleanField(default=False, verbose_name='Отображать во вкладках "Портфолио" и "История"')
    exchanges = models.ManyToManyField(ExchangeModel, blank=True, verbose_name='Биржи')
    total_coins = models.IntegerField(default=0, verbose_name='Количество монет')

    instagram_link = models.CharField(max_length=255, default="-", verbose_name='Инстаграм')
    facebook_link = models.CharField(max_length=255, default="-", verbose_name='Фейсбук')
    telegram_link = models.CharField(max_length=255, default="-", verbose_name='Телеграм')
    twitter_link = models.CharField(max_length=255, default="-", verbose_name='Твиттер')
    youtube_link = models.CharField(max_length=255, default="-", verbose_name='Ютуб')
    discord_link = models.CharField(max_length=255, default="-", verbose_name='Дискорд')
    github_link = models.CharField(max_length=255, default="-", verbose_name='Гитхаб')
    linkedin_link = models.CharField(max_length=255, default="-", verbose_name='Линкедлн')
    vk_link = models.CharField(max_length=255, default="-", verbose_name='Вконтакте')

    dex_url = models.CharField(max_length=400, default="-")
    live_chat_url = models.CharField(max_length=400, default="-")
    scan_url = models.CharField(max_length=400, default="-")

    class Meta:
        verbose_name = "Проекты"
        verbose_name_plural = "Проекты"
        ordering = ('-id',)

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
        ordering = ('-id',)

    def __str__(self):
        return self.name

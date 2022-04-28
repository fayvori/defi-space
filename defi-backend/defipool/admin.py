from django.contrib import admin
from .models import PreIDOHistoryModel, MyPortfolioProjectModel, \
    ExchangeModel

admin.site.site_header = "Defi admin"


@admin.register(MyPortfolioProjectModel)
class MyPortfolioProjectAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Новый проект", {
            'fields': ('name', 'short_name', 'project_site', 'image', 'round', 'vesting', 'ido', 'investors',
                       'info', 'pool_address', 'claim_address', 'claim_network', 'cmc_id')
        }),

        ("Дополнительные поля для портфолио", {
            'fields': ('my_investment', 'price', 'blockchain', 'entry_date', 'tge', 'seen_in_portfolio_and_history',
                       'exchanges', 'total_coins')
        }),
        ("Социальные сети", {
            'fields': ('instagram_link', 'facebook_link', 'telegram_link', 'twitter_link', 'youtube_link',
                       'discord_link', 'github_link', 'linkedin_link', 'vk_link')
        }),
        ("Кнопки-ссылки", {
            'fields': ('dex_url', 'live_chat_url', 'scan_url')
        }),
    )


@admin.register(ExchangeModel)
class ExchangeAdmin(admin.ModelAdmin):
    list_display = ['name']
    ordering = ['name']


admin.site.register(PreIDOHistoryModel)

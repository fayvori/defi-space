from django.contrib import admin
from .models import InvestmentProjectModel, PreIDOHistoryModel, MyPortfolioProjectModel, \
    ExchangeModel

admin.site.site_header = "Defi admin"


@admin.register(ExchangeModel)
class ExchangeAdmin(admin.ModelAdmin):
    list_display = ['name']
    ordering = ['name']


admin.site.register(InvestmentProjectModel)
admin.site.register(PreIDOHistoryModel)
admin.site.register(MyPortfolioProjectModel)

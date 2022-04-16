from django.contrib import admin
from .models import InvestmentProjectModel, PreIDOHistoryModel, MyPortfolioProjectModel

admin.site.site_header = "Defi admin"

admin.site.register(InvestmentProjectModel)
admin.site.register(PreIDOHistoryModel)
admin.site.register(MyPortfolioProjectModel)

from .models import InvestmentProjectModel, PreIDOHistoryModel, MyPortfolioProjectModel, ExchangeModel
from rest_framework import serializers


class PreIDOHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PreIDOHistoryModel
        fields = '__all__'


class InvestmentProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentProjectModel
        fields = '__all__'


class MyPortfolioProjectModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyPortfolioProjectModel
        fields = '__all__'


class ExchangeModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExchangeModel
        fields = ['image', 'link']

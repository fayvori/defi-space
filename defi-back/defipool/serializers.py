from .models import InvestmentProjectModel, PreIDOHistoryModel, MyPortfolioProjectModel, \
    ExchangeModel
from rest_framework import serializers


class PreIDOHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PreIDOHistoryModel
        fields = '__all__'


class ExchangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExchangeModel
        fields = ['image', 'link']


class InvestmentProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentProjectModel
        fields = '__all__'


class MyPortfolioProjectModelSerialzier(serializers.ModelSerializer):
    exchanges = ExchangeSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = MyPortfolioProjectModel
        fields = '__all__'

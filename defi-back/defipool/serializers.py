from .models import InvestmentProjectModel, PreIDOHistoryModel, MyPortfolioProjectModel
from rest_framework import serializers


class PreIDOHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PreIDOHistoryModel
        fields = '__all__'


class InvestmentProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentProjectModel
        fields = '__all__'


class MyPortfolioProjectModelSerialzier(serializers.ModelSerializer):
    class Meta:
        model = MyPortfolioProjectModel
        fields = '__all__'

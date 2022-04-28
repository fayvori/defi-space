from rest_framework import serializers
from .models import PreIDOHistoryModel, MyPortfolioProjectModel, \
    ExchangeModel


class PreIDOHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = PreIDOHistoryModel
        fields = '__all__'


class ExchangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExchangeModel
        fields = ['image', 'link']


class MyPortfolioProjectModelSerialzier(serializers.ModelSerializer):
    exchanges = ExchangeSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = MyPortfolioProjectModel
        fields = '__all__'

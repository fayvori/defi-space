from rest_framework import viewsets
from .models import InvestmentProjectModel, PreIDOHistoryModel, MyPortfolioProjectModel
from .serializers import InvestmentProjectSerializer, PreIDOHistorySerializer, MyPortfolioProjectModelSerializer


class InvestmentProjectViewSet(viewsets.ModelViewSet):
    queryset = InvestmentProjectModel.objects.all()
    serializer_class = InvestmentProjectSerializer


class PreIDOHistoryViewSet(viewsets.ModelViewSet):
    queryset = PreIDOHistoryModel.objects.all()
    serializer_class = PreIDOHistorySerializer


class MyPortfolioViewSet(viewsets.ModelViewSet):
    queryset = MyPortfolioProjectModel.objects.all()
    serializer_class = MyPortfolioProjectModelSerializer

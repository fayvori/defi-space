from rest_framework import viewsets
from .models import PreIDOHistoryModel, MyPortfolioProjectModel
from .serializers import PreIDOHistorySerializer, MyPortfolioProjectModelSerialzier


class PreIDOHistoryViewSet(viewsets.ModelViewSet):
    queryset = PreIDOHistoryModel.objects.all()
    serializer_class = PreIDOHistorySerializer


class MyPortfolioViewSet(viewsets.ModelViewSet):
    queryset = MyPortfolioProjectModel.objects.all()
    serializer_class = MyPortfolioProjectModelSerialzier

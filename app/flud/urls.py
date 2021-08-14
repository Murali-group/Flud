from django.conf.urls import include, url
from django.contrib import admin

admin.autodiscover()

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    url(r'^', include('applications.home.urls')),
    url(r'^', include('applications.games.urls'))
]

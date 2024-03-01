from django.shortcuts import render, redirect
from django.http import JsonResponse


def index(request):
    if request.method == 'POST':
        file = request.FILES.get('file')
        if file:
            request.session['current_file'] = file.name
            return JsonResponse({'success': True})

    return render(request, 'index.html')


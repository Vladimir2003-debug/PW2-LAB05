from django.shortcuts import render,get_object_or_404
from django.http import ( HttpResponse, 
                          JsonResponse,
                        )
from .models import Post
# Create your views here.

def MyPersonalBlog(request):
    blogs = Post.objects.all()
    context = {
        'blogs':blogs
    }

    return render(request, 'index.html',context)

def ViewContent(request):
    title = request.GET.get('name','')
    post = get_object_or_404(Post, title = title )
    print(post)
    view = {
        'text': post.text
    }

    return JsonResponse(view)

def DeleteFile(request):

    return JsonResponse()
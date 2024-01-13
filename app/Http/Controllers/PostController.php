<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::orderBy("created_at","desc")->paginate(10);
        return view('dashboard', [
            'posts' => $posts,
        ]);
    }

    public function show(Post $post)
    {
        
    }

    public function create()
    {
        return view('post.create');
    }

    public function store(Request $request)
    {

    }

    public function update(Request $request, Post $post)
    {
        //
    }

    public function edit(Post $post)
    {
        //
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->back();
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\Question as QuestionResource;
use App\Http\Resources\ViewQuestion;
use App\Question;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Builder;

class QuestionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index', 'show', 'top10');
        $this->authorizeResource(Question::class, 'question');
    }

    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function index(Request $request)
    {
        $search = $request->get('search');
        $sort = $request->get('sort');

        return QuestionResource::collection(
            Question::when($search, function ($query, $search) {
                return $query->where('title', 'like', '%' . $search . '%');
            })
                ->when($sort, function ($query, $sort) {
                    return $query->orderBy($sort, 'desc');
                }, function ($query) {
                    return $query->orderBy('created_at', 'desc');
                })
                ->paginate()
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function my(Request $request)
    {
        $search = $request->get('search');
        $sort = $request->get('sort');

        return QuestionResource::collection(
            Question::when($search, function ($query, $search) {
                return $query->where('title', 'like', '%' . $search . '%');
            })
                ->when($sort, function ($query, $sort) {
                    return $query->orderBy($sort, 'desc');
                }, function ($query) {
                    return $query->orderBy('created_at', 'desc');
                })
                ->where('user_id', $request->user()->id)
                ->paginate()
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function commented(Request $request)
    {
        $search = $request->get('search');
        $sort = $request->get('sort');

        return QuestionResource::collection(
            Question::when($search, function ($query, $search) {
                return $query->where('title', 'like', '%' . $search . '%');
            })
                ->when($sort, function ($query, $sort) {
                    return $query->orderBy($sort, 'desc');
                }, function ($query) {
                    return $query->orderBy('created_at', 'desc');
                })
                ->whereHas('replies', function (Builder $query) use ($request) {
                    $query->where('user_id', $request->user()->id);
                })
                ->paginate()
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function top10(Request $request)
    {
        return QuestionResource::collection(
            Question::orderBy('reply_count', 'desc')->limit(10)->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */
    public function store(Request $request)
    {
        $question = Question::create([
            'user_id' => $request->user()->id,
            'category_id' => $request->category_id,
            'title' => $request->title,
            'body' => $request->body,
        ]);

        return new ViewQuestion($question);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Question $question
     */
    public function show(Question $question)
    {
        $question->views_count++;
        $question->save();

        return new ViewQuestion($question);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Question $question
     */
    public function update(Request $request, Question $question)
    {
        $question->update($request->only(['title', 'body', 'category_id']));

        return new ViewQuestion($question);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Question $question
     * @throws \Exception
     */
    public function destroy(Question $question)
    {
        $question->delete();

        return response()->json(null, 204);
    }
}

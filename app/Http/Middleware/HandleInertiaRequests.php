<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
<<<<<<< HEAD
     * @return array
=======
     * @return mixed[]
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
<<<<<<< HEAD
=======
            'flash' => [
                'message' => fn () => $request->session()->get('message')
            ],
>>>>>>> 3c8e8ffbfd64f6f4f5f4cfde92b1c5013f6fb596
        ]);
    }
}

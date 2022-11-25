<?php

namespace App\Http\Controllers;

use App\Models\HomeServantDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HomeServantDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = HomeServantDetails::OrderBy('id', 'DESC')->get();
        return response()->json([
            'status' => 200,
            'data' => $data,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'servant_name' => 'required',
                // 'nid' => 'required',
                // 'mobile' => 'required',
                // 'area' => 'required',

            ],
            [
                'servant_name.required' => 'Required',
                // 'nid.required' => 'Required',
                // 'mobile.required' => 'Required',
                // 'area.required' => 'Required',

            ]
        );


        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'error' => $validator->messages(),
            ]);
        } else {
            $data = $request->all();

            $datum = HomeServantDetails::create($data);
            return response()->json([
                'status' => 200,
                'home_servant_details' => $datum,
                'message' => 'Home Servant Added Successfully !',
            ]);
        };
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\HomeServantDetails  $homeServantDetails
     * @return \Illuminate\Http\Response
     */
    public function show(HomeServantDetails $homeServantDetails)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\HomeServantDetails  $homeServantDetails
     * @return \Illuminate\Http\Response
     */
    public function edit(HomeServantDetails $homeServantDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\HomeServantDetails  $homeServantDetails
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HomeServantDetails $homeServantDetails)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\HomeServantDetails  $homeServantDetails
     * @return \Illuminate\Http\Response
     */
    public function destroy(HomeServantDetails $homeServantDetails)
    {
        //
    }
}

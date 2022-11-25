<?php

namespace App\Http\Controllers;

use App\Models\FlatDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FlatDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = FlatDetails::OrderBy('id', 'DESC')->get();
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
                'flat_name' => 'required',
                // 'flat_renter_name' => 'required',
                // 'referral_code' => 'required',

            ],
            [
                'flat_name.required' => 'Required',
                // 'flat_renter_name.required' => 'Required',
                // 'referral_code.required' => 'Required',

            ]
        );


        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'error' => $validator->messages(),
            ]);
        } else {
            $data = $request->all();

            $datum = FlatDetails::create($data);
            return response()->json([
                'status' => 200,
                'flat_details' => $datum,
                'message' => 'Flat Details Added Successfully !',
            ]);
        };
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FlatDetails  $flatDetails
     * @return \Illuminate\Http\Response
     */
    public function show(FlatDetails $flatDetails)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FlatDetails  $flatDetails
     * @return \Illuminate\Http\Response
     */
    public function edit(FlatDetails $flatDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FlatDetails  $flatDetails
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FlatDetails $flatDetails)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FlatDetails  $flatDetails
     * @return \Illuminate\Http\Response
     */
    public function destroy(FlatDetails $flatDetails)
    {
        //
    }
}

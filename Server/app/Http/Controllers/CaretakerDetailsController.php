<?php

namespace App\Http\Controllers;

use App\Models\CaretakerDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CaretakerDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = CaretakerDetails::OrderBy('id', 'DESC')->get();
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
                'caretaker_name' => 'required',
                // 'land_lord_master_id' => 'required',
                // 'nid' => 'required',
                // 'mobile' => 'required',
                // 'area' => 'required',

            ],
            [
                'caretaker_name.required' => 'Required',
                // 'land_lord_master_id.required' => 'Required',
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

            $datum = CaretakerDetails::create($data);
            return response()->json([
                'status' => 200,
                'caretaker_details' => $datum,
                'message' => 'Caretaker Details Added Successfully !',
            ]);
        };
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CaretakerDetails  $caretakerDetails
     * @return \Illuminate\Http\Response
     */
    public function show(CaretakerDetails $caretakerDetails)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CaretakerDetails  $caretakerDetails
     * @return \Illuminate\Http\Response
     */
    public function edit(CaretakerDetails $caretakerDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CaretakerDetails  $caretakerDetails
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CaretakerDetails $caretakerDetails)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CaretakerDetails  $caretakerDetails
     * @return \Illuminate\Http\Response
     */
    public function destroy(CaretakerDetails $caretakerDetails)
    {
        //
    }
}

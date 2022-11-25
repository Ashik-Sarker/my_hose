<?php

namespace App\Http\Controllers;

use App\Models\LandLord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LandLordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = LandLord::OrderBy('id', 'DESC')->get();
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
        // Making validation and make messages
        $validator = Validator::make(
            $request->all(),
            [
                'land_lord_picture' => 'required',
                'land_lord_permanent_address' => 'required',
                'owner_name' => 'required',
                'father_name' => 'required',
                'mother_name' => 'required',
                'date_of_birth' => 'required',
                'marital_status' => 'required',
                'occupation' => 'required',
                'religion' => 'required',
                'education' => 'required',
                'mobile' => 'required',
                'email' => 'required',
                'nid' => 'required',
                'passport' => 'required',
                'land_lord_form_submit_date' => 'required',
                'land_lord_signature' => 'required',
            ],
            [
                'land_lord_picture.required' => 'Required',
                'land_lord_permanent_address.required' => 'Required',
                'owner_name.required' => 'Required',
                'father_name.required' => 'Required',
                'mother_name.required' => 'Required',
                'date_of_birth.required' => 'Required',
                'marital_status.required' => 'Required',
                'occupation.required' => 'Required',
                'religion.required' => 'Required',
                'education.required' => 'Required',
                'mobile.required' => 'Required',
                'email.required' => 'Required',
                'nid.required' => 'Required',
                'passport.required' => 'Required',
                'land_lord_form_submit_date.required' => 'Required',
                'land_lord_signature.required' => 'Required',
            ]
        );


        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'error' => $validator->messages(),
            ]);
        }else{
            $data = $request->all();

            $datum = LandLord::create($data);
            return response()->json([
                'status' => 200,
                'land_lord_details' => $datum,
                'message' => 'Land Lord Added Successfully !',
            ]);

        };


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LandLord  $landLord
     * @return \Illuminate\Http\Response
     */
    public function show(LandLord $landLord)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LandLord  $landLord
     * @return \Illuminate\Http\Response
     */
    public function edit(LandLord $landLord)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LandLord  $landLord
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LandLord $landLord)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LandLord  $landLord
     * @return \Illuminate\Http\Response
     */
    public function destroy(LandLord $landLord)
    {
        //
    }
}

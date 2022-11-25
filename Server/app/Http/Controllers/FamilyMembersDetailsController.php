<?php

namespace App\Http\Controllers;

use App\Models\FamilyMembersDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FamilyMembersDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = FamilyMembersDetails::OrderBy('id', 'DESC')->get();
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
                'member_name' => 'required',
                // 'land_lord_master_id' => 'required',
                // 'occupation' => 'required',
                // 'age' => 'required',
                // 'mobile' => 'required',
                // 'gender' => 'required'

            ],
            [
                'member_name.required' => 'Required',
                // 'land_lord_master_id.required' => 'Required',
                // 'occupation.required' => 'Required',
                // 'age.required' => 'Required',
                // 'mobile.required' => 'Required',
                // 'gender.required' => 'Required',

            ]
        );


        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'error' => $validator->messages(),
            ]);
        } else {
            $data = $request->all();

            $datum = FamilyMembersDetails::create($data);
            return response()->json([
                'status' => 200,
                'family_member_details' => $datum,
                'message' => 'Family Member Added Successfully !',
            ]);
        };
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FamilyMembersDetails  $familyMembersDetails
     * @return \Illuminate\Http\Response
     */
    public function show(FamilyMembersDetails $familyMembersDetails)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FamilyMembersDetails  $familyMembersDetails
     * @return \Illuminate\Http\Response
     */
    public function edit(FamilyMembersDetails $familyMembersDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FamilyMembersDetails  $familyMembersDetails
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FamilyMembersDetails $familyMembersDetails)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FamilyMembersDetails  $familyMembersDetails
     * @return \Illuminate\Http\Response
     */
    public function destroy(FamilyMembersDetails $familyMembersDetails)
    {
        //
    }
}

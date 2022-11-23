<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('land_lords', function (Blueprint $table) {
            $table->id();

            $table->string('land_lord_picture')->nullable();
            $table->string('land_lord_permanent_address')->nullable();

            $table->string('owner_name')->nullable();
            $table->string('father_name')->nullable();
            $table->string('mother_name')->nullable();
            $table->string('date_of_birth')->nullable();

            $table->string('marital_status')->nullable();
            $table->string('occupation')->nullable();
            $table->string('religion')->nullable();

            $table->string('education')->nullable();
            $table->string('mobile')->nullable();
            $table->string('email')->nullable();
            $table->string('nid')->nullable();
            $table->string('passport')->nullable();

            // $table->string('emergency_contact_id')->nullable();
            // $table->string('family_members_details_id')->nullable();
            // $table->string('home_servant_details_id')->nullable();
            // $table->string('driver_details_id')->nullable();
            // $table->string('caretaker_details_id')->nullable();
            // $table->string('flat_details_id')->nullable();
            $table->string('land_lord_form_submit_date')->nullable();
            $table->string('land_lord_signature')->nullable();


            $table->integer('delete_status')->default(0);
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('land_lords');
    }
};

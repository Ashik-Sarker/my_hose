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
        Schema::create('family_members_details', function (Blueprint $table) {
            $table->id();

            $table->string('land_lord_master_id')->nullable();
            $table->string('member_name')->nullable();
            $table->string('occupation')->nullable();
            $table->string('age')->nullable();
            $table->string('mobile')->nullable();
            $table->string('gender')->nullable();

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
        Schema::dropIfExists('family_members_details');
    }
};

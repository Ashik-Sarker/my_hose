<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LandLord>
 */
class LandLordFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'land_lord_picture' => $this->faker->word(),
            'land_lord_permanent_address' => $this->faker->word(),
            'owner_name' => $this->faker->word(),
            'father_name' => $this->faker->word(),
            'mother_name' => $this->faker->word(),
            'date_of_birth' => $this->faker->word(),
            'marital_status' => $this->faker->word(),
            'occupation' => $this->faker->word(),
            'religion' => $this->faker->word(),
            'education' => $this->faker->word(),
            'mobile' => $this->faker->randomDigit(),
            'email' => $this->faker->word(),
            'nid' => $this->faker->randomDigit(),
            'passport' => $this->faker->word(),
            'land_lord_form_submit_date' => $this->faker->word(),
            'land_lord_signature' => $this->faker->word()
        ];
    }
}

<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FlatDetails>
 */
class FlatDetailsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'flat_name' => $this->faker->word(),
            'flat_renter_name' => $this->faker->word(),
            'referral_code' => $this->faker->randomDigit(),
        ];
    }
}

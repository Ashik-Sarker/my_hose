<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DriverDetails>
 */
class DriverDetailsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'driver_name' => $this->faker->word(),
            'nid' => $this->faker->randomDigit(),
            'mobile' => $this->faker->randomDigit(),
            'area' => $this->faker->word(),
        ];
    }
}

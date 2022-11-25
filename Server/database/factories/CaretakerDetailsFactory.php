<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CaretakerDetails>
 */
class CaretakerDetailsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'caretaker_name' => $this->faker->word(),
            'nid' => $this->faker->randomDigit(),
            'mobile' => $this->faker->randomDigit(),
            'area' => $this->faker->word(),
        ];
    }
}

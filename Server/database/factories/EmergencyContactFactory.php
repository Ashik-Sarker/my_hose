<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EmergencyContact>
 */
class EmergencyContactFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'relationship' => $this->faker->word(),
            'nid' => $this->faker->randomDigit(),
            'address' => $this->faker->word(),
            'age' => $this->faker->randomDigit(),
            'mobile' => $this->faker->randomDigit(),
        ];
    }
}

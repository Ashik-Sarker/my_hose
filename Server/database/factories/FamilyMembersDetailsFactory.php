<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FamilyMembersDetails>
 */
class FamilyMembersDetailsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'member_name' => $this->faker->word(),
            'occupation' => $this->faker->word(),
            'age' => $this->faker->randomDigit(),
            'mobile' => $this->faker->randomDigit(),
            'gender' => $this->faker->word(),
        ];
    }
}

<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HomeServantDetails>
 */
class HomeServantDetailsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            // 'land_lord_master_id' => $this->faker->randomDigit(),
            'servant_name' => $this->faker->word(),
            'nid' => $this->faker->randomDigit(),
            'mobile' => $this->faker->randomDigit(),
            'area' => $this->faker->randomDigit(),
        ];
    }
}

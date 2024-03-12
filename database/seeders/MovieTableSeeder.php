<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://placehold.co/400',
                'thumbnail' => 'https://placehold.co/400',
                'rating' => 9.3,
                'is_featured' => true
            ],
            [
                'name' => 'The Godfther',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => 'https://placehold.co/400',
                'thumbnail' => 'https://placehold.co/400',
                'rating' => 9.2,
                'is_featured' => false
            ],
            [
                'name' => 'The Godfther Part II',
                'slug' => 'the-godfather-part-ii',
                'category' => 'Drama',
                'video_url' => 'https://placehold.co/400',
                'thumbnail' => 'https://placehold.co/400',
                'rating' => 9.0,
                'is_featured' => false
            ]
        ];

        Movie::insert($movies);
    }
}

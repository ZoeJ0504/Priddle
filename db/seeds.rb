# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

Post.create(user_id: 2, group_id: 1, text:"What is so fragile that saying its name breaks it?")
Post.create(user_id: 2, group_id: 1, text:"What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?")
Post.create(user_id: 2, group_id: 1, text:"What can fill a room but takes up no space?")
Post.create(user_id: 3, group_id: 1, text:"If you drop me I'm sure to crack, but give me a smile and I'll always smile back. What am I?")

Post.create(user_id: 3, group_id: 2, text:"https://www.rd.com/wp-content/uploads/2017/10/01_can-you-spot-the-difference-in-these-10-pictures-courtesy-maggie-moon-of-the-mind-diet.jpg")
Post.create(user_id: 4, group_id: 2, text:"https://www.rd.com/wp-content/uploads/2017/10/03_can-you-spot-the-difference-in-these-10-pictures-407123503-evgeny-karandaev.jpg")
Post.create(user_id: 5, group_id: 2, text:"https://www.rd.com/wp-content/uploads/2017/10/05_Can-You-Spot-the-Difference-in-These-10-Pictures-_5454517965_Kotsovolos-Panagiotis.jpg")

Post.create(user_id: 6, group_id: 3, text:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1354/MTkwNTgxNDMzNjk3NjQyMzY0/optical-illusions-6.webp")
Post.create(user_id: 6, group_id: 3, text:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_724/MTkwNTgxNDMzNjk1MzQ4NjA0/black-and-white-checkered-square-walled-tunnel-abstract-background.webp")
Post.create(user_id: 5, group_id: 3, text:"https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_582/MTkwNTgxNDMzOTY0MzA4MzQ4/the-penrose-triangle.webp")
Post.create(user_id: 4, group_id: 3, text:"https://upload.wikimedia.org/wikipedia/en/2/21/The_dress_blueblackwhitegold.jpg")
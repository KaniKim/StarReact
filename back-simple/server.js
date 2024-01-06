const http = require("http");
const express = require("express");

const app = express();

app.post("/streaming/apply_host", (req, res) => {
    res.send(
        {
			result: true,
			message: "Your Application is requested successfully.",
			code: "201",
			external_data: {
				id: 123,
				before_level: 0,
				after_level: 2,
				member: {
					id: 1234,
					level: 0,
					profile_image: {
						id: 2345,
						filename: "myprofile.png",
						thumb_url: "https://storeage.makestar.com/myprofile.thumb.png",
						mime: 'PNG'
					},
					nickname: "닉네임",
					user: {
						id: 3456,
						email: "sample@makestar.com",
						is_active: true
					},
					fandom: {
						id: 456,
						title: "ATINY",
						image: {
							id: 2345,
							filename: "ATINY_logo.png",
							thumb_url: "https://storeage.makestar.com/ATINY_logo.thumb.png",
							mime: 'PNG'
						},
						arist: {
							id: 56,
							name: "ATEEZ",
							image: {
								id: 2345,
								filename: "ATEEZ_main.png",
								thumb_url: "https://storeage.makestar.com/ATEEZ_main.thumb.png",
								mime: 'PNG'								
							}
						}
					}
				},
				status: 0
			}
        }
    )
})

const server = http.createServer(app);

server.listen(3000);
const http = require("http");
const express = require("express");

const app = express();

app.get("/streaming/cancel_host_apply", (req, res) => {
	res.send(
		{
			result: true,
			message: "Your Application is cancelled.",
			code: ""
		}
	)
}) 

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
							thumb_url: "https://pbs.twimg.com/media/D6Wg222U8AAkWz7?format=jpg&name=large",
							mime: 'PNG'
						},
						artist: {
							id: 56,
							name: "ATEEZ",
							image: {
								id: 2345,
								filename: "ATEEZ_main.png",
								thumb_url: "https://1000logos.net/wp-content/uploads/2022/03/Ateez-Logo.png",
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
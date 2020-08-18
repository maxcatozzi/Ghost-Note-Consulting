const mongoose = require("mongoose");
const blogPostModel = require("../models/blogpost.model");
const blogPostData = { title: "testTitle", body: "test body" };


describe("blog post tests", () => {
	beforeAll(async () => {
    console.log("testlog");
    require('dotenv').config();
		// console.log(process.env)

		await mongoose.connect(
			process.env.ATLAS_URI,
			{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
			(err) => {
				if (err) {
					console.error(err);
					process.exit(1);
				}
			}
		);
	});

	it("tests true", async function () {
		console.warn("warnnnn");
		expect(true).toBeTruthy();
	});

	// test create new blog post
	it("creates new blog post", async function () {
		const validBlogPost = new blogPostModel(blogPostData);
		const savedBlogPost = await validBlogPost.save();
		console.warn(savedBlogPost.title);
		expect(savedBlogPost._id).toBeDefined();
    expect(savedBlogPost.title).toBe(blogPostData.title);
    expect(savedBlogPost.body).toBe(blogPostData.body);
	});
});
